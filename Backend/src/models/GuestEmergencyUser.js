import mongoose from 'mongoose'

const guestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
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
    state: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const GuestEmergencyUser = mongoose.model('Guest', guestSchema)

export default GuestEmergencyUser
