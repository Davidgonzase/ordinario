import { ContactModel } from "../db/schema.ts";

export const contact = {
    hour:async(parent:ContactModel):Promise<string>=>{
        const url='https://api.api-ninjas.com/v1/worldtime?country='+parent.country;
        const res=await fetch(url,{headers:{
            'X-Api-Key': 'ZtyiTm7hjcawi6N/3wmiEQ==8EJvLJuIlrZhoGni'
        }})
        const result= res.json()
        return "null"
    }
}