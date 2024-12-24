const fs = require("fs");
fs.writeFileSync("welcome.tst","hello node",(error) => {
    if (error)throw error;
    console.log("file has been created")
})
fs.readFile("hello.txt",(error,data) => {
    if (error)throw error;
    console.log(data.toString())
})