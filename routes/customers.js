import express from 'express'
import { addCustomer } from '../controllers/customers.js'
const router = express.Router()

router.post('/', addCustomer)

export default router
