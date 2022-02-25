import mongoose from 'mongoose'

/* UserSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema( {
    name: { type: String },
    email: { type: String },
    mobile: { type: String },
    role: {
        type: String,
        required: [true, 'Please provide a role for this article.'],
    },
    referenceNo: { type: String },
}, {
    timestamps: true
} )

export default mongoose.models.user || mongoose.model( 'user', UserSchema )