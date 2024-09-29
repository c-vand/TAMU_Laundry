const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const claimRoutes = require('./routes/claims');
const seedMachines = require('./config/seed');
const cors = require('cors');



const app = express();
const PORT = 3000;

connectDB();
app.use(cors({
    origin: 'http://127.0.0.1:5500', 
    methods: 'GET,POST,PUT,DELETE',  
    credentials: true                
}));

app.use(express.json());
console.log('fuck')
app.use('/auth', authRoutes);
console.log('cock')
app.use('/api', claimRoutes);
console.log('ballsack')


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
console.log('end')
//seedMachines()