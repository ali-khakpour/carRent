import Koenigsegg from './images/Untitled.png'
import NissanGTR from './images/nissanGPR.png'
import RollsRoyce from './images/rolls-roye.png'
import Ferrari from './images/ferrari.png'
import MGZXExcite from './images/MG_ZX_Excite.png'
import newRush from './images/new_rush.png'
import jeep from './images/jeep.png'
import volvo from './images/volvo.png'



const data = [
    {id: 1, like:7,  status: false ,  fuel:"90L", category: 1, off:"", model: "Sport",     name: "Koenigsegg",     price: 99.00, user:"2people", image:Koenigsegg},
    {id: 2, like:5,  status: false ,  fuel:"80L", category: 1, off:"", model: "Sport",     name: "Nissan GT-R",    price: 80.00, user:"2people", image:NissanGTR},
    {id: 3, like:25, status: false ,  fuel:"70L", category: 1, off:"", model: "Sport",     name: "Rolls-Royce",    price: 96.00, user:"2people", image:RollsRoyce},
    {id: 4, like:15, status: false ,  fuel:"80L", category: 1, off:"", model: "Sport",     name: "Ferrari",        price: 88.00, user:"2people", image:Ferrari},
    {id: 5, like:35, status: false ,  fuel:"70L", category: 2, off:"", model: "SUV",       name: "MG-ZX Excite",   price: 80.00, user:"6people", image:MGZXExcite},
    {id: 6, like:5,  status: false ,  fuel:"80L", category: 2, off:"", model: "SUV",       name: "ALL New Rush",   price: 72.00, user:"6people", image:newRush},
    {id: 7, like:10, status: false ,  fuel:"90L", category: 2, off:"", model: "SUV",       name: "Jeep",           price: 81.00, user:"6people", image:jeep},
    {id: 8, like:15, status: false ,  fuel:"70L", category: 2, off:"", model: "SUV",       name: "Volvo",          price: 85.00, user:"6people", image:volvo},
    {id:10, like:15, status: false ,  fuel:"80L", category: 2, off:"", model: "SUV",       name: "ALL New Rush",   price: 68.00, user:"6people", image:newRush},
    {id:11, like:15, status: false ,  fuel:"90L", category: 2, off:"", model: "SUV",       name: "Jeep",           price: 86.00, user:"6people", image:jeep},
    {id: 9, like:12, status: false ,  fuel:"80L", category: 3, off:"", model: "Hatchback", name: "MG-ZX Excite",   price: 75.00, user:"4people", image:MGZXExcite},
    {id:12, like:15, status: false ,  fuel:"70L", category: 3, off:"", model: "Hatchback", name: "ALL New Rush",   price: 84.00, user:"4people", image:newRush},
    {id:13, like:16, status: false ,  fuel:"90L", category: 2, off:80, model: "SUV",       name: "Jeep",           price: 72.00, user:"6people", image:jeep},
]

export default data