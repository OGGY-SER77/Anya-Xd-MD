const fs = require('fs')
const chalk = require('chalk')

// Website Api Nya Bng
global.APIs = {
	zenz: 'https://api.lolhuman.xyz',
}

// Udah Free Apikey Jadi Klo Mau Ubah Silahkan
global.APIKeys = {
	'https://api.lolhuman.xyz': '4e2e2a1fdaac541c554a22c0', // Free Api Ke🕊️
}

// Other
global.namabot = ['Anya-xD']
global.namaowner = ['ʜᴇʟʟ ʙᴏʏ']
global.owner = ['917561823024']
global.premium = ['917561823024']
global.packname = '🔮'
global.author = '𝘼𝙣𝙮𝙖-𝙭𝘿'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'ᴅᴏɴᴇ',
    admin: 'ɢᴏʀᴜᴩ ᴀᴅᴍɪɴ ᴏɴʟʏ ᴜꜱᴇ!',
    botAdmin: 'ʙᴏᴛ ɪꜱ ɴᴏᴛ ᴀᴅᴍɪɴ!',
    owner: 'ᴏᴡɴᴇʀ ᴏɴʟʏ',
    group: 'ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴩ',
    private: 'ᴏɴʟʏ ᴩʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ',
    bot: 'ʙᴏᴛ ɴᴜᴍʙᴇʀ ᴏɴʟʏ',
    wait: '「▰▰▰▱▱▱▱▱▱▱」ᴩʟᴇᴀꜱᴇ ᴡᴀɪᴛ...',
    endLimit: 'ᴛʜᴇ ʟɪᴍɪᴛ ɪꜱ ᴏᴠᴇʀ ᴩʟᴇᴀꜱᴇ ᴡᴀɪᴛ 24 ʜᴏᴜʀ ᴛᴏ ʀᴇꜱᴇᴛ ʟɪᴍɪᴛ',
}
//If you give a limit, don't give it a little bit 
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/xavi.jpg') // Bot Menu Photo 
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' } // video menu url

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
