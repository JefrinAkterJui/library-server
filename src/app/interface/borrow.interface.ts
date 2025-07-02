import { Types } from "mongoose";

export interface IBrrow{
    book:Types.ObjectId;
    quantity:number;
    dueDate:Date
}