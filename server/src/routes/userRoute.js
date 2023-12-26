import express from "express"
import userActions from "../controllers/userController.js"
const router = express.Router()

router.get("/",userActions.findAllUsers)
router.get("/:id",userActions.findUserByID)
router.post("/",userActions.createUser)
router.post("/login",userActions.login)
router.put("/:id",userActions.updateUser)
router.delete("/:id",userActions.deleteUser)

export default router