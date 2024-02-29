import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// signup the user

export const register = async (req, res) => {
  try {
    //check if the user exist
    const emailExixte = await User.findOne({ email: req.body.email });
    if (emailExixte)
      return res.status(400).json({ msg: "Email already exists " });

    //hash passwords

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create an new user
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password: hashedPassword });

    const savedUser = await newUser.save();

    const token = jwt.sign({ _id: newUser._id }, process.env.TOKEN_SECRET);
    res.status(200).send({
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      token: token,
      createdAt: newUser.createdAt,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//login the user

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExixte = await User.findOne({ email: req.body.email });
    if (!userExixte)
      return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(
      req.body.password,
      userExixte.password
    );
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    console.log(userExixte._id);
    const token = jwt.sign({ _id: userExixte._id }, process.env.TOKEN_SECRET);
    delete User.password;
    res.status(200).send({
      _id: userExixte._id,
      email: userExixte.email,
      username: userExixte.username,
      token: token,
      createdAt: userExixte.createdAt,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};
