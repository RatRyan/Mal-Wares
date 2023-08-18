const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb://localhost:2720";

const exicuteQuery = async (query) => {
    const client = new MongoClient(uri)
    try {
        await query(client)

    } catch (err) {
        console.log(err)

    } finally {
        await client.close()
    }
}


const GetProduct = async (body, callback) => {
    exicuteQuery(async (client) => {
        const database = client.db('Store');
        const Accounts = database.collection('Accounts');
        const cursor = Accounts.find(body)
        const docArray = await cursor.toArray()
        callback(docArray)
    })
}


const PostAccount = (body, callback) => {
    exicuteQuery(async (client) => {
        const database = client.db('Store');
        const Accounts = database.collection('Accounts');
        await Accounts.insertOne(body);
        callback()
    })
}

const PatchAccount = (body, callback) => {
    exicuteQuery(async (client) => {
        const database = client.db('Store');
        const Accounts = database.collection('Accounts');
        const options = { upsert: true };
        const set = { $set: body[1] }
        await Accounts.updateOne(body[0], set, options);
        callback()
    })
}

const DeleteAccount = async (body, callback) => {
    exicuteQuery(async (client) => {
        const database = client.db('Store');
        const Accounts = database.collection('Accounts');
        const query = body;
        await Accounts.deleteOne(query);
        callback()
    })
}

module.exports = {
    Post: PostAccount,
    Get: GetAccount,
    Patch: PatchAccount,
    Delete: DeleteAccount,
}