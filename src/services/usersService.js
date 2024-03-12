const User = require("../models/User");

module.exports = {
    getUsers: async ()=>{
        const users = await User.find();
        return users
    },

    createUser: async (user)=>{
        const newUser = await User.create(user);
        return newUser;
    },

    deleteUser: async (id)=>{
        const user = await User.findByIdAndDelete(id);
        return user;
    },
    getUserFavorites: async (userId) => {
        try {
            const user = await User.findById(userId);
            return user.favorites;
        } catch (error) {
            throw new Error("Error al obtener los favoritos del usuario");
        }
    },

}