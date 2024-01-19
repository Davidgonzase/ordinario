
import ContactSchema,{ContactModel}  from "../../db/schema.ts";
import { GraphQLError } from "graphql";

export const Query = {
    getContact: async (_:unknown,args:{id: string}):Promise<ContactModel>=>{
        let res
        try {
            res=await ContactSchema.findById({_id:args.id}).exec()
            if(!res)throw new Error;
        } catch (error) {
            console.log(error.message)
            throw new GraphQLError(`Resource with id: ${args.id} not found`,{
                extensions:{code : `NOT_FOUND`}
            })
        }
        return res;
    },
    getContacts: async ():Promise<ContactModel[]>=>{
        try {
            const res:ContactModel[]=await ContactSchema.find().exec()
            return res
        } catch (error) {
            console.log(error.message)
            throw new GraphQLError(`INTERNAL API ERROR`,{
                extensions:{code : `INTERNAL_ERROR`}
            })
        } 
    }
}