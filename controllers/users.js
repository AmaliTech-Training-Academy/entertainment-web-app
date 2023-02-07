const mongoose = require("mongoose");
const express = require('express');
// const User = require('../models/mongodb');
const User = require("../models/mongodb");

const addUser = (email, password) => {
    console.log('add');
    try {
        const user = new User({email, password});
        console.log(user);
        return user;
    } catch (error) {
        console.log(error);
    }
}


const getUserByEmail = async (email) => {
    try {
        const user = User.findOne({ email });
        return user;
    } catch (error) {
        
    }
}

module.exports = {
    getUserByEmail,
    addUser
}