const mongoose= require('mongoose')

const connection={}
const dbConnect=async(res,req)=>{
    if(connection.isConnected){
        return;
    }
    const db= await mongoose.connect(process.env.MONGO_URI,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    });

    connection.isConnected=db.connections[0].readyState;
}
export default dbConnect