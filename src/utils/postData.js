import URL, { headers} from './api.js'

async function addProduct (id) {
    try {
        const response = await fetch(URL.ADDPRODUCT, {
            method: "POST",
            headers,
            body: JSON.stringify({
                productId: id
            })
        })
        const data = await response.json();
        return data;
    }catch(error){
        console.log('Post Failed',error)
    }
}

async function addCoins (coins) {
    try {
        const response = await fetch(URL.ADDCOINS, {
          method: "POST",
          headers,
          body: JSON.stringify({ amount: coins }),
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.log('Post Failed',error);
      }
}
const Post = {
    addProduct,
    addCoins
}
export default Post