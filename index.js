const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const claimRoutes = require('./routes/claims');

const app = express();
const PORT = 3000;

connectDB();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/api', claimRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
