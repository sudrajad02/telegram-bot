import fetch from 'node-fetch';
import config from './app.config.json' assert { type: "json" };

const BOT_TOKEN = config.telegram.bot_id;
const GROUP_CHAT_ID = config.telegram.to;
const MESSAGE = 'Hello, this is a message from my Node.js bot!';

const sendMessage = async () => {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: GROUP_CHAT_ID,
      text: MESSAGE
    })
  });

  if (response.ok) {
    const jsonResponse = await response.json();
    console.log('Message sent successfully:', jsonResponse);
  } else {
    console.error('Failed to send message:', response.statusText);
  }
};

sendMessage();
