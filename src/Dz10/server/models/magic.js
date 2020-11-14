const mongoose = require('mongoose');

const { Schema } = mongoose;

const MagicSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  damage: {
    type: Number,
    required: true
  },
  requiredMana: {
    type: Number,
    required: true
  },
  description: String
});

const MagicModel = mongoose.model('magic', MagicSchema);

module.exports = MagicModel;
