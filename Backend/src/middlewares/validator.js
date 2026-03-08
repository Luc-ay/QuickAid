import joi from 'joi'

//Validation schema for user registration

export const signupSchema = joi.object({
    email: joi.string().min(12).max(255).required().email({
        tlds: { allow: ['com', 'net', 'org', 'edu'] }
    }),
    password: joi.string().min(8).max(255).required(),
})