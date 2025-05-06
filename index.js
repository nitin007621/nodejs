import express, { urlencoded } from 'express'
import morgan from 'morgan'
import router from './router/user.router.js'
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import methodOverride from 'method-override';
import { mongoose } from 'mongoose';


// Add after body-parser

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let app =   express()
app.set('view engine', 'ejs')  
app.use(express.json())  
app.use(express.urlencoded())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'));
 let port = 3001 


 app.use('/',router)

 mongoose.connect('mongodb://localhost:27017/edemo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to MongoDB');
  }
  ).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });




 app.listen(port,()=>{
    console.log(`server is running at ${port}`)
 })

