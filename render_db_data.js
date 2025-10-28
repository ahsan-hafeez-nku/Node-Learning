import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import morgan from 'morgan';

const dbName = 'college';
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const app = express();
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
client.connect().then((connection) => {
    const db = connection.db(dbName);
    const studentCollection = db.collection('students');
    app.get('/', (req, resp) => {
        resp.send('This is a root url. Try other urls.');
    });
    // Getting data from the student collection
    app.get('/api', async (req, resp) => {
        const students = await studentCollection.find().toArray();
        resp.send(students);
    });
    // Rendering the table
    app.get('/ui', async (req, resp) => {
        const students = await studentCollection.find().toArray();
        resp.render('table', { students: students });
    });
    // Rendering the form
    app.get('/add', (req, resp) => {
        resp.render('form');
    });

    // Adding the data to database
    app.post('/add-student', async (req, resp) => {
        const data = req.body;
        console.log(data);
        const result = await studentCollection.insertOne(data);
        resp.send('data saved', result);
    });

    //Storing data in db using the API body POST method
    app.post('/add-student-api', async (req, resp) => {
        console.log(req.body);
        const { name, age, email } = req.body;
        try {
            if (!name || !age || !email) {
                return resp.status(400).send({ message: 'All fields are required', success: false });
            }
            var condition = await studentCollection.findOne(
                {
                    $or: [
                        { email: email }, { name: name }]
                });
            if (condition) {
                return resp.status(400).send({ message: 'User already exists', success: false });
            }
            const result = await studentCollection.insertOne(req.body);
            resp.send({ success: true, message: 'Saved Successfully', result: result });

        } catch (err) {
            console.error(err);
            resp.status(500).send({ success: false, message: 'Unable to add user', result: result });

        }
    });
    // deleting data from the API using postman or thunderbolt
    app.delete('/delete/:id', async (req, resp) => {
        try {
            const id = req.params.id;
            console.log("Deleting ID:", id);

            const result = await studentCollection.deleteOne({ _id: new ObjectId(id) });
            console.log(result);

            if (result.deletedCount > 0) {
                resp.send({ success: true, message: 'Deleted Successfully', result });
            } else {
                resp.status(404).send({ success: false, message: 'User not found', result });
            }
        } catch (err) {
            console.error(err);
            resp.status(500).send({ success: false, message: 'Error deleting user' });
        }
    });
    // deleting data from the web ui 
    app.get('/ui/delete/:id', async (req, resp) => {
        try {
            const id = req.params.id;
            console.log("Deleting ID:", id);

            const result = await studentCollection.deleteOne({ _id: new ObjectId(id) });
            console.log(result);

            if (result.deletedCount > 0) {
                // resp.send({ success: true, message: 'Deleted Successfully', result });
                resp.send(`<h1>Deleted Successfully</h1>`);
            } else {
                resp.send(`<h1>Not Deleted</h1>`);

                // resp.status(404).send({ success: false, message: 'User not found', result });
            }
        } catch (err) {
            console.error(err);
            resp.status(500).send({ success: false, message: 'Error deleting user' });
        }
    });

    // updating data using the api
    app.put('/update/:id', async (req, resp) => {
        try {
            const id = req.params.id;
            const data = req.body; // { name, age, email } or partial update

            if (!ObjectId.isValid(id)) {
                return resp.status(400).send({ success: false, message: "Invalid ID format" });
            }

            const result = await studentCollection.updateOne(
                { _id: new ObjectId(id) },
                { $set: data }
            );

            if (result.modifiedCount > 0) {
                resp.send({ success: true, message: "User updated successfully", result });
            } else {
                resp.status(404).send({ success: false, message: "User not found or no changes made", result });
            }
        } catch (err) {
            console.error(err);
            resp.status(500).send({ success: false, message: "Error updating user", error: err.message });
        }
    });
    // /ui/update/68ff7a3650e366ce9e0945df
    app.get('/ui/student/:id', async (req, resp) => {
        const id = req.params.id;
        const result = await studentCollection.findOne({ _id: new ObjectId(id) });
        resp.render('update', { result })

    })
    app.post('/update/:id', async (req, resp) => {
        try {
            const data = req.body;
            const id = req.params.id
            if (!ObjectId.isValid(id)) {
                return resp.status(400).send("Invalid ID format");
            }

            const result = await studentCollection.updateOne(
                { _id: new ObjectId(id) },
                { $set: data }
            );

            if (result.modifiedCount > 0) {
                resp.send('Updated Successfully');
            } else {
                resp.status(404).send('Failed');
            }
        } catch (err) {
            console.error(err);
            resp.status(500).send('User not found');
        }
    });

});
app.listen(3200);