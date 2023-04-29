const mongoose = require('mongoose');

const connectDataBase = () => {
    console.log("Wait connecting to the database...");
    mongoose.connect("mongodb+srv://root:root@cluster0.obvurws.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true, 
    useUnifiedTopology:true}
    ).then(() => console.log("MongoDB Atlas connected!")).catch((error) => console.log(error));
}

module.exports = connectDataBase;