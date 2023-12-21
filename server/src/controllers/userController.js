import userModel from "../models/userModel.js"

const userActions = {
    findAllUsers: async (req, res) => {
        try {
            const users = await userModel.find({});
            res.send(users)
        } catch (error) {
            res.status(500).json({ message: error })
        }
    },
    findUserByID: async (req, res) => {
        try {
            const user = await userModel.findById(req.params.id)
            res.send(user)
        } catch (error) {
            res.status(500).json({ message: error })
        }
    },
    createUser:async (req,res)=>{
        try {
            const newUser = new userModel({
                username:req.body.username,
                email:req.body.email,
                password:req.body.password,
                role:req.body.role
            })
            await newUser.save()
            res.send("Rehim geldi")
        } catch (error) {
            res.status(500).json({ message: error })
        }
    },
    updateUser:async (req,res)=>{
        try {
            const changeUser = await userModel.findByIdAndUpdate(req.params.id)
            if (changeUser) {
                changeUser.username = req.body.username
                changeUser.email = req.body.email
                changeUser.password = req.body.password
                changeUser.role = req.body.role
                await changeUser.save()
                res.send("Rehim deyisdi")
            }
            else{
                res.status(404).json("Not found!")
            }
        } catch (error) {
            res.status(500).json({ message: error })
        }
    },
    deleteUser:async (req,res)=>{
        try {
            await userModel.findByIdAndDelete(req.params.id)
            res.send("Rahim getdi!")
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }
}
export default userActions