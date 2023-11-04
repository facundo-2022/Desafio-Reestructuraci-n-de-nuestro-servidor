import User from '../dao/clases/usuario.dao.js'

const usuarioService = new User()
export const getUser = async(req, res) =>{
    let result = await usuarioService.getUsers()
    res.send({status: "success", result: result})
}

export const getUserById = async(req, res) =>{
    const {uid} = req.params
    let user = await usuarioService.getUserById(uid)
    res.send({status: "success", result: user})
}
 

export const saveUser = async(req, res) =>{
    const user = req.body
    let result = await usuarioService.saveUser(user)
    res.send({status:"success", result: result})
}