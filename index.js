const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000

// chayansrk64
//Fa4RvOtAJyGXmW9e

// middleware
app.use(cors())
app.use(express.json())




const uri = "mongodb+srv://chayansrk64:Fa4RvOtAJyGXmW9e@cluster0.hkduy2w.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // const database = client.db("userDB");
    // const userCollection = database.collection("users");
    const userCollection = client.db("userDB").collection("users")

    // all users
    app.get("/users", async(req, res) => {
        const cursor = userCollection.find()
        const result = await cursor.toArray()
        res.send(result);
    })

    // specific user
    app.get('/users/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const user = await userCollection.findOne(query)
      res.send(user)
    })

   // create user
    app.post('/users', async(req, res)=> {
        const user = req.body;
        const result = await userCollection.insertOne(user);
        res.send(result);
        console.log("new user", user);
    })
    //update user
    app.put('/users/:id', async(req, res)=> {
        const id = req.params.id;
        const user = req.body;
        console.log(id, user);
        const filter = {_id: new ObjectId(id)}
        const options = { upsert : true }
        const updatedUser = {
          $set: {
            name: user.name,
            email: user.email
          }
        }
        const result = await userCollection.updateOne(filter, updatedUser, options)
        res.send(result);
    })

    // delete user
    app.delete('/users/:id', async(req, res)=> {
        const id = req.params.id;
        console.log('Please Delete from database', id);
        const query = {_id: new ObjectId(id)}
        const result = await userCollection.deleteOne(query)
        res.send(result);
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);





app.get('/', (req, res)=> {
    res.send("SERVER IS RUNNING...")
})

app.listen(port, ()=> {
    console.log(`SERVER IS RUNNING ON PORT: ${port}`);
})

