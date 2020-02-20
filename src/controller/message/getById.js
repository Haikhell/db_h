const dbManager = require('../../db');
const config = require('../../config');
const mongodb = require('mongodb');
const CONSTANS = require('../../const');

module.exports = async (id) => {
  const conectToDb = dbManager.mongodbClient.db(config.MONGO_DB_NAME);
  const collection = conectToDb.collection(CONSTANS.DB.COLLECTIONS.MESSAGE);
  const _id = new mongodb.ObjectId(id);
  const messageModel = await collection.findOne({ _id });
  if (!messageModel) {
    return { data: { message: 'no found message' } };
  }
  return {
    data: {
      messageModel
    }
  };
};
