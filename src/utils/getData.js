import URL,{ headers }from './api.js'

async function getProducts () {
    try{
        const response = await fetch(URL.GETPRODUCTS, { 
            method: "GET",
            headers
        })
        const data = await response.json();
        return data 
    } catch (error) {
        console.log('Fetch Error', error );
    }
}

async function getUser () {
    try {
        const response = await fetch(URL.GETUSER, { 
            method: "GET",
            headers
        })
        const data = await response.json();
        return data 

    }catch (error){
        console.log('Fetch', error)
    }
}

async function getHistory () {
    try{
        const response = await fetch(URL.GETHISTORY,{
            method:"GET",
            headers
        })
        const data = await response.json()
        return data 

    }catch(error){
        console.log('Fetch Error', error)
    }
}

const Data = {
    getProducts,
    getUser,
    getHistory
}
export default Data