const dbManager = require('../../db');
const config = require('../../config');
const CONSTANS = require('../../const');

module.exports = async (list) => {
  const conectToDb = dbManager.mongodbClient.db(config.MONGO_DB_NAME);
  const collection = conectToDb.collection(CONSTANS.DB.COLLECTIONS.MESSAGE);
  const messageModel = await collection.find({}).toArray();
  if (messageModel.length == 0) {
    return {
      data: { message: 'no message in db' }
    };
  }
  let i = list * 10;
  if (messageModel.length >= 0 && messageModel.length <= 9) {
    return { data: { messageModel } };
  }
  let sendList = messageModel.slice(i, i + 10);
  return {
    data: sendList
  };
};
