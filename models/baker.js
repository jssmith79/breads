// dependencies
const mongoose = require('mongoose')
const bread = require ('./bread')

const baker_schema = new mongoose.Schema({
    name: {type: String, required: true, enum: ['Rachel', 'Monica','Joey','Chandler', 'Ross', 'Phoebe']},
    startDate: {type: Date, required: true },
    bio: String
},  { toJSON: {virtuals: true }})


baker_schema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'

})
// model and export
module.exports = mongoose.model('baker_schema', baker_schema)

