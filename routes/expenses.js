import { Router } from 'express'
import * as expensesCtrl from '../controllers/expenses.js'

const router = Router()

//GET localhost:3000/
router.get('/', expensesCtrl.index)
//POST localhost:

export {
  router
}