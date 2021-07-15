const path= require('path')
const express= require('express');
const hbs= require('hbs')



const app= express()
// define paths for express config
const fileDirctpath= path.join(__dirname,'../public')
const viewsPath= path.join(__dirname,"../tamplates/views")
const partialsPath= path.join(__dirname,"../tamplates/partials")
// Setup handlebars engine and view location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)    

// Setup static directory to serve
app.use(express.static(fileDirctpath))

app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather app',
        name: 'Ab.Waris'
    }) 
})


app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'help',
        name: 'Ab.Waris'
    }) 
})


app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'ABOUT',
        name: 'Ab.Waris'
    }) 
})
const fileDirectoyPath = path.join(__dirname,'../public')
app.use(express.static(fileDirectoyPath))


app.get("/weather",(req,res)=>{
    res.send([{
        forcast: "Today very hot"},{
            location: "Tando Qaiser"}])
})
app.get("/help/*",(req,res)=>{
    res.render('4o4', {
        title: "404",
        name: "Ab.Waris",
        errorMessage: "Help artical not found"

    })
})

app.get("*",(req,res)=>{
    res.render("4o4",{
    title: "4o4",
    name: "Ab.Waris",
    errorMessage: "Page not found"
        
    })
})


app.listen(3000,()=>{
    console.log('server is up on port 3000')
})