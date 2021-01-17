//======asyncc
/* const getDadjoke= async()=>{
    let joke = await axios.get("https://icanhazdadjoke.com/") //an await n hulat mon a an result cn antes dumeritso sa sunud na code
    console.log(joke)
}
getDadjoke() */


//===axios dissecting code and studying 

/* axios.get("https://api.cryptonator.com/api/ticker/btc-usd")//may n return na command promise an return tas may data
.then(res=>{ //ini nga res ini tu return sa una nga request sa code 10 baga
    console.log(res.data.ticker["price"]);
})                      
.catch(err =>{
    console.log("error catch ", err)
}) //n dd man pag dri resolve an return cto promise mao n an execute)
 */

//converting top code to async

const fetchData = async ()=>{
    try { // try n pag execute nacode pag mag error ig kacatch sa ubus pag wara execute an sunud na code
        let APIS= await axios.get("https://api.cryptonator.com/api/ticker/btc-usd")// request sa server gamit api may awiat pare mag hulat an nasunud na code matangpus n
        console.log(APIS.data.ticker.base)
    } catch (error) {
        console.log("nadakup an error ", error)
    }
}
fetchData()