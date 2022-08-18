const { User } = require("../model/user");
const express = require("express");
const router = express.Router();
require("dotenv/config");
const api = process.env.API_URL;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.jwtTokenSecret;
const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync("B$c0/\/", salt)

router.post(`/register`, async (req, res) => {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.passwordHash),
  });
  try {
    user = await user.save();
    if (!user) return res.status(400).send("the user cannot be created!");
    res.send(user);
  } catch (err) {
    return res.status(400).send(`err: ${err.message}`);
  }
});

//get email
router.post("/getuser/email", async (req, res) => {
  res.send({
    data: await User.find({ email: { $regex: `${req.body.email}` } }),
  }); //search email that has the word specified in postman
});

//get name
router.post("/getuser/name", async (req, res) => {
  res.send({ data: await User.find({ name: { $regex: `${req.body.name}` } }) }); //search name that has the word specified in postman
});

//reset pw
router.patch("/resetPassword", async (req, res) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  function generateString(length) {
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
    
  }
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    user.passwordHash = bcrypt.hashSync(generateString(10));
    // user.passwordHash = password;
    user.save();
    res.send({ data: user.passwordHash });
  }
});

//change pw
router.patch("/changepassword/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.newpassword, salt); // request for newpassword and hashing it
    const userPassword = await User.findByIdAndUpdate(    //find the userid and update the newpassword
      { _id: userId },    
      { passwordHash: password },
      { new: true }
    ); 
    console.log("change password"); //to check the console
    return res
      .status(200)
      .json({
        status: true,
        msg: "Your password has been updated",
        data: userPassword,
      });
  } catch (error) {
    return res.status(400).json({ status: false, error: "Error Occured" });
  }
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    if (bcrypt.compareSync(req.body.passwordHash, user.passwordHash)) {
      const userLimited = await User.findOne({ email: req.body.email }).select(
        "id name email "
      );
      const token = jwt.sign(
        {
          userId: userLimited.id,
          isAdmin: true,
        },
        secret,
        {
          expiresIn: "1d",
        }
      );
      res.status(200).send({ data: userLimited, token: token });
    } else {
      res.status(400).send({ message: "User Invalid" });
    }
  } else {
    res.status(400).send({ message: "User not found" });
  }
});

router.get(`/`, async (req, res) => {
  const userList = await User.find();
  if (userList.length == 0) {
    res
      .status(500)
      .json({ status: false, message: "No data found", errCode: "0001" });
    return;
  }
  res.send(userList);
});

router.post(`/`, (req, res) => {
  const user = new User({
    name: req.body.name,
    image: req.body.image,
    countInStock: req.body.countInStock,
  });
  res.send(user);
});

module.exports = router;
