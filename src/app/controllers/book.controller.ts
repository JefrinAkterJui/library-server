import express, { Request, Response } from 'express'
import { Book } from '../models/book.model'
import mongoose  from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;

// export const bookRoutes = express.Router()

const createBook  = async (req: Request, res: Response)=> {
  try {
    const bookData = req.body
    const book = await Book.create(bookData)

    res.status(201).json({
      success: true,
      message: 'Book created successfully',
      data: book
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to create book',
      error: error,
    });
  }
};

const getAllBooks = async (req: Request, res: Response)=>{
  try {
    const genreFilter = req.query.filter as string || ""
    const sortBy      = req.query.sortBy as string  || "createdAt"
    const sortOrder = req.query.sort === 'asc' ? 1 : -1;
    const limit = parseInt(req.query.limit as string) || 10;

    const filter:{genre?:string}={}
    if(genreFilter){
      filter.genre  = genreFilter
    }

    const books = await Book.find(filter)
      .sort({ [sortBy]: sortOrder })
      .limit(limit);

    res.status(200).json({
      success: true,
      message: 'Books retrieved successfully',
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve books',
      error: error,
    });
  }
};

const getBookById = async (req: Request, res: Response)=>{
  try {
    const bookId = req.params.bookId
    if (!mongoose.Types.ObjectId.isValid(bookId)) {
      res.status(400).json({
        success: false,
        message: 'Invalid book ID format',
        data: null,
      });
    }
    const book = await Book.findById(bookId);

    if(!book) {
      res.status(404).json({
        success: false,
        message: 'Book not found with the given ID',
        data: null
      });
      return 
    }
    
    res.status(200).json({
      success: true,
      message: 'Books retrieved successfully',
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve books',
      error: error,
    });
  }
}

const updateBook = async(req: Request, res: Response)=>{
  try {
    const bookId = req.params.bookId
    if (!mongoose.Types.ObjectId.isValid(bookId)) {
      res.status(400).json({
        success: false,
        message: 'Invalid book ID format',
        data: null,
      });
    }
    const _id = new ObjectId(bookId)
    const updateBook = req.body
    const book = await Book.findOne({_id})
    
    if(!book) {
      res.status(404).json({
        success: false,
        message: 'Book not found with the given ID',
        data: null
      });
    }
    const updatedBook = await Book.findOneAndUpdate({_id: bookId}, updateBook, {new:true});

    res.status(200).json({
      success: true,
      message: 'Book updated successfully',
      data: updatedBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating book',
      error: error,
    });
  }
}

const deleteBook = async(req: Request, res: Response)=>{
  try {
    const bookId = req.params.bookId
    if (!mongoose.Types.ObjectId.isValid(bookId)) {
      res.status(400).json({
        success: false,
        message: 'Invalid book ID format',
        data: null,
      });
    }
    const deletedBook = await Book.findByIdAndDelete(bookId)

    if (!deletedBook) {
      res.status(404).json({
        success: false,
        message: 'Book not found with the given ID, nothing to delete.',
        data: null,
      });
      return
    }

    res.status(204).json({
      success: true,
      message: 'Book deleted successfully',
      data: null
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error Deleting book',
      error: error,
    });
  }
}

export const BookController = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook
};
