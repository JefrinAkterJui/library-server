import { model, Schema } from "mongoose";
import { bookStaticMethods, IBook } from "../interface/book.interface";


const bookSchema = new Schema<IBook, bookStaticMethods>(
    {
        title:{
            type:String,
            required:[true, 'Please provide the Book title']
        },
        author:{
            type:String,
            required:[true, 'Please provide the Author name']
        },
        genre:{
            type:String,
            required:[true, 'Please provide the book Genre']
        },
        isbn:{
            type:String,
            required:[true, 'Please provide the ISBN'],
            unique:true
        },
        description:{
            type:String
        },
        copies:{
            type:Number,
            required:[true, 'Please provide the number of copies'],
            min:[0, 'Copies must be a positive number']
        },
        available:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps: true,
        versionKey:false
    }
)

bookSchema.static("borrowBook", async function(id:string, quantity:number){
    const book = await this.findById(id)
    if (!book) {
        throw new Error('Book not found!');
    }
    if (book.copies < quantity) {
        throw new Error('Insufficient copies available!');
    }

    book.copies -= quantity;
    if (book.copies === 0) {
        book.available = false;
    }
    await book.save();
    return book;
})

export const Book = model<IBook, bookStaticMethods>('Book', bookSchema)