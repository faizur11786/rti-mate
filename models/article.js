import mongoose from 'mongoose'

/* articleSchema will correspond to a collection in your MongoDB database. */
const ArticleSchema = new mongoose.Schema( {
    applicant: { type: String },
    fatherName: { type: String },
    motherName: { type: String },
    mobile: { type: String },
    email: { type: String },
    address: { type: String },
    rtiQuery: { type: String },
    organizationAddress: { type: String },
    orgState: { type: String },
    referenceNo: { type: String },
    belongTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    payment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'payment',
    },
    status: { type: String },
}, {
    timestamps: true,
} )

export default mongoose.models.article || mongoose.model( 'article', ArticleSchema )