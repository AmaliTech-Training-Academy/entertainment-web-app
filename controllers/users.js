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
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

const addBookmark = async (email, title) => {
  try {
    const user = await User.findOne({ email });
    console.log(user);
    user.bookmark.push(title);
    user.save();
    return user;
  } catch (error) {
    console.log(error);
    return { "error": error };
  }
}

const deleteBookmark = async (email, title) => {
  try {
    const user = await User.findOne({ email });
    let index = user.bookmark.indexOf();
    user.bookmark.splice(index, 1);
    user.save();
    return user;
  } catch (error) {
    console.log(error);
    return { "error": error };
  }
}

module.exports = {
  getUserByEmail,
  addUser,
  addBookmark,
  deleteBookmark
};
