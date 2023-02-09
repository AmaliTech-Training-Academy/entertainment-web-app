const mongoose = require("mongoose");
const express = require("express");
// const User = require('../models/mongodb');
const User = require("../models/mongodb");

const addUser = async (email, password) => {
  console.log("add", email);
  try {
    const user = new User({ email, password });
    await user.save();
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = User.findOne({ email });
    return user;
  } catch (error) {}
};

module.exports = {
  getUserByEmail,
  addUser,
};
