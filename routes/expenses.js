import { Router } from 'express'
import * as expensesCtrl from '../controllers/expenses.js'
import { isLoggedIn } from "../middleware/middleware.js";


const router = Router()

//GET localhost:3000/
router.get('/', expensesCtrl.index)
//POST localhost:
router.post('/', isLoggedIn, expensesCtrl.create)

export {
  router
}