import express from 'express'
import {
  emergencyGuestRequest,
  requestEmergency,
} from '../controllers/emergencyController.js'
import validateToken from '../middlewares/vallidateToken.js'

const router = express.Router()

router.post('/guest', emergencyGuestRequest)
router.post('/emergencyrequest', validateToken, requestEmergency)

export default router
