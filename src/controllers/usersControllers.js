const usersService = require("../services/usersService");

module.exports = {
    getUsers: async(req,res)=>{
        const users = await usersService.getUsers();
        res.status(200).json(users);
    },

    createUser: async(req,res)=>{
        const {email,password} = req.body;
        const newUser = await usersService.createUser({email, password});
        res.status(200).json(newUser);
    },

    deleteUser: async(req,res)=>{
        const {id} = req.params;
        try {            
            const user = await usersService.deleteUser(id)
            res.status(200).json(user)
        } catch (error) {
            return res.status(404).json({ error: error.message })
        }
    },
}