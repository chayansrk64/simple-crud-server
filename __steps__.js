/**
 * -----------------------------
 * MongoDB Connection
 * ---------------------------
 * 1. Create Account
 * 2. Create an user with password
 * 3. Whitelist IP Address
 * 4. database > connect > driver > Node > show all code
 * 5. Change the passwrod the uri
 * --------------------------------
 * 1  CREATE ---- POST
 * 2. app.post()
 * 3. Make the function async to use await inside it
 * 4. Make sure you use the express.json() middleware
 * 5. acces data from the body: const user = req.body
 * 6. const result = await userCollection.insertOne(user)
 * 7. res.send(result)
 * --------------------------
 * 
 * CLIENT SIDE
 * (CRUD)
 * -----------
 * CREATE
 * ------------
 * 1. Create fetch
 * 2. add second parameter as an object
 * 3. provide method: "POST"
 * 4. add headers: {'content-type': 'application/json'}
 * 5. add body: JSON.Stringify(user)
 * 
 * -----------------
 * READ MANY
 * -----------------
 * 1. create a cursor = userCollection.find()
 * 2. const result =await cursor.toArray()
 * 
 * ----------------------
 * DELETE
 * ----------------------
 * 1. create app.delete('/users/:id, async(req, res) => {})
 * 2. specify unique ObjectId to delete the right user
 * 3. const query = {_id: new ObjectId(id)}
 * 
 * Client 
 * 1. Create dynamic url with id
 * 2. mention the DELETE method
 * 
 * 
 * 
 * 
*/