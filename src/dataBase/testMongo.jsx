const { connectToDB, insertNewJob, findAllJobs, close } = require('./mongoDB.jsx');


const job = {
    id: 100,
    title: 'Software Engineer',
    company: 'XYZ Inc.',
    description: 'We are seeking a skilled software engineer to join our rapidly growing company. The successful candidate will be responsible for designing and building scalable software solutions, as well as collaborating with cross-functional teams to deliver high-quality products.',
    location: 'San Francisco, CA',
    salary: '$120,000 - $150,000 per year',
    job_type: 'Full-time',
    skills_required: 'Not set, please contact the company for details.',
    experience: 'Not set, please contact the company for details.',
    team_size: 'Not set, please contact the company for details.',
    benefits: 'Not set, please contact the company for details.',
    projects: 'Not set, please contact the company for details.',
    remote_working: 'Limited remote working options'
}



// Declare an async function named "test" that takes a single argument "job".
async function main(job) {
    // Connect to the database.
    await connectToDB();

    // Insert the job object into the database.
    await insertNewJob(job);

    // Find all the jobs in the database.
    await findAllJobs();

    // Close the database connection.
    await close();
}

// Call the "test" function and pass the "job" object as an argument.
main(job);