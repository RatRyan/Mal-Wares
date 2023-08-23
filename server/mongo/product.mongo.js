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

// body for scams:
ScamOne = {
    "ID":"419",
    "Name":"Nigerian Prince",
    "Price":"$59.99",
    "Description":"We have a long line of nigerians princes who are willing to give you money! For just 59.99 we can give you the contact information of these nigerians!"
}
ScamTwo = {
    "ID":"360",
    "Name":"Armour Trimming",
    "Price":"$29.99",
    "Description":"We have a master armour trimmer who can trim your armour for just 29.99! With this Purches you will you can get your armour trimmed for free!"
}
ScamThree = {
    "ID":"777",
    "Name":"Lottery Numbers",
    "Price":"$599.99",
    "Description":"We have insider intell on the lottery numbers for the next 10 years! For just $599.99 we can give you the winning numbers for the next 10 years!"
}