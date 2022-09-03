const userSchema = new Schema(
    {
        id: {
            type: String,
            unique: true,
        },
        email: {
            type: String,
            required: [true, 'missing email'],
            validate: {
                validator: function (email) {
                    const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    return emailRegex.test(email.text);
                },
                message: 'Enter a valid email',
            },
            default: 'anonymous',
        },
        password: {
            type: String,
            required: [true, 'missing password'],
        },
        phoneNumber: {
            type: String,
            default: 'empty',
        },
        fullName: { type: String, default: 'unknown' },
    },
    { timestamps: true }
);
