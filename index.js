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
  // const user2 = await User.create({
  //   email: "alice@yahoo.fr",
  //   firstname: "Alice ",
  //   age: 25,
  // });
  // console.log(user2);
  // ============================Afficher tous les user
  // const users = await User.find();
  // console.log(users);
  // ============================Afficher un user par sonID
  // const Alice = await User.findById("67f18a30160170a06064a218");
  // console.log(Alice);
  // ============================Afficher un user par son nom

  // const Alice = await User.find({
  //   // firstname: "Alice ",
  //   // age: { $gte: 27 },//>=27
  //   age: { $lte: 27 }, //<=27
  // });
  // ============================Afficher des users par plusieur condition
  // firstname: "Alice ";
  const Alice = await User.find({
    $or: [{ firstname: "Alice " }, { age: { $gte: 30 } }],
  })
    .select("firstname age -_id") // permet d'afficher uniquement firstname et age et exclure id
    .sort({ firstname: "asc" }); // filtrer par ordre croissant soit par asc ou 1 ou  firstname
  console.log(Alice);

  // =============== deconnecter mongoose==========
  mongoose.disconnect();
}
main();
