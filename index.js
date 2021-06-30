const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const connectDB = require('./DB/connectDB')
const person = require('./Model/person')
const users = require('./users')

connectDB()

//*************************Create a person having this prototype:********************************

// let firstPerson = {
//   name: 'Hamza',
//   age: 29,
//   favoriteFoods: ['Paella', 'Pizza', 'Couscous'],
// }

//*************************Create and Save a Record of a Model***********************************

// const AddPerson = () => {
//   const user = new person(firstPerson)
//   user.save((err) => {
//     err ? console.log('Error', err) : console.log('Done')
//   })
// }
// AddPerson()

//*************************Create Many Records with model.create()********************************

// const AddMany = () => {
//   person
//     .create(users)
//     .then(console.log('Users added successfully'))
//     .catch((err) => console.log('Somthing went wrong when added users'))
// }
// AddMany()

//*************************Use model.find() to Search Your Database********************************

// const findPerson = () => {
//   person
//     .find({ name: 'Bilel' })
//     .then((res) => console.log(res))
//     .catch((err) => console.log('Somthing went wrong when retrieving data'))
// }
// findPerson()

//***********Use model.findOne() to Return a Single Matching Document from Your Database************

// const findPerson = () => {
//   person.findOne({ favoriteFoods: 'Tacos' }, (err, data) => {
//     err ? console.log('Error', err) : console.log('Data', data)
//   })
// }
// findPerson()

//********************Use model.findById() to Search Your Database By _id****************************

// let personId = { _id: '60d9b71eb7c4501ad0a38425' }

// const findPersonById = () => {
//   person.findById(personId, (err, data) => {
//     err ? console.log('Error', err) : console.log('Data', data)
//   })
// }
// findPersonById()

//*****************Perform Classic Updates by Running Find, Edit, then Save***************************

// let addHumburgerToPerson = { _id: '60d9ebc46ed1af2ff4e4d9bb' }

// const Update = () => {
//   person
//     .findById(addHumburgerToPerson)
//     .then((res) => {
//       console.log(res)
//       res.favoriteFoods.push('Hamburger')
//       console.log('favoriteFoods updated successfully')
//       res.save()
//     })
//     .catch((err) => console.log(err))
// }
// Update()

// *******************Perform New Updates on a Document Using model.findOneAndUpdate()*****************

// const Update = async () => {
//   let personAge = await person.findOneAndUpdate(
//     { name: 'Dhekra' },
//     { age: 20 },
//     { new: true, useFindAndModify: false }
//   )
//   console.log(`Age of ${personAge.name} updated to ${personAge.age} years old`)
// }
// Update()

// ***********************Delete One Document Using model.findByIdAndRemove******************************

// let personToDeleteId = '60d9ea87379a8c1650afbbbf'

// const Delete = () => {
//   person.findByIdAndRemove(personToDeleteId, (err, data) => {
//     err ? console.log('Error', err) : console.log('Person removed', data)
//   })
// }
// Delete()

// ******************MongoDB and Mongoose - Delete Many Documents with model.remove()**********************

// let personName = { name: 'Houssem' }

// const Delete = () => {
//   person.remove(personName, (err) => {
//     err ? console.log('Error', err) : console.log('Person removed')
//   })
// }
// Delete()

//******************* Chain Search Query Helpers to Narrow Search Results**********************************

// const chainSearch = async () => {
//   const Pr = await person
//     .find({ favoriteFoods: { $in: ['Burritos'] } })
//     .sort({ name: 'asc' })
//     .limit(2)
//     .select('-age')
//     .exec()
//     .then((res) => console.log('Burritos lovers:', res))
//     .catch((err) => console.log('Error:', err))
// }
// chainSearch()

// ********************Server Creation************************

app.listen(port, (err) =>
  err
    ? console.log('OUPS!!! Somthing went wrong', err)
    : console.log(`Listening on port: ${port}`)
)
