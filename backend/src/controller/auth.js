import userModel from "../db/models/user.model.js";

export const login = (req, res) => {
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
    let result = await userModel.create(user)
    console.log(result);
    res.send(result)
}
