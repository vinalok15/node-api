import { User } from '../models/user.js';

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.json({
    success: true,
    users,
  });
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });

  res.status(201).cookie('tempi', 'tesging').json({
    success: true,
    message: 'Registered Successfully.',
  });
};

export const getUserDetails = async (req, res) => {
  // const { id } = req.body;
  //const { id } = req.query;
  const { id } = req.params;
  console.log(id);
  const user = await User.findById(id);
  res.json({
    success: true,
    user,
  });
};
