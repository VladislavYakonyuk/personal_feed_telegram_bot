import { bot } from "./telegram";

import { TelegrafContext } from "telegraf/typings/context";

bot.start((ctx: TelegrafContext) => ctx.reply(
  "BOT STARTED",
));


const start = async () => {
  try {
    await bot.launch();
    console.log("BOT STARTED");
  } catch (error) {
    console.info(error);
    start();
  }
}

start();