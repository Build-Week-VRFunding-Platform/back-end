module.exports = {
  isValid,
};

function isValid(user) {
  console.log(user);
  return Boolean(user.email && user.password);
}

//&& typeof user.password === "string"
