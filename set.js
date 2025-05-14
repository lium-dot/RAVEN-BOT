/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUpvdnZmK1B1VzhrSndrMkpsU1ZRR0pRQWZqYkg0R1VkZGdnRmwrWExsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFhqOFpnWE1WMUkzeE5UejhZTDZoYkdrYzZaU05zSC9aL1oxZlc1NStVUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFQ28xT2VoS0xKSXBXR1A2OUIvUWYxeU1KaTZMZjdHYWtLK2k3Rnk1Z2xBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzZjdmMHN0dGtPcHpWR2x1R0hMUXBNam5mak5KSk9vaXE3T0I5cEFPOWhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFDS2xoU1ZYaUxsTWljdlNNc3NPT3g4WW1vTjE4TzNKMmZ5dWYzMUNsV0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtHTTR0cU1lSWx4dVh4RUwrUXJZWGhVTFhqdnlYNEpSUnBFQWI5SjBXMXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkVaKzlsazlTVmc3R2M2QnBqMmx6ZGpiQmc1SlpFTTdHK21rVnljSmVHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoielk0VVBsVWpsTjdick0xeEFJL3pydnFxVXVKV2g2TUN5SDg4cWZseVlVOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9JeVA4NzlBejZ4d3hkZTBJOFkxcnUyQkxIRVp3Rkl2Q25GQllDcVhWQ2dHRmpoM0hNNWZKL1BTK0ZPc3BBc1duU25LZEVIUklWUGt0UHcwRUU3Y2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQxLCJhZHZTZWNyZXRLZXkiOiJ2N0lNZlpvQzFZQWowUW83Q3R4MzRhWmpEa1BNZXhhRzV1L3k1T0VpVUFFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc1ODQ0MzExMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwQjYxODE2NzE5RkZCMTEwNjlDRTIwOENFQjBGMkUzMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ3MjI5OTc2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3NTg0NDMxMTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNEI5QUY3OEU0NjNDMTAyNDdBQzk2NjU3MUUyRjc4MzgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NzIyOTk3Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiX3NIb1luXzZTUy1DQmFBeUZUdUp1QSIsInBob25lSWQiOiI5MGUyYjU5OS1kZWE5LTQ2NTUtYmUyYS02MzRkYzkzMjY0NzMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2llS0JQMWlsR2xvazNoUk9QbXV1QmdOa1RZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFLZVN6aDdFOEtCRC9helZkV1F4WVRPYTlTOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJUWTZLMzlKTCIsIm1lIjp7ImlkIjoiMjU0NzU4NDQzMTExOjkyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKcnu+4juKYheGOr+KYvO+4juKEkuKYvO+4juKEkuKcqeKEsOKcq+KEleKZq+KYoO+4ju+4jiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTURSOG9rRUVJQzZrc0VHR0FjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOFI3QmdLeGJ2T043R25qU1ZYUmNOc0UzQ3pDRmwxaGdtZDU4T0drelJsYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUTdwREozOGN4OXVHUjdkRFoyb1kxQWMxTWlSYUMybSttYU1WeUhPckp3MDRvcGEwWmY0aHpsT3o3Y1ZzaDV3VzlZeGV2UzYxcCs5KzlGZ3ZOSlJyQmc9PSIsImRldmljZVNpZ25hdHVyZSI6InJacERiRlZUZ1lsK2lCR08zeGtjQjVGT1YxVWs4ZHhKWmFzOUNDOUViQ20rdFJUUXJZTlprLzlvK0lsLzcwbDVlYWY5Y2ZCVW8zVkNNK3R5NlR5WGdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzU4NDQzMTExOjkyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZFZXdZQ3NXN3pqZXhwNDBsVjBYRGJCTndzd2haZFlZSm5lZkRocE0wWlgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDcyMjk5NjYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTDg3In0=';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'FALSE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || '.';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PRIVATE';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';
const botname = process.env.BOTNAME || '𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧';
const antibot = process.env.ANTIBOT || 'TRUE';
const author = process.env.STICKER_AUTHOR ||'✞︎★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫☠︎︎';
const packname = process.env.STICKER_PACKNAME || '✞︎★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫☠︎︎';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '254758443111';
const owner = dev.split(",");
const menulink = process.env.MENU_LINK || 'https://i.ibb.co/tMZ8f8cG/file-1127.jpg';
const menu = process.env.MENU_TYPE || 'VIDEO';
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';
const antidel = process.env.ANTIDELETE || 'FALSE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const wapresence = process.env.WA_PRESENCE || 'TYPING';
const antilink = process.env.ANTILINK || 'FALSE';
const mycode = process.env.CODE || '254';
const antiforeign = process.env.ANTIFOREIGN || 'FALSE';
const port = process.env.PORT || 8080;
const antilinkall = process.env.ANTILINK_ALL || 'FALSE';

module.exports = { session, sessionName, autobio, author, packname, dev, owner, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, menulink, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
