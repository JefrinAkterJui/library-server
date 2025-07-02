import { model, Schema } from "mongoose";
import { IBrrow } from "../interface/borrow.interface";

const borrwSchema = new Schema<IBrrow>(
    {
        book:{
            type: Schema.Types.ObjectId,
            required:true,
            ref:'Book'
        },
        quantity:{
            type:Number,
            required:[true,'Please provide books quantity'],
            min:1
        },
        dueDate:{
            type:Date,
            required:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

export const Borrow = model<IBrrow>('Borrow', borrwSchema);