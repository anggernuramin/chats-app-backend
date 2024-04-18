import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userModel = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    picture: {
      type: String,
      default: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
    }
  },
  {
    timestamps: true
  }
)

// Gunakan declaration/anonymus funtion, karena arrow function tidak mempunyai akses ke object this
// Schema proses pencocokkan password saat login dengan password yang ada di database
// userModel.methods.matchPassword = async function (enteredPassword: string) {
//   return await bcrypt.compare(enteredPassword, this.password)
// }

// Schema Proses decode password sebelum data disimpan didalam database
userModel.pre('save', async function (next) {
  if (!this.isModified) {
    next()
  }
  // hashing pasword
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})
const User = mongoose.model('User', userModel)

export default User
