import type { Request, Response } from 'express';
import { createApp } from '../src/app.bootstrap';

type ExpressHandler = (req: Request, res: Response) => void;

let cachedExpressHandler: ExpressHandler | undefined;

async function getHandler(): Promise<ExpressHandler> {
  if (cachedExpressHandler) return cachedExpressHandler;

  const app = await createApp();
  await app.init();
  cachedExpressHandler = app.getHttpAdapter().getInstance() as ExpressHandler;
  return cachedExpressHandler;
}

export default async function handler(req: Request, res: Response) {
  const expressHandler = await getHandler();
  return expressHandler(req, res);
}
