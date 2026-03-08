import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    userId: {type:mongoose.Types.ObjectId,
        ref: "User",
        require: true,
        unique: true
    },
   name: {type: String, require: true},
   age: {type: Number},
   gender: {type: String, enum: ["Male", "Female", "Other"]},
   bloodGroup: {type: String},
   geneotype: {type: String},
   allergies: {type: [String]} ,
   medicalConditions: {type: [String]},
   medications: {type: [String]},
   emergencyContact: {
    name:{type: String},
    phone: {type: String},
    relatinship: {type: String}
   },
   address: {type: String},
   profileImageUrl: {type: String}
}, {timestamps: true})

const Profile = mongoose.model("Profile",profileSchema)

export default Profile;