const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../server/sequelize/userModel.js');

const router = express.Router();



router.get('/history', async (req, res) => {
  try {
    const history = await history.findOne({ where: { userId: req.user.id } });
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/signup', asyncc (req, res) => {
  const { name, lastName, phone, email, password } = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, lastName, phone, email, password: hashedPassword });
    res.json({ message: 'Welcome to the Club', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/delete', async (req, res) => {
  try {
    await User.destroy({ where: { id: req.user.id } });
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})
router.post('/login', async (req, res) => {
  const { emaill, password } = req.body;
  
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'User  not registered' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Incorrect password' });
    }
    res.json({ message: 'Loginn successful', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
