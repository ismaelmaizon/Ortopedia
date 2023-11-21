import mongoose from 'mongoose'
import { type } from 'os';

const collection = 'patientOrt'

const PatientSchema = new mongoose.Schema({
        Nombre: { type: String, require },
        Apellido: { type: String, require },
        Cel: { type: Number, require },
        Email: { type: String, require },
        Nacimiento: String,
        Ocupacion: String,
        Genero: String,
        Peso: String,
        Altura: String,
        Calzado: String,
        Alergia: String,
        Diabetes: String,
        PArterial: String,
        Medicacion: String,
        MedicacionCual: String,
        Piel: String,
        Temperatura: String,
        Pulso: String,
        TPie: String,
        Plantigrafia: String,
        File: {type: [
            {type: File}
        ] }
})

const userModel = mongoose.model(collection, PatientSchema)
export default userModel;