const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://malwaresbusiness:4tmfifKJOjZEIvz9@malwarescluster.vsyaobr.mongodb.net/?retryWrites=true&w=majority";

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
        if (typeof body == "number") {
            body = { ID: body }
        }

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
        const cursor = Products.find();
        const docArray = await cursor.toArray();
        body.ID = docArray.length;
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
        reIDProducts(() => {})
        callback()
    })
}

const reIDProducts = (callback) => {
    exicuteQuery(async (client) => { 
        const database = client.db('Store');
        const Products = database.collection('Products');
        const options = { upsert: true };

        const cursor = Products.find();
        const docArray = await cursor.toArray();

        for (let i = 0; i < docArray.length; i++) {
            const set = { $set: { ID: i } }; 
            const query = { _id: docArray[i]._id }; 
            await Products.updateOne(query, set, options);
        }
        callback();
    });
};


module.exports = {
    Post: PostProduct,
    Get: GetProduct,
    Patch: PatchProduct,
    Delete: DeleteProduct,
}

// body for scams:
ScamOne = {
    "Name":"Nigerian Prince",
    "Price":"$59.99",
    "Description":"We have a long line of nigerians princes who are willing to give you money! For just 59.99 we can give you the contact information of these nigerians!",
    "Image":"https://flxt.tmsimg.com/assets/p15995752_v_h9_aa.jpg"
}
ScamTwo = {
    "Name":"Armour Trimming",
    "Price":"$29.99",
    "Description":"We have a master armour trimmer who can trim your armour for just 29.99! With this Purches you will you can get your armour trimmed for free!",
    "Image":"https://static.wikia.nocookie.net/darkrunescape/images/e/ef/ArmorTrim.PNG/revision/latest/zoom-crop/width/500/height/500?cb=20070709074518"
}
ScamThree = {
    "Name":"Lottery Numbers",
    "Price":"$599.99",
    "Description":"We have insider intell on the lottery numbers for the next 10 years! For just $599.99 we can give you the winning numbers for the next 10 years!",
    "Image":"https://townsquare.media/site/396/files/2023/01/attachment-Untitled-design62.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89"
}