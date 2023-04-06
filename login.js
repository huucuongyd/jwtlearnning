const bcrypt = require("bcrypt");
const saltRounds = 10;
const salt = await bcrypt.genSalt(saltRounds);
const db = [
  {
    username:"abc",
    password:"123"
  },
  {
    username:"xyz",
    password:"888"
  }
]

let dbhash = []

const hassP = async (db) => {
  db.forEach(e => {
    let passhass = bcrypt.hash(e.password,salt)
  });
}

const login = async (pw) => {
  
  const hash = await bcrypt.hash(myPlaintextPassword, salt);
  const cpvl = await bcrypt.hash(pw,salt)
  return hash === cpvl
//   return await bcrypt.compare(pw, hash);
};
(async () => {
  console.log(await login("s0//P4$$w0rD"));
})();
