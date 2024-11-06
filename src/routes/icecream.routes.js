import {Router} from 'express'
import {getIcecreams, createIcrecream, updateIcecream, deleteIcecream, getIcecream} from '../controllers/icecream.controller.js'

const router =  Router()

router.get('/icecreams', getIcecreams)
router.get('/icecream/:id', getIcecream)
router.post('/icecreams', createIcrecream)
router.patch('/icecreams/:id', updateIcecream)
router.delete('/icecreams/:id', deleteIcecream)

export default router