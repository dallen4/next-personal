// Invite model schema

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// declare schema
var InviteSchema = new Schema({
    email: { type: String, required: true, unique: true },
    status: {
        type: String,
        enum: ['sent', 'used', 'expired'],
        required: true
    },
    token: { type: String, required: true },
    dateInvited: { type: Date, required: true },
    invitedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    messageId: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Invite', InviteSchema);
