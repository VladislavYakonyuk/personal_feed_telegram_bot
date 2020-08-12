import Telegraf, { session } from "telegraf";

import {
  TELEGRAM_TOKEN
} from "./config";

export const bot = new Telegraf(TELEGRAM_TOKEN);
bot.use(session());