import User from '../../../models/user';
import dbConnect from '../../mongodb';

export const getUser = async ( request ) => {
    await dbConnect()
    const user = await User.find()
    return user
}