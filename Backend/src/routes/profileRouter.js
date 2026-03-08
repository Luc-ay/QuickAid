import express from 'express'
import {
  deleteProfile,
  getProfile,
  updateProfile,
} from '../controllers/userProfileController.js'
import validateToken from '../middlewares/vallidateToken.js'

const router = express.Router()

// router.post('/create', validateToken, userProfileHandler)
router.put('/update', validateToken, updateProfile)

router.get('/', validateToken, getProfile)

router.delete('/delete', validateToken, deleteProfile)

export default router
