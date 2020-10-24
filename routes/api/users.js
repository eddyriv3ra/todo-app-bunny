const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');

router.post(
  '/',
  [check('name', 'Name is required').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name } = req.body;

    try {
      let user = await User.findOne({ name });
      if (user) {
        res.status(400).json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new User({
        name,
      });

      await user.save();
      res.send('User registered');
    } catch (err) {
      res.status(500).send('Server error');
    }
  }
);

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.delete('/', async (req, res) => {
  const { _id } = req.body;
  try {
    await User.findByIdAndDelete(_id);
    res.status(200).json({ msg: 'User deleted' });
  } catch (error) {
    res.status(404).json({ msg: 'User not found' });
  }
});

router.put('/', async (req, res) => {
  const { _id, name } = req.body;
  try {
    await User.findByIdAndUpdate(_id, { $set: { name } }, { new: true });
    res.status(200).json({ msg: 'User updated' });
  } catch (error) {
    res.status(404).json({ msg: 'User not found' });
  }
});

module.exports = router;
