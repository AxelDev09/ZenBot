import{config as _0x30a4x1}from'../config.js';import fs from'fs';const pkg=JSON.parse(fs.readFileSync('./package.json','utf-8'));export default{command:['menu','menú','help','ayuda','allmenu','menucompleto','menúcompleto'],help:['𝙼𝙴𝙽𝚄𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙾'],tags:['🤖 𝗜𝗡𝗙𝗢𝗕𝗢𝗧'],run:async(_0x30a4x2,{conn:_0x30a4x3,plugins:_0x30a4x4,prefix:_0x30a4x5})=>{const _0x30a4x6=new Date().getHours();let _0x30a4x7='👋 ʜᴏʟᴀ';if(_0x30a4x6>=5&&_0x30a4x6<12){_0x30a4x7='🌅 ʙᴜᴇɴᴏs ᴅɪ́ᴀs'}else{if(_0x30a4x6>=12&&_0x30a4x6<18){_0x30a4x7='🌞 ʙᴜᴇɴᴀs ᴛᴀʀᴅᴇs'}else{_0x30a4x7='🌙 ʙᴜᴇɴᴀs ɴᴏᴄʜᴇs'}}const _0x30a4x8=_0x30a4x2.sender||_0x30a4x2.key.participant||_0x30a4x2.key.remoteJid;const _0x30a4x9='@'+_0x30a4x8.split('@')[0];const _0x30a4xa=process.uptime()*1000;const _0x30a4xb=Math.floor(_0x30a4xa/1000)%60;const _0x30a4xc=Math.floor(_0x30a4xa/(1000*60))%60;const _0x30a4xd=Math.floor(_0x30a4xa/(1000*60*60))%24;const _0x30a4xe=Math.floor(_0x30a4xa/(1000*60*60*24))%30;const _0x30a4xf=Math.floor(_0x30a4xa/(1000*60*60*24*30));let _0x30a4x10='';if(_0x30a4xf>0){_0x30a4x10=`${_0x30a4xf} ᴍᴇs${_0x30a4xf!==1?'ᴇs':''}`}else{if(_0x30a4xe>0){_0x30a4x10=`${_0x30a4xe} ᴅɪ́ᴀ${_0x30a4xe!==1?'s':''}`}else{if(_0x30a4xd>0){_0x30a4x10=`${_0x30a4xd} ʜᴏʀᴀ${_0x30a4xd!==1?'s':''}`}else{if(_0x30a4xc>0){_0x30a4x10=`${_0x30a4xc} ᴍɪɴᴜᴛᴏ${_0x30a4xc!==1?'s':''}`}else{_0x30a4x10=`${_0x30a4xb} sᴇɢᴜɴᴅᴏ${_0x30a4xb!==1?'s':''}`}}}}const _0x30a4x11={};for(const _0x30a4x12 of _0x30a4x4){if(!_0x30a4x12?.help||!_0x30a4x12.tags)continue;for(const _0x30a4x13 of _0x30a4x12.tags){if(!_0x30a4x11[_0x30a4x13])_0x30a4x11[_0x30a4x13]=[];_0x30a4x11[_0x30a4x13].push(..._0x30a4x12.help.map(_0x30a4x14=>`${_0x30a4x5}${_0x30a4x14}`))}}let _0x30a4x15='';let _0x30a4x16=0;for(const[_0x30a4x17,_0x30a4x18]of Object.entries(_0x30a4x11)){_0x30a4x15+=`\n╭──〔 ${_0x30a4x17.toUpperCase()} 〕\n${_0x30a4x18.map(_0x30a4x14=>`│• ${_0x30a4x14}`).join('\n')}\n╰──────────────\n`;_0x30a4x16+=_0x30a4x18.length}const _0x30a4x19=`
${_0x30a4x7}, ${_0x30a4x9}!
╭─────────────✧
│• ⏱️ ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ: *${_0x30a4x10}*
│• 🔖 ᴠᴇʀsɪᴏ́ɴ: *${pkg.version}*
│• 👤 ᴄʀᴇᴀᴅᴏʀ: *${_0x30a4x1.ownerName||'ᴅᴇsᴄᴏɴᴏᴄɪᴅᴏ'}*
│• ⚙️ ᴘʀᴇғɪᴊᴏ: *${_0x30a4x5}*
│• 📦 ᴛᴏᴛᴀʟ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏs: *${_0x30a4x16}*
╰─────────────✧
${_0x30a4x15}`.trim();const _0x30a4x1a=await import('fs');const _0x30a4x1b=await import('path');const _0x30a4x1c=_0x30a4x1b.join('./media/Menu-ZenBot.png');const _0x30a4x1d={key:{remoteJid:_0x30a4x2.chat,fromMe:false,id:'ZenBot-Fake',participant:'0@s.whatsapp.net'},message:{imageMessage:{caption:'🤖 𝘡𝘦𝘯𝘉𝘰𝘵 - 𝘗𝘢𝘯𝘦𝘭 𝘗𝘳𝘪𝘯𝘤𝘪𝘱𝘢𝘭',mimetype:'image/jpeg',jpegThumbnail:_0x30a4x1a.readFileSync(_0x30a4x1c)}}};await _0x30a4x3.sendMessage(_0x30a4x2.key.remoteJid,{image:_0x30a4x1a.readFileSync(_0x30a4x1c),caption:_0x30a4x19,mentions:[_0x30a4x8]},{quoted:_0x30a4x1d})}};