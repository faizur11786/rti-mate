import mongoose from 'mongoose'

/* articleSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: [true, 'Please provide a name for this article.'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email for this article.'],
    },
    mobile: {
        type: String,
        required: [true, 'Please provide a mobile number for this article.'],
    },
    role: {
        type: String,
        required: [true, 'Please provide a role for this article.'],
    },
    arnNo: {
        type: String,
        required: [true, 'Please provide an ARN number for this article.'],
    },
}, {
    timestamps: true
} )

export default mongoose.models.user || mongoose.model( 'user', UserSchema )