import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import customerRoutes from './routes/customers.js'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/customers', customerRoutes)

app.get('/', (req, res) => {
  res.send('Mini CRM Backend Running ✅')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
