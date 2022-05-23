import axios from 'axios';


export const getUserList= async ()=>{
    try{
    const {data:userList}=await axios.get('/users')
    console.log(userList);
    return userList;
    }catch(e){
        console.log({erroreGetList:e})
        return {}
    }
}
export const getOrderList= async ()=>{
    try{
    const {data:orderList}=await axios.get('/orders')
    console.log(orderList);
    return orderList;
    }catch(e){
        console.log({erroreGetList:e})
        return {}
    }
}
