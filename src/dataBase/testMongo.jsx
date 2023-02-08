const { connectToDB, insertNewJob, findAllJobs, close } = require('./mongoDB.jsx');


// Declare an async function named "test" that takes a single argument "job".
async function main() {
    // Connect to the database.
    await connectToDB();

    // Find all the jobs in the database.
    await findAllJobs();

    // Close the database connection.
    await close();
}

// Call the "test" function and pass the "job" object as an argument.
main();