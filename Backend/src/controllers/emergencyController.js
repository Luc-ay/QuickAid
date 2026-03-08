// controllers/emergencyController.js
import hospitals from '../utils/hospitals.js'
import ambulanceProviders from '../utils/ambulances.js'
import GuestEmergencyUser from '../models/GuestEmergencyUser.js'
import User from '../models/user.js'

// Guest Emergency Request
export const emergencyGuestRequest = async (req, res) => {
  try {
    const { name, email, state } = req.body

    if (!name || !email || !state) {
      return res.status(400).json({ message: 'All fields are required.' })
    }

    const existingGuest = await GuestEmergencyUser.findOne({ email })

    if (existingGuest) {
      return res.status(200).json({
        success: true,
        message: 'Guest already exists. Access granted.',
        guestId: existingGuest._id,
      })
    }

    const ifExistInUsers = await User.findOne({ email })
    if (ifExistInUsers) {
      return res.status(409).json({
        message: 'Email is already registered. Please login as a user.',
      })
    }

    const newGuest = await GuestEmergencyUser.create({ name, email, state })

    return res.status(200).json({
      success: true,
      message: 'Guest emergency request created.',
      guestId: newGuest._id,
    })
  } catch (error) {
    console.error('Error in emergencyGuestRequest:', error)
    return res.status(500).json({ message: 'Internal server error.' })
  }
}

// Emergency Request
export const requestEmergency = async (req, res) => {
  try {
    const { emergencyType, guestId } = req.body
    let userId = req.user.id

    if (!userId && guestId) {
      const guest = await GuestEmergencyUser.findById(guestId)
      if (!guest) {
        return res
          .status(404)
          .json({ message: 'Guest not found || Unauthorized access' })
      }
      userId = guest._id
    }

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized.' })
    }

    if (!emergencyType) {
      return res.status(400).json({ message: 'Emergency type is required.' })
    }

    const matchedHospitals = hospitals.filter((hospital) =>
      hospital.specialties.includes(emergencyType)
    )

    if (matchedHospitals.length === 0) {
      return res
        .status(404)
        .json({ message: 'No hospital found for this emergency type.' })
    }

    const nearestHospital = matchedHospitals[0]

    let ambulanceInfo
    let providerName

    if (nearestHospital.ambulance) {
      ambulanceInfo = { contact: nearestHospital.ambulanceContact }
      providerName = nearestHospital.name
    } else {
      const externalAmbulance = ambulanceProviders.find(
        (a) => a.available === true
      )
      if (externalAmbulance) {
        ambulanceInfo = externalAmbulance
        providerName = externalAmbulance.name
      } else {
        ambulanceInfo = { contact: 'Not available' }
        providerName = 'Unavailable provider'
      }
    }

    const message = `Dispatching to ${nearestHospital.name}. Ambulance from ${providerName} en route.`

    return res.status(200).json({
      hospital: nearestHospital,
      ambulance: ambulanceInfo,
      message,
      ...(ambulanceInfo.contact === 'Not available' && {
        ambulanceContact: 'Please call ambulance manually.',
      }),
    })
  } catch (error) {
    console.error('Error in requestEmergency:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
