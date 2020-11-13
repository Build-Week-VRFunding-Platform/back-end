require("colors");
const server = require("./server.js");

const PORT = process.env.PORT || 5000;
const secret = process.env.SECRET_THING || "foo";

console.log(PORT, secret);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`.random);
});
