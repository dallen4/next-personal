const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const { getUserId } = require('../../utils');
const Invite = require('../../models/invite');
const User = require('../../models/user');

const account = {
    user: 'mernqltest@gmail.com',
    pass: process.env.TEST_PWD,
};

// create transporter
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: account.user,
        pass: account.pass
    }
});

// wrap sendMail function in Promise for async await implementation
const sendEmail = (mailOptions) => (new Promise((resolve, reject) => {

    transporter.sendMail(mailOptions, (err, info) => {

        if (err)
            reject(err);
        else
            resolve(info);
        
    });

}));

// creates new Invitation in invitations collection
// -- sends email to invitee
async function sendInvite(parent, args, context, info) {

    const userId = getUserId(context);

    const { email } = args;

    try {

        var user = await User.findById(userId);

        let existingUser = await User.findOne({ email });

        if (existingUser)
            throw new Error('This email is already associated with an existing user');

        let existingInvite = await Invite.findOne({ email });

        if (existingInvite)
            throw new Error('This user already has a pending invitation');
        
    } catch (error) {
        throw new Error(error);
    }

    let dateInvited = new Date();

    let tokenData = {
        email,
        dateInvited,
    };

    const token = jwt.sign(tokenData, process.env.APP_SECRET);

    const inviteURL = `${process.env.BASE_URL}/signup?token=${token}`;
    
    // declare email data
    let mailOptions = {
        from: `"Conman Support" <mernqltest@gmail.com>`,
        to: email, 
        subject: 'Join MernQL!',
        text: `Hello ${email}!\nPlease visit ${inviteURL}`,
        html: `<h3>MernQL</h3>
            <p>Hello ${email}!</p>
            <p>You have been invited to join MernQL by ${user.username}! To accept your invitation, click here:
                <a href='${inviteURL}'>signup</a>
            </p>`,
    };

    try {

        let { messageId } = await sendEmail(mailOptions);

        let inviteData = {
            email,
            status: 'sent',
            token: token,
            dateInvited,
            invitedBy: userId,
            messageId,
        };

        var invite = new Invite(inviteData);

        await invite.save();

    } catch (error) {
        throw new Error(error);
    }

    return {
        id: invite._id,
        token: invite.token,
        email: invite.email,
    };

}

module.exports = {
    sendInvite,
};
