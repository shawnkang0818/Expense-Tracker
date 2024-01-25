import { Router } from 'express'
import * as expensesCtrl from '../controllers/expenses.js'
import { isLoggedIn } from "../middleware/middleware.js"


const router = Router()

//GET localhost:3000/expenses
router.get('/', expensesCtrl.index)
//GET localhost:3000/expenses
router.get('/:expenseId', expensesCtrl.show)
//POST localhost:3000/expenses
router.post('/', isLoggedIn, expensesCtrl.create)
//Patch localhost:3000/tacos/changeReasonable
router.patch('/:expenseId/changeReasonable',  isLoggedIn, expensesCtrl.changeReasonable)
//Get localhost:3000/expenses/:expenseId/edit
router.get('/:expenseId/edit', isLoggedIn, expensesCtrl.edit)
//PUT localhost:3000/expenses/:expenseId/
router.put('/:expenseId', isLoggedIn, expensesCtrl.update)
//DETELE localhost:3000/expenses/:expenseId/
router.delete('/:expenseId', isLoggedIn, expensesCtrl.delete)

export {
  router
}