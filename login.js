const bcrypt = require("bcrypt");
const saltRounds = 10;
const db = [
  {
    username: "abc",
    password: "123",
    paswordHassed:
      "$2b$10$N4vBK5pbfLy82Ag7JxoI4OZxgLRLuKY7tXx0ehg9SN30F9OcQ5WEK",
  },
  {
    username: "xyz",
    password: "888",
    paswordHassed:
      "$2b$10$N4vBK5pbfLy82Ag7JxoI4OoDRt47qWpLTMX1V.VvVFlqvRf0GYw6S",
  },
];

let dbhash = [];

const login = async (un, pw) => {
  // check un exist in array db

  // if un exist continue check password
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(myPlaintextPassword, salt);
  const cpvl = await bcrypt.hash(pw, salt);
  return hash === cpvl;
  //   return await bcrypt.compare(pw, hash);
};
(async () => {
  // console.log(await login("s0//P4$$w0rD"));
  await hassP(db);
})();
