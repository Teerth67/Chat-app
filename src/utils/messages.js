const generate=(username,text)=>{
    return{
        username,
        text,
        createdAt:new Date().getTime()
    }
}

const ltime=(username,url)=>{
    return{
        username,
        url,
        createdAt:new Date().getTime()
    }
}
module.exports={
    generate,ltime
}