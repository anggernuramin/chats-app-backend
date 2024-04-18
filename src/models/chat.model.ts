import mongoose from 'mongoose'

// Model Untuk chat ,Dokumen yang berisi chatname,dll
const chatModel = new mongoose.Schema(
  {
    chatName: {
      //
      type: String,
      trim: true // Memastikan akan menghapus karakter spasi putih diawal dan akhir string
    },

    isGroupChat: {
      type: Boolean,
      default: false
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Akan mengacu pada model User, yang nantinya yang akan dimasukkan dalam model Chat ini adalah _id usernya
      }
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message'
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
)

const Chat = mongoose.model('Chat', chatModel)
export default Chat
