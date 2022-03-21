const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://pooja:pooja123@test.wjg1r.mongodb.net/unit4c3"
  );
};
