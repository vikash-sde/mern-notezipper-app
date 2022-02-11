const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "vikash1234", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
