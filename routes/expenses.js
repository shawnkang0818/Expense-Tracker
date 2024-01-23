import { Router } from 'express'
import * as expensesCtrl from '../controllers/expenses.js'
import { isLoggedIn } from "../middleware/middleware.js";


const router = Router()

//GET localhost:3000/expenses
router.get('/', expensesCtrl.index)
//GET localhost:3000/expenses
router.get('/:expenseId', expensesCtrl.show)
//POST localhost:3000/expenses
router.post('/', isLoggedIn, expensesCtrl.create)

export {
  router
}