const ps =require("generate-password");
const generater = (()=>{
    const password = ps.generate({
        length: 10,
        numbers: true,
        uppercase: true,
        lowercase: true,
        symbols: true
    })
    console.log(password)
})
generater()