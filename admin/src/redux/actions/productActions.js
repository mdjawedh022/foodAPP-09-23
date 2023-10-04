import axios from "axios";

export const getAllProducts=()=>async(dispatch)=>{
    const response=await axios.get(`http://localhost:8080/api/v1/products`)
    dispatch({
        type:'ALL_PRODUCTS',
        payload:response.data
    })  
}


export const addNewProducts=(product)=>async(dispatch)=>{
    const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
    const response=await axios.post(`http://localhost:8080/api/v1/product/new`,product,config)
    dispatch({
        type:'ADD_PRODUCT',
        payload:response.data
    })  
}