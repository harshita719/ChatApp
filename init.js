const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chatapp');
}

let allChats = [
    {
        from:"neha",
        to:"preeti",
        message:"send me notes for the exams",
        created_at: new Date()
    },
    {
        from: "rohit",
        to: "mohit",
        message:"teach me JS callbacks",
        created_at: new Date
    },
    {
        from:"amit",
        to:"sumit",
        message:"All the best",
        created_at: new Date()
    },
    {
        from:"anita",
        to:"ramesh",
        message:"Bring me some fruits",
        created_at:new Date()
    },
    {
        from:"tony",
        to:"peter",
        message:"go to hospital",
        created_at:new Date()
    }
];

Chat.insertMany(allChats);