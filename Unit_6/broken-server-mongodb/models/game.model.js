const mongoose = require("mongoose");
const GameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  owner_id: {
    type: String,
    required: true,
  },

  studio: {
    type: String,
    required: true,
  },

  user_rating: {
    type: Number,
    required: true,
  },

  have_played: {
    type: Boolean,
    defaultValue: false,
    required: true,
  },
});
