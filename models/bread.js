
// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDLr6MKgCEKoI7sInSSHkW35X_BUK4TfyF3BhX0sqgpnF-pngJqF15Jfy9KigHPZrjUKuFrR7l2QQ&usqp=CAU&ec=48600113' },
  baker: {
    type: String,
    enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phobe']
  }
})

breadSchema.methods.getBakedBy = function () {
  return `${this.name}  was baked with love by ${this.baker}`
}
//model and export
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread