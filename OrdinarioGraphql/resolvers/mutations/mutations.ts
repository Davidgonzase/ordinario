import { contactres } from "../../types.ts";
import ContactSchema,{ContactModel}  from "../../db/schema.ts";
import { GraphQLError } from "graphql";

export const Mutation = {
    addContact: async (_:unknown,args:{name:string,number:number}):Promise<ContactModel>=>{
        const ncontac = new ContactSchema();
        ncontac.name=args.name;
        ncontac.number=args.number;
        const url='https://api.api-ninjas.com/v1/validatephone?number='+args.number;
        const res=await fetch(url,{headers:{
            'X-Api-Key': 'ZtyiTm7hjcawi6N/3wmiEQ==8EJvLJuIlrZhoGni'
        }})
        const results = await res.json();
        try {
            ncontac.country=results.country;
            ncontac.save()
            return ncontac;
        } catch (error) {
            throw new GraphQLError(`Number already exist`,{
                extensions:{code : `NOT_VALID`}
            }
        )}
    },
    deleteContact : async (_:unknown,args:{id:string}):Promise<boolean>=>{
        let res;
        try {
            res = await ContactSchema.findByIdAndDelete({_id:args.id}).exec()
            return true
        } catch (error) {
            return false
        }
        return true
    },
    updateContact :async (_:unknown,args:{id:string,name:string,number:number}):Promise<ContactModel>=>{
        let ncontac;
        try {
            ncontac = ContactSchema.findById({_id:args.id});    
        } catch (error) {
            throw new GraphQLError(`Contact not found`),{
                extensions:{code : `NOT_FOUND`}
            }
        }
        return ncontac;
    }
}