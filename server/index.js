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
<!DOCTYPE html>
<html>
<head>
  <title>Pedro Pay - Register & Login</title>
  <style>
    body { font-family: Arial; max-width: 400px; margin: 50px auto; padding: 20px; background: #f5f5f5; }
    .box { background: white; padding: 20px; border-radius: 10px; margin-bottom: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
    input { width: 100%; padding: 10px; margin: 8px 0; border: 1px solid #ddd; border-radius: 5px; }
    button { width: 100%; padding: 12px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer; }
    button:hover { background: #0056b3; }
    #result { padding: 15px; background: #d4edda; border-radius: 5px; margin-top: 10px; display: none; }
    #result a { color: #007bff; font-weight: bold; }
  </style>
</head>
<body>

  <h1>💰 Pedro Pay</h1>

  <!-- REGISTER BOX -->
  <div class="box">
    <h2>Register</h2>
    <form id="regForm">
      <input name="username" placeholder="Choose Username" required>
      <input name="email" type="email" placeholder="Email" required>
      <input name="password" type="password" placeholder="Password" required>
      <button type="submit">Register</button>
    </form>
  </div>

  <!-- LOGIN BOX -->
  <div class="box">
    <h2>Login</h2>
    <form id="loginForm">
      <input name="email" type="email" placeholder="Email" required>
      <input name="password" type="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
  </div>

  <!-- RESULT BOX -->
  <div id="result"></div>

<script>
const API = 'https://pedro-pay.onrender.com/api'; // Change to localhost:3000/api if testing locally

// REGISTER
document.getElementById('regForm').onsubmit = async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  
  const res = await fetch(API + '/register', { 
    method: 'POST', 
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(data) 
  });
  const result = await res.json();
  
  alert(result.msg || result.error);
  e.target.reset();
}

// LOGIN
document.getElementById('loginForm').onsubmit = async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  
  const res = await fetch(API + '/login', { 
    method: 'POST', 
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(data) 
  });
  const result = await res.json();
  
  if(result.token){
    document.getElementById('result').style.display = 'block';
    document.getElementById('result').innerHTML = `
      <h3>✅ Login Successful!</h3>
      <p><b>Your Payment Link:</b></p>
      <a href="${result.paymentLink}" target="_blank">${result.paymentLink}</a>
      <p>Copy this link and send to people to pay you</p>
    `;
  } else {
    alert(result.msg || result.error);
  }
}
</script>

</body>
</html>
