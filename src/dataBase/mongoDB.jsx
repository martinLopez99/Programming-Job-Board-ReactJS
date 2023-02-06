/* const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://tincho1597:Martolomeo18@cluster0.ncc21bh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

async function connectAndFind() {
    await client.connect();
    const collection = client.db('job_list').collection('jobs');
    const result = await collection.findOne({ id: 2 });
    console.log(result);
    client.close();
}

connectAndFind();
 */
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://tincho1597:Martolomeo18@cluster0.ncc21bh.mongodb.net/?retryWrites=true&w=majority";
let client;
let collection;

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

module.exports = {
    connectToDB,
    findJob,
    close
};


/* 
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://tincho1597:Martolomeo18@cluster0.ncc21bh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
    const collection = client.db('job_list').collection('jobs');
    err ? console.log('Error connecting to the database: ', err) : console.log('Successfully connected to the database');
    module.exports = { client, collection };
});
 */