export const headers = {
    "Content-Type":"application/json",
    Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDMxOTQzYzdlNzE4NzAwMjBlMzhmMGEiLCJpYXQiOjE2MTM4NjE5NDh9.AYEMy5yWsNxQ4_f5ZWXm4znmN5fHq5jhjxfACQGME50"
};

const GETUSER = "https://coding-challenge-api.aerolab.co/user/me";
const ADDCOINS = "https://coding-challenge-api.aerolab.co/user/points";
const GETHISTORY = "https://coding-challenge-api.aerolab.co/user/history";
const ADDPRODUCT = "https://coding-challenge-api.aerolab.co/redeem";
const GETPRODUCTS = "https://coding-challenge-api.aerolab.co/products";


export default {
    GETUSER,
    ADDCOINS,
    GETHISTORY,
    ADDPRODUCT,
    GETPRODUCTS
}