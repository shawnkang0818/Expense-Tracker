import { Router } from 'express'
import * as budgesCtrl from '../controllers/budges.js'
import { isLoggedIn } from "../middleware/middleware.js";


const router = Router()

//GET localhost:3000/new
router.get('/budges/new', isLoggedIn,  budgesCtrl.create)
export {
  router
}