import userModel from "../db/models/user.model.js";

export const login = (req, res) => {
    let resu = req.params.email
    console.log(resu);
    console.log('login');
    res.send('Hola login');
}
export const generateCode = (req, res) => {
    console.log('code');
    res.send('Hola code')
}

//crea un usuario
export const createUser = async (req, res) =>{
    const user = req.body
    let newUser = {
        first_name : user.Nombre,
        last_name : user.Apellido,
        email : user.email,
        password : user.Password,
        role : user.rol
    }
    let result = await userModel.create(newUser)
    console.log(result);
    res.send(result)
}

//crea un paciente
export const createPatient = async (req, res) =>{
    const patient = req.body
    
    //let result = await userModel.create(newUser)
    console.log(patient);
    //res.send(result)
}