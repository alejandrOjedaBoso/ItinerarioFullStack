import { User } from "../models/User.js";
import { encrypt, login } from "../config/hash.js";

export async function createUser(req, res) {
  const { name, surnames, username, email, password } = req.body;

  try {
    const hashPassword = await encrypt(password);
    const newUser = await User.create({
      name: name,
      surnames: surnames,
      username: username,
      email: email,
      password: hashPassword,
    });
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({ err: err });
  }
}

export async function loginUser(req, res) {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({
      where: { username: username },
    });
    const response = await login(username, password, user.password);
    res.status(200).json({ response });
  } catch (err) {
    res.status(500).json({ err: err });
  }
}
