const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Task = require('../../models/Task');

router.post(
  '/',
  [check('description', 'description is required').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { description, user_id } = req.body;
    try {
      const task = new Task({
        user_id,
        description,
      });
      await task.save();
      res.send('Task successfully created');
    } catch (error) {
      res.status(500).send('Server error');
    }
  }
);

router.get('/', async (req, res) => {
  const { user_id } = req.body;

  try {
    const tasksByUser = await Task.find({ user_id });
    res.json(tasksByUser);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

router.put('/', async (req, res) => {
  const { _id, state } = req.body;
  try {
    await Task.findByIdAndUpdate(_id, { $set: { state } }, { new: true });
    res.status(200).json({ msg: 'Task updated' });
  } catch (error) {
    res.status(404).json({ msg: 'Task not found' });
  }
});

module.exports = router;
