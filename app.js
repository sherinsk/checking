var express=require('express')
const bodyParser = require('body-parser');
const PORT=process.env.PORT || 3000;

app=express()


app.set('views','./views')
app.set('view engine','pug')
app.use(express.static('public'))


app.get('/',async (req,res)=>{
  res.render('index')
})




app.listen(PORT,()=>{console.log('server is running on port')});