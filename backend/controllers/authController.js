//@desc login user
//@route post /api/users/login
//@access public
const user = require("../models/userSchema");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const otpMailTemplate = require("../mailtemplates/otpMailTemplate");
const otp = require("../models/otpSchema");
const sendMail = require("../middleware/mailSender1");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const login = asyncHandler(async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);
    const user1 = await user.findOne({ email: data.email });
    if (!user1) {
      res.status(400).send({ ok: false, msg: "user not found" });
    } else {
      const conclusion = await bcrypt.compare(data.password, user1.password);
      if (conclusion) {
        console.log(data.password, user1.password);
        const token = await jwt.sign(
          { email: data.email },
          process.env.secretkey,
          { expiresIn: "1h" }
        );
        res.status(200).send({ ok: true, token: token });
      } else {
        res.status(400).send({ ok: false, msg: "invalid password" });
      }
    }
  } catch (err) {
    res.status(500);
    next(err);
  }
});

//@desc signup user
//@route /api/users/signup
//@access public
const signup = asyncHandler(async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);
    const user1 = await user.findOne({ email: data.email });
    if (user1) {
      res.status(400).send({ ok: false, msg: "user already exists" });
    } else {
      const hashedpassword = await bcrypt.hash(data.password, 10);
      const user2 = new user({
        name: data.name,
        verified: true,
        email: data.email,
        password: hashedpassword,
        role: data.role,
        city: data.city,
        phonenumber: data.phonenumber,
        admin: false,
      });
      sendMail({
        from: "svnmurali1@gmail.com",
        to: data.email,
        subject: "signup success",
        text: "signup success",
        html: "<p>Signup successful!</p>",
      })
        .then((respo) => {
          console.log(respo);
        })
        .catch((err) => {
          console.log(err);
        });
      await user2.save();
      res.status(200).send({ ok: true, msg: "sign up success" });
    }
  } catch (err) {
    next(err);
  }
});

//@desc google auth
//@route post /api/users/googleauth
//@access public
const googleauth = asyncHandler(async (req, res, next) => {
  try {
    const data = req.body;
    const user1 = await user.findOne({ email: data.email });
    if (user1) {
      const token = await jwt.sign(
        { name: data.name, email: data.email },
        process.env.secretkey,
        { expiresIn: "1h" }
      );
      res.status(200).send({ ok: true, token: token });
    } else {
      const user2 = new user({
        name: data.name,
        email: data.email,
        verified: true,
        picture: data.picture,
        password:
          "$2a$10$cvEFuGQHRCFHlX6aaKx8ZOg.wvEl0FmdNoL/b8KX.d2hIvwYIZJoO",
      });
      const respo = await user2.save();
      if (respo) {
        const token = await jwt.sign(
          { name: data.name, email: data.email },
          process.env.secretkey,
          { expiresIn: "1h" }
        );
        res.status(200).send({ ok: true, token: token });
      } else {
        res.status(400).send({ ok: false, msg: "signup failed" });
      }
    }
  } catch (err) {
    next(err);
  }
});

//@desc get otp
//@route /api/user/getotp
//@access public
const getotp = asyncHandler(async (req, res, next) => {
  try {
    const data = req.body;
    const user1 = await user.findOne({ email: data.email });
    if (user1) {
      return res.status(200).send({ ok: false, msg: "user already exists" });
    }
    const temp = Math.floor(1000 + Math.random() * 9000);
    const otpData = {
      email: data.email,
      name: data.name,
      otp: temp.toString(),
      expiresAt: Date.now() + 60000 * 5,
    };
    const otp1 = await otp.updateOne(
      { email: data.email },
      otpData,
      { upsert: true }
    );
    console.log(otp1);
    const respo = await sendMail({
      from: "codebox012@gmail.com",
      to: data.email,
      subject: "otp verification",
      text: `Your OTP is ${temp}`,
      html: otpMailTemplate({ name: data.name, otp: temp }),
    });
    if (respo) {
      res.send({ ok: true, msg: "otp sent successfully" });
    } else {
      res.send({ ok: false, msg: "otp sending failed" });
    }
  } catch (err) {
    next(err);
  }
});

//@desc otp verify
//@Route /api/users/otpverify
//@access public
const otpverify = asyncHandler(async (req, res, next) => {
  try {
    const data = req.body;
    const otpData = await otp.findOne({ email: data.email });
    console.log(otpData);
    if (!otpData) {
      return res.send({ ok: false, msg: "otp expired" });
    }
    if (Date.now() < otpData.expiresAt) {
      if (otpData.otp === data.otp) {
        res.send({ ok: true, msg: "otp verified" });
      } else {
        console.log("hello");
        res.send({ ok: false, msg: "otp invalid" });
      }
    } else {
      res.send({ ok: false, msg: "otp expired" });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = { login, signup, googleauth, getotp, otpverify };
