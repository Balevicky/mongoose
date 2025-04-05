const mongoose = require("mongoose");

const User = require("./models/User");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/exemple-mongoose");
  console.log("connexion ok ");
  // //============== creer un user
  // const user1 = new User({
  //   email: "balevictorien@yahoo.fr",
  //   firstname: "Bi Bialé Victorien",
  //   lastname: "Goli",
  //   age: 45,
  // });
  // console.log(user1);
  // //=========== Enregiste dans mongodb
  // await user1.save();
  // =================== ou =================
  // creer et enregister user dans mongodb
  const user2 = await User.create({
    email: "alice@yahoo.fr",
    firstname: "Alice ",
    age: 25,
  });
  console.log(user2);

  // =============== deconnecter mongoose==========
  mongoose.disconnect();
}
main();
