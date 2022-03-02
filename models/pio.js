import mongoose from "mongoose";

const PIOSchema = new mongoose.Schema( {
    orgName: { type: String },
    orgId: { type: String },
    PIOName: { type: String },
    orgAddress: { type: String },
    state: { type: String },
    district: { type: String },
    block: { type: String },
    pinCode: { type: String },
    rtiFeePayTo: { type: String },
    payableAt: { type: String },
    faa: { type: String },
    additionalInfo: { type: String }
}, { timestamps: true } )

export default mongoose.models.PIO || mongoose.model( "PIO", PIOSchema )