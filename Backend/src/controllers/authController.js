import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../models/user.js'
// import { signupSchema } from '../middlewares/validator.js'

// User registration controller
export const signup = async (req, res) => {
  const {
    email,
    password,
    fullName,
    bloodType,
    phoneNumber,
    emergencyName,
    emergencyPhoneNumber,
    dateOfBirth,
    allergies,
  } = req.body

  try {
    if (
      !email ||
      !password ||
      !fullName ||
      !bloodType ||
      !phoneNumber ||
      !emergencyName ||
      !emergencyPhoneNumber ||
      !dateOfBirth
    ) {
      return res
        .status(400)
        .json({ success: false, message: 'All fields are required' })
    }

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: 'User already exists' })
    }

    const salt = await bcrypt.genSalt(12)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      email,
      password: hashedPassword,
      fullName,
      bloodType,
      phoneNumber,
      emergencyName,
      emergencyPhoneNumber,
      dateOfBirth,
      allergies,
    })

    await newUser.save()

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    })

    newUser.password = undefined

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      user: newUser,
      token,
    })
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'An error occurred during signup' })
  }
}

// User Login Controller
export const login = async (req, res) => {
  const { email, password } = req.body

  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: 'Email and password are required' })
    }

    const user = await User.findOne({ email })

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: 'Invalid credentials' })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: 'Invalid credentials' })
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    })

    user.password = undefined

    res.status(200).json({
      success: true,
      message: 'Login successful',
      user,
      token,
    })
  } catch (error) {
    console.log(error.message)
    res
      .status(500)
      .json({ success: false, message: 'An error occurred during login' })
  }
}
