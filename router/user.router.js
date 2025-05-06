import express from 'express'
import { fetchAllUsers ,fetchUserByID ,createUser, updatingUser ,fetchUsersData,deleteUserByID} from '../controller/user.controller.js'
const router = express.Router()

router.get('/',fetchUsersData)
router.get('/user',fetchAllUsers)
router.get('/user/:id',fetchUserByID)
router.post('/create', createUser)
router.put('/update/:id',updatingUser)
router.delete('/delete/:id',deleteUserByID)


export default router