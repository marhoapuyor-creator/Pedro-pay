// PAYMENT LINK ROUTE
app.get('/pay/:username', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if(!user) return res.status(404).json({msg: 'User not found'});
    
    res.json({ 
      username: user.username, 
      msg: `Send payment to ${user.username}` 
    });
  } catch(err) { res.status(500).json({error: err.message}) }
});
