const mongoose = require('mongoose');
const Machine = require('../models/Appliance');

//mongoose.connect('mongodb://localhost:27017/laundry', { useNewUrlParser: true, useUnifiedTopology: true });

const seedMachines = async () => {
    const machines = [
        { name: 'washer1', status: 'available' },
        { name: 'washer2', status: 'available' },
        { name: 'dryer1', status: 'available' },
        { name: 'dryer2', status: 'available' },
    ];

    await Machine.insertMany(machines);
    console.log('Database seeded with machines');
    mongoose.connection.close();
};

module.exports = seedMachines;
