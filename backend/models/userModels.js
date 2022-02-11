const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      // just in case we need
      type: Boolean,
      required: true,
      default: false,
    },
    pic: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  {
    timestamps: true,
  }
);

//for encrypting password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  //bycrypt
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
});

//for decrypting password
userSchema.methods.matchPassword = async function (enterPassword) {
  return await bcryptjs.compare(enterPassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
