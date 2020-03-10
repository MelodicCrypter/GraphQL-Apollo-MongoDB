/**
 *
 *   This is the USER model.
 *
 */

import bcrypt from 'bcrypt';

// Mongoose
import Mongoose from './mongoose';

// Create a Mongoose schema
const userSchema = new Mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    birthday: {
        type: String,
        required: true,
    },
    verifyToken: {
        type: String,
    },
    authToken: {
        type: String,
    },
    resetToken: {
        type: String,
    },
    refreshToken: {
        type: String,
    },
});

// ! BEFORE SAVING, check password if modified
// For new and existing users, [re]-authenticate first
// ISSUE: AS OF NOW, ONLY WORKS FOR NEWLY CREATED USERS
userSchema.pre('save', async function(next) {
    const user = this;

    // If the password under User model has been updated or
    // a new password is created upon sign up, then this will trigger
    if (user.isModified('password')) {
        // Hash the password
        const hashedPass = await bcrypt.hash(user.password, 10);
        // Save the hashed password
        user.password = hashedPass;
        // Proceed to next middleware, save()
        next();
    } else {
        // If not modified then just proceed to save()
        next();
    }
});

// ! OVERRIDE toJSON method to only return id and email
// We don't want to include the password inside response
// userSchema.methods.toJSON = function() {
//     const user = this;
//     const userObject = user.toObject(); // convert mongoose object to standard object
//     return _.pick(userObject, ['_id', 'email']);
// };

// Create User model
const User = Mongoose.model('User', userSchema);

export default User;
