const { connectToDB, findJob, close } = require('./mongoDB.jsx');

async function main() {
    await connectToDB();
    await findJob(1);
    await close();
}

main();
