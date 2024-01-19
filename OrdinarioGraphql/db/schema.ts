import mongoose from "mongoose"
import { contactdb } from "../types.ts";


const Schema = mongoose.Schema;
const ContactSchema = new Schema({
    name:{type:String,required:true},
    number:{type:Number,required:true},
    country:{type:String,required:true}
},{
    timestamps:true
}) 

export type ContactModel = mongoose.Document & Omit<contactdb,'id'>
export default mongoose.model<ContactModel>('Contact',ContactSchema)