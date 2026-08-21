const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Pedro Pay API dey live! 🚀' })
})

// connect your routes here later

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
