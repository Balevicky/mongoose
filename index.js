const mongoose = require("mongoose");

const User = require("./models/User");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/exemple-mongoose");
  console.log("connexion ok ");
  // //============== creer un user
  const user1 = new User({
    email: "balevictorien@yahoo.fr",
    firstname: "Bi Bialé Victorien",
    lastname: "Goli",
    age: 45,
  });
  // console.log(user1);
  // //=========== Enregiste dans mongodb
  await user1.save();
  // =================== ou =================
  // creer et enregister user dans mongodb
  const user2 = await User.create({
    email: "alice@yahoo.fr",
    firstname: "Alice ",
    age: 25,
  });
  console.log(user2);
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
  // const users = await User.find({
  //   $or: [{ firstname: "Alice " }, { age: { $gte: 30 } }],
  // })
  //   .select("firstname age -_id") // permet d'afficher uniquement firstname et age et exclure id
  //   .sort({ firstname: "asc" }); // filtrer par ordre croissant soit par asc ou 1 ou  firstname
  // console.log(users);
  // ============================ Modifier un user
  // -------------- user Alice à modifier, methode 1
  // const user = await User.findById("67f18a30160170a06064a218");

  // console.log(user);
  // user.lastname = null;
  // await user.save();
  // console.log(user);
  // -------------- user Alice à modifier, methode 2 et conseillé
  // const id = "67f18a30160170a06064a218";
  // const user = await User.findByIdAndUpdate(
  //   id,
  //   { lastname: "Dubois" },
  //   { new: true }
  // );
  // console.log(user);
  // ============================ Modifier plusieurs users
  // -------------- cas 1
  // const users = await User.updateMany(
  //   { email: "alice@yahoo.fr" },
  //   { lastname: "Dupont" }
  // );
  // console.log(users);
  // // -------------- cas 2
  // const users = await User.updateMany(
  //   { age: { $gte: 20 } },
  //   { lastname: "Balou" }
  // );
  // console.log(users);
  // ============================ supprimer un user
  // ------------- methode 1
  // const user = await User.findByIdAndDelete("67f270db7936dc2084e54dc7");
  // console.log(user);
  // ============================ supprimer plusieurs users
  // ------------- methode 1
  // const users = await User.deleteMany({
  //   age: { $lte: 100 },
  // });
  // console.log(users);
  // ------------- methode 2
  // const users = await User.deleteMany({});
  // console.log(users);
  // =============== deconnecter mongoose==========
  mongoose.disconnect();
}
main();
