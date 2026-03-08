import User from "../models/user.js";

// Update or Save Profile
export const updateProfile = async (req, res) => {
    try {
        const userId = req.user.id;

        const {
            fullName, dateOfBirth, bloodType,
            allergies, phoneNumber, location,
            emergencyName, emergencyPhoneNumber
        } = req.body;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Update only the fields provided
        user.fullName = fullName || user.fullName;
        user.dateOfBirth = dateOfBirth || user.dateOfBirth;
        user.bloodType = bloodType || user.bloodType;
        user.allergies = allergies || user.allergies;
        user.phoneNumber = phoneNumber || user.phoneNumber;
        user.location = location || user.location;
        user.emergencyName = emergencyName || user.emergencyName;
        user.emergencyPhoneNumber = emergencyPhoneNumber || user.emergencyPhoneNumber;

        await user.save();

        return res.status(200).json({ message: "Profile updated successfully", user });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Get Profile
export const getProfile = async (req, res) => {
    try {
        const userId = req.user.id; // populated from auth middleware

        const user = await User.findById(userId).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ message: "Profile fetched successfully", user });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Delete Profile
export const deleteProfile = async (req, res)=>{
    try {
        const userId = req.user.id

        const deletedUser = await User.findByIdAndDelete(userId)

        if(!deletedUser){
            return res.status(404).json({message: "User profile not found"})
        }

        return res.status(200).json({message: "User profile deleted successfully"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
