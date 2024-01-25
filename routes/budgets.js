import { Router } from 'express'
import * as budgetsCtrl from '../controllers/budgets.js'
import { isLoggedIn } from "../middleware/middleware.js";


const router = Router()

//GET localhost:3000/new
router.get('/new', isLoggedIn,  budgetsCtrl.newBudget)
// POST localhost:3000/budgets
router.post('/', isLoggedIn, budgetsCtrl.create);
export {
  router
}