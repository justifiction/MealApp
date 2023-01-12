const mongoose=require('mongoose');
const url='mongodb+srv://username:password@cluster0.d0w9i.mongodb.net/mealsApp?retryWrites=true&w=majority'

mongoose.connect(url).then(()=>{
    console.log('Connected')
}).catch(error=>console.log(error))
