'use server'

import { ContactForm } from "@/types";
import TelegramBot from 'node-telegram-bot-api';


const bot = new TelegramBot('6926482645:AAF-j0dbIrixWQax66PhGjg2pZCRQMC7FL0');
const chatId = -1002103277165;

export const sendMessage = async (contactMsg: ContactForm) => {
    try {
        let text1: string = `Name: ${contactMsg.name}\nEmail: ${contactMsg.email}\nSubject: ${contactMsg.subject}\nMessage: ${contactMsg.message}`;
        await bot.sendMessage(chatId, text1)
    } catch (error) {
        console.log(error)
    }
}