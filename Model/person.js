const { Schema, model } = require('mongoose')

const personSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: 'John Doe',
  },

  age: {
    type: Number,
    default: 30,
  },

  favoriteFoods: {
    type: [String],
    default: undefined,
  },
})

const person = model('person', personSchema)
module.exports = person
