import { Request, Response } from "express";
import { Book } from "../models/book.model";
import { Borrow } from "../models/borrow.model";


const borrowBooks = async (req: Request, res:Response)=>{
    try {
        console.log('borrow carete')
        const { book: bookId, quantity, dueDate } = req.body;
        console.log(bookId.bookId)
        await Book.borrowBook(bookId, quantity);
        const borrowResult = await Borrow.create(req.body);


        res.status(201).json({
            success: true,
            message: 'Book borrowed successfully',
            data: borrowResult
        });
    } catch (error:any) {
        res.status(400).json({
            success: false,
            message: error.message || 'Failed to borrow book',
            error: error,
        });
    }
}

const getBorrowedBooksSummary = async (req: Request, res:Response)=>{
    try {
        const borrowedBooksSummary = await Borrow.aggregate([
            {
                $group: {
                    _id: "$book",
                    totalQuantity: { $sum: "$quantity" }
                }
            },
            {
                $lookup: {
                    from: "books",
                    localField: "_id",
                    foreignField: "_id",
                    as: "bookInfo"
                }
            },
            {
                $unwind: "$bookInfo"
            },
            {
                $project: {
                    _id: 0,
                    book: {
                    title: "$bookInfo.title",
                    isbn: "$bookInfo.isbn"
                },
                totalQuantity: 1
            }
        }
        ]);
        res.status(200).json({
            success: true,
            message: "Borrowed books summary retrieved successfully",
            data: borrowedBooksSummary,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            success: false,
            error: error,
        });
    }
}


export const BorrowController ={
    borrowBooks,
    getBorrowedBooksSummary
}