const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:2717";

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
        const Products = database.collection('Products');
        const cursor = Products.find(body)
        const docArray = await cursor.toArray()
        callback(docArray)
    })
}


const PostProduct = (body, callback) => {
    exicuteQuery(async (client) => {
        const database = client.db('Store');
        const Products = database.collection('Products');
        await Products.insertOne(body);
        callback()
    })
}

const PatchProduct = (body, callback) => {
    exicuteQuery(async (client) => {
        const database = client.db('Store');
        const Products = database.collection('Products');
        const options = { upsert: true };
        const set = { $set: body[1] }
        await Products.updateOne(body[0], set, options);
        callback()
    })
}

const DeleteProduct = async (body, callback) => {
    exicuteQuery(async (client) => {
        const database = client.db('Store');
        const Products = database.collection('Products');
        const query = body;
        await Products.deleteOne(query);
        callback()
    })
}

module.exports = {
    Post: PostProduct,
    Get: GetProduct,
    Patch: PatchProduct,
    Delete: DeleteProduct,
}