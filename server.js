const express = require('express')
const methodOverride = require('method-override');
require('dotenv').config()
const connectDB = require('./utils/connectDB')
const jsxEngine = require('jsx-view-engine')
const Logs = require('./models/logs')




const app = express()
const  PORT = 3000


app.set('view engine','jsx')
app.engine('jsx',jsxEngine())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))


app.get('/',(req,res)=>{
    res.send('working')
})

app.get('/logs/new',(req,res)=>{
    res.render('New')
})

app.get('/logs',async (req,res)=>{
    const logs = await Logs.find({})
    res.render('Index',{logs})
})

app.get('/show/:id',async (req,res)=>{
    const {id} = req.params
    const log = await Logs.findById(id)
    res.render('Show',{log})
})


app.post('/logs',async (req,res)=>{
    if(req.body.shipIsBroken == 'on'){
        req.body.shipIsBroken = true
    }else{
        req.body.shipIsBroken = false
    }
    await Logs.create(req.body)
    res.render('/logs')
    console.log(req.body);

})
app.get('/logs/edit/:id',async (req,res)=>{
    const {id} = req.params
    const log = await Logs.findById(id)
    res.render('Edit',{log})
})

app.put('/logs/:id',async (req,res)=>{
    const {id} = req.params
    if(req.body.shipIsBroken == 'on'){
        req.body.shipIsBroken = true
    }else{
        req.body.shipIsBroken = false
    }
    console.log(id);
    console.log(req.body);
    try {
        await Logs.findByIdAndUpdate(id,req.body,{new:true})
        res.redirect(`/show/${id}`)
    } catch (error) {
        console.log(error);
    }
})

app.delete('/logs/:id',async (req,res)=>{
    const {id} = req.params;
    await Logs.findByIdAndDelete(id)
    res.redirect('/logs')
})



connectDB()
app.listen(3000,()=>{
    console.log(`Server listening at port ${PORT}`);
})