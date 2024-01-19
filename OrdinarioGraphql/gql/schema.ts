export const typeDefs = `#graphql
    type contactdb{
        name:String!
        number:Int!
        country:String!
        id:ID!
    }
    type contact{
        name:String!
        number:Int!
        country:String!
        id:ID!
        hour:String!
    }
    type Query {
        getContact(id:ID!):contact!
        getContacts:[contact!]!
    }
    type Mutation {
        addContact(name:String!,number:Int!):contact!
        deleteContact(id:ID!):String!
        updateContact(id:ID!,name:String,number:Int):contact!
    }
`;
