import mongoose from "mongoose";

const ApplianceSchema = new mongoose.Schema({
    name: { type: String },
    status: { type: String },
    expiredAt: { type: String },
});

const Appliance = mongoose.models.Appliance || mongoose.model("Appliance", ApplianceSchema);

export default Appliance;