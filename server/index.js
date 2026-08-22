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

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Pedro Pay API running on port ${PORT}`)
})
// This goes with your other app.get routes
app.get('/pay/:username', (req, res) => {
  const username = req.params.username;
  res.send(`
    <h1>Pay ${username}</h1>
    <p>Send money to: ${username}</p>
    <button>Pay Now</button>
  `);
});
