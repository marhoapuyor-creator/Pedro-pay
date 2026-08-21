const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Pedro Pay API dey live! 🚀' })
            })
app.get('/users', (req, res) => {
  res.json({ message: "Users endpoint dey work!" })
})

app.get('/payments', (req, res) => {
  res.json({ message: "Payments endpoint dey work!" })
})
