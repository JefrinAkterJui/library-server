import express from "express"
import { BorrowController } from "../controllers/borrow.controller"

const router = express.Router()

router.post('/', BorrowController.borrowBooks)
router.get('/', BorrowController.getBorrowedBooksSummary)

export default router
