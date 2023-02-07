const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');
const username = process.env.MONGO_DB_USERNAME; // ARREGLAR!
const password = process.env.MONGO_DB_PASSWORD; // ARREGLAR!
const host = 'cluster0.ncc21bh.mongodb.net';
const uri = `mongodb+srv://tincho1597:Martolomeo18@cluster0.ncc21bh.mongodb.net/?retryWrites=true&w=majority`;
let client;
let collection;
//mongodb+srv://tincho1597:Martolomeo18@cluster0.ncc21bh.mongodb.net/?retryWrites=true&w=majority
//mongodb+srv://${username}:${password}@${host}/?retryWrites=true&w=majority

async function connectToDB() {
    client = new MongoClient(uri, { useNewUrlParser: true });
    await client.connect();
    collection = client.db('job_list').collection('jobs');
}

async function findJob(id) {
    const result = await collection.findOne({ id });
    console.log(result);
}

async function close() {
    client.close();
}
async function findAllJobs() {
    const cursor = collection.find({});
    const jobs = await cursor.toArray();
    console.log(jobs);
}

async function insertNewJob(job) {
    const result = await collection.insertOne(job);
    console.log(`Inserted job with ID: ${result.insertedId}`);
}


/* async function findAllJobsAndSaveToFile() {
    const cursor = collection.find({});
    const jobs = await cursor.toArray();
    fs.writeFileSync('jobs.json', JSON.stringify(jobs), 'utf-8');
} */


module.exports = {
    connectToDB,
    findAllJobs,
    insertNewJob,
    findJob,
    close
};


