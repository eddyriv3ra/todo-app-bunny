const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/tasks', require('./routes/api/tasks'));

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server running on port ${port}`));
