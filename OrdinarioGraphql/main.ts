import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Query } from "./resolvers/query/query.ts";
import { typeDefs } from "./gql/schema.ts";
import { Mutation } from "./resolvers/mutations/mutations.ts";
import mongoose from "mongoose";

import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import { contact } from "./resolvers/Contact.ts";
const env = await load(); 
const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL"); 

try {
  MONGO_URL? await mongoose.connect(MONGO_URL) : null
  console.log("Conexión exitosa a MongoDB");
} catch (error) {
  console.error("Error al conectar a MongoDB:", error);
}

const resolvers = {
  Query,
  Mutation,
  contact
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const { url } = await startStandaloneServer(server);
console.log(url)



