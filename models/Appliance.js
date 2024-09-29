const mongoose = require("mongoose");

const ApplianceSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    status: { type: String, enum: ['available', 'claimed', 'in-use'], default: 'available' },
    claimExpiresAt: { type: Date },
    claimedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Appliance = mongoose.models.Appliance || mongoose.model("Appliance", ApplianceSchema);

module.exports = Appliance;
