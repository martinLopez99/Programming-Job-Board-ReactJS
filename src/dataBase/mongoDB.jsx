const MongoClient = require('mongodb').MongoClient;
const { username, password, host, dbName, collectionName } = require('./j6h15.jsx');

const uri = `mongodb+srv://${username}:${password}@${host}/?retryWrites=true&w=majority`;
let client;
let collection;

// Connects to the MongoDB database using the MongoClient object
async function connectToDB() {
    try {
        client = new MongoClient(uri, { useNewUrlParser: true });
        await client.connect();
        collection = client.db(dbName).collection(collectionName);
        console.log('Successfully connected to the database.');
    } catch (error) {
        console.error(`Error connecting to the database: ${error}`);
    }
}

// Finds a job in the database based on its ID
async function findJob(id) {
    try {
        const result = await collection.findOne({ id });
        console.log(result);
    } catch (error) {
        console.error(`Error finding job: ${error}`);
    }
}

// Closes the MongoDB database connection
async function close() {
    client.close();
}

// Finds all jobs in the database and logs the results
async function findAllJobs() {
    try {
        const cursor = collection.find({});
        const jobs = await cursor.toArray();
        console.log(jobs);
    } catch (error) {
        console.error(`Error finding all jobs: ${error}`);
    }
}

// Inserts a new job into the database
async function insertNewJob(job) {
    try {
        const result = await collection.insertOne(job);
        console.log(`Inserted job with ID: ${result.insertedId}`);
    } catch (error) {
        console.error(`Error inserting new job: ${error}`);
    }
}


module.exports = {
    connectToDB,
    findAllJobs,
    insertNewJob,
    findJob,
    close
};


