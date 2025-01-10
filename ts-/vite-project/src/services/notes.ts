import axios from "axios"

export const fetchWalks = async () => {
    try{
        var response = await axios.get("https://localhost:7087/api/products")
        
        return response.data
    }catch(e){
        console.error(e)
    }
}


interface Product {
    name: string;
    description: string;
    price: number;
  }
  
  export const createProduct = async (product: Product): Promise<number | undefined> => {
    try {
      const response = await axios.post("https://localhost:7087/api/products", product);
      return response.status;
    } catch (e) {
      console.error(e);
    }
  };