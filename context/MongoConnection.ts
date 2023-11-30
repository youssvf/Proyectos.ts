import { MongoClient, Collection, Db } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGO_URL || "mongodb://localhost:27017"
const dbName = process.env.MONGO_DB_NAME || "local"
const collections :{[key : string]:Collection} = {};

async function CreateMongoConnection(){
    try{
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        addCollections(db);
        console.log("Connected to Mongo");
    } catch(error){
        console.error("Error connecting to Mongdb",error);
    }
}

const addCollections = (db : Db) => {
    collections.Projects = db.collection(
        process.env.MONGO_DB_COLLECTION_PROJECTS || "Proyectos"
    );
}

export default CreateMongoConnection;
export {collections};