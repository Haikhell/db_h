const dbManager = require('../../db');
const CONSTANS = require('../../const');
const config = require('../../config');
module.exports = async (body) => {
  const now = new Date();
  const { email, text } = body;
  const reg = /^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i;
  if (!email.match(reg)) {
    return {
      data: { message: 'correct email' }
    };
  }
  if (!(/[^\s]/.test(text) && text.length <= 100)) {
    return { data: { message: 'message is empty' } };
  }
  const con = dbManager.mongodbClient.db(config.MONGO_DB_NAME);
  const co = con.collection(CONSTANS.DB.COLLECTIONS.MESSAGE);

  await co.insertOne({
    email,
    text,
    updateAt: now,
    createAt: now
  });
  return {
    data: { message: 'create and add' }
  };
};
