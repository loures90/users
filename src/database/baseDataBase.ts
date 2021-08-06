import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/users', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, function (err) {
    if (err) {
        console.log(err)
    }
    else {
        console.log("MongoDB connected")
    }
})
