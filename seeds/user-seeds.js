const { User } = require("../models");

const userData = [
  {
    username: "samadams412",
    twitter: "samadams",
    github: "samadams412",
    email: "samueladams412@gmail.com",
    password: "password",
  },
  {
    username: "shelby123",
    twitter: "shelby123",
    github: "shelby123",
    email: "shelby123@gmail.com",
    password: "password1",
  },
  {
    username: "daisy321",
    twitter: "daisy321",
    github: "daisy321",
    email: "daisy321@gmail.com",
    password: "password2",
  },
  {
    username: "john535",
    twitter: "john535",
    github: "john535",
    email: "john535@gmail.com",
    password: "password4",
  },
  {
    username: "jane54",
    twitter: "jane54",
    github: "jane54",
    email: "jane54@gmail.com",
    password: "password5",
  },
  {
    username: "bob61",
    twitter: "bob61",
    github: "bob61",
    email: "bob61@gmail.com",
    password: "passsword6",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
