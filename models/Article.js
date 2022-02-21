import mongoose from 'mongoose'
import User from './User'

/* articleSchema will correspond to a collection in your MongoDB database. */
const ArticleSchema = new mongoose.Schema( {
    applicant: { type: String },
    fatherName: { type: String },
    motherName: { type: String },
    mobile: { type: String },
    address: { type: String },
    rtiQuery: { type: String },
    organizationAddress: { type: String },
    orgState: { type: String },
    arnNo: { type: String },
    belongTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    }
}, {
    timestamps: true,
} )

export default mongoose.models.article || mongoose.model( 'article', ArticleSchema )