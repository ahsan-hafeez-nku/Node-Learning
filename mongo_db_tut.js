// -------------------- connection using mongodb ------------------

// import express from 'express';
// import { MongoClient } from 'mongodb';

// const dbName = 'college';
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// async function dbConnection() {
//     await client.connect().then(() => console.log("Connection Successfull"));
//     const db = client.db(dbName);
//     const studentCollection = db.collection('students');
//     const result = await studentCollection.find().toArray();
//     console.log(result);

// }
// dbConnection();

// const app = express();
// app.listen(3200); 

// -------------------- connection using mongoose ------------------
import mongoose from 'mongoose';

const dbName = 'college';

console.log('mongodb://localhost:27017/' + dbName);
async function dbConnection() {
    await mongoose.connect('mongodb://localhost:27017/' + dbName).then(() => console.log("Connection Successfull"));
    const studentSchema = new mongoose.Schema({
        name: String,
        age: Number,
        email: String,
    });
    const Student = mongoose.model('students', studentSchema);
    const result = await Student.find();
    console.log("📘 Students:", result);
}

dbConnection();

