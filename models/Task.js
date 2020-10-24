const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  user_id: {
    type: String,
  },
  description: {
    type: String,
  },
  state: {
    type: String,
    enum: ['todo', 'done'],
    default: 'todo',
  },
});

module.exports = Task = mongoose.model('tasks', TaskSchema);
