export default {
  help: ['𝙳𝙴𝚂𝙿𝚁𝙾𝙼𝙾𝚅𝙴𝚁 @𝚝𝚊𝚐'],
  tags: ['🧩 𝗣𝗔𝗥𝗔 𝗚𝗥𝗨𝗣𝗢𝗦'],
  command: ['despromover', 'despromote'],

  run: async (m, { conn, sender, isGroup, isBotAdmin, groupId }) => {
    if (!isGroup) {
      return m.reply('*[ ❗ ] 𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐟𝐮𝐧𝐜𝐢𝐨𝐧𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.*');
    }

    const groupMetadata = await conn.groupMetadata(groupId);
    const participants = groupMetadata.participants;

    const senderId = sender.endsWith('@s.whatsapp.net') ? sender : sender + '@s.whatsapp.net';
    const isAdmin = participants.find(p => p.id === senderId)?.admin;

    if (!isAdmin) {
      return m.reply('*[ ❗ ] 𝐒𝐨𝐥𝐨 𝐥𝐨𝐬 𝐚𝐝𝐦𝐢𝐧𝐬 𝐩𝐮𝐞𝐝𝐞𝐧 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨.*');
    }

    if (!isBotAdmin) {
      return m.reply('*[ ❗ ] 𝐄𝐥 𝐛𝐨𝐭 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐚 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫 𝐩𝐚𝐫𝐚 𝐞𝐣𝐞𝐜𝐮𝐭𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨.*');
    }

    const targetJid =
      m.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] ||
      m.message?.extendedTextMessage?.contextInfo?.participant;

    if (!targetJid) {
      return m.reply('[ ⚠️ ] ¡𝐀𝐬𝐞𝐠𝐮𝐫𝐚𝐭𝐞 𝐝𝐞 𝐦𝐞𝐧𝐜𝐢𝐨𝐧𝐚𝐫 𝐨 𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐞𝐫 𝐚 𝐚𝐥𝐠𝐮𝐢𝐞𝐧 𝐩𝐚𝐫𝐚 𝐝𝐞𝐬𝐩𝐫𝐨𝐦𝐨𝐯𝐞𝐫𝐥𝐨!');
    }

    try {
      await conn.groupParticipantsUpdate(groupId, [targetJid], 'demote');
      return conn.sendMessage(groupId, {
        text: `⚠️ @${targetJid.split('@')[0]} ya no es admin.`,
        mentions: [targetJid]
      }, { quoted: m });
    } catch (error) {
      console.error('❌ Error al intentar despromover:', error);
      return m.reply('[ ⚠️ ] *𝐍𝐨 𝐬𝐞 𝐩𝐮𝐝𝐨 𝐝𝐞𝐬𝐩𝐫𝐨𝐦𝐨𝐯𝐞𝐫 𝐚𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨.*');
    }
  }
};