
import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts"
import config from '../../config/db.ts'

const client = new MongoClient()

client.connectWithUri(config.mongodb.connection)

const db = client.database(config.mongodb.dbname)

export const Users = db.collection('users')