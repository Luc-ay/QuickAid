import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please enter a valid email'],
      trim: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      minLength: [12, 'Password must be at least 12 characters'],
    },
    fullName: {
      type: String,
      trim: true,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    bloodType: {
      type: String,
      trim: true,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    allergies: {
      type: String,
      trim: true,
      default: 'None',
    },
    phoneNumber: {
      type: String,
      trim: true,
      required: true,
      validate: {
        validator: function (v) {
          return /^\+?[0-9]{7,15}$/.test(v)
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
    location: {
      type: String,
      trim: true,
    },
    emergencyName: {
      type: String,
      required: true,
    },
    emergencyPhoneNumber: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^\+?[0-9]{7,15}$/.test(v)
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', userSchema)
export default User
