import { MongoClient } from 'mongodb';

// This service will connect to a MongoDB instance, which violates our ADR.
const MONGO_URI = 'mongodb://localhost:27017/users';

// TODO: Use a different database in the future.