import { Router } from 'express'
import * as budgetsCtrl from '../controllers/budgets.js'
import { isLoggedIn } from "../middleware/middleware.js"


const router = Router()


// POST localhost:3000/budgets
router.post('/', isLoggedIn, budgetsCtrl.create)
// Get localhost:3000/budgets
router.get('/', isLoggedIn, budgetsCtrl.index)
//DETELE localhost:3000/budgets/:budgetId/
router.delete('/:budgetId', isLoggedIn, budgetsCtrl.delete)
export {
  router
}