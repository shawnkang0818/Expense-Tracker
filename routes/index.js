import { Router } from 'express'
import * as expensesCtrl from '../controllers/expenses.js'

const router = Router()

router.get('/', expensesCtrl.index)

export {
  router
}
