const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = '7d198b3c-257a-48a4-bac2-12d67cdab6b7';
const blockCollection = 'b9b8b1dd-761d-4205-a657-ebbabaeca358-block';

async function work() {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(blockCollection);
  const r = await collection.find().toArray();
  console.log('RRRRRRR', r);
}

work().catch(err => {
  console.error(err);
  process.exit(1);
});
