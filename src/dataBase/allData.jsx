const fs = require('fs');
//const { findJob } = require('./mongoDB.jsx');

async function findAllJobs() {
    const cursor = collection.find({});
    const jobs = await cursor.toArray();
    console.log(jobs);
}


findAllJobs();
