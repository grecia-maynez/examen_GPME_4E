const mongoose = require('mongoose');
//crear un Schema

let Schema = mongoose.Schema;

//crear coleccion
let PintoresSchema = new Schema({
    nombre:{
        type: String,
        requeried: [true, 'Requerimos el nombre']
    },
    corriente:{
        type: String,
        required: [true, 'Requerimos la corriente']
    },
    nacionalidad:{
        type: String,
    },
    natalicio:{
        type: String,
        required: [true, 'Requerimos fecha de nacimiento']
    },
    pintura:{
        type: String,
    }
});

module.exports = mongoose.model('Pintores', PintoresSchema);