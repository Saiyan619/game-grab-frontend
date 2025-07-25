import { useQuery } from "@tanstack/react-query";
import { ApiResponse, FilterParams, Product } from '@/types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetProducts = (filters: FilterParams = {}) => {
  const getProducts = async (): Promise<ApiResponse> => {
    const queryParams = new URLSearchParams();
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        queryParams.append(key, value.toString());
      }
    });
    
    const queryString = queryParams.toString();
    const url = `${API_BASE_URL}/api/products${queryString ? `?${queryString}` : ''}`;
    
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    
    if (!response.ok) {
      throw new Error("Product fetch failed");
    }
    
    return response.json();
  };

  const { data, isPending, error } = useQuery({
    queryKey: ["getAllProducts", filters],
    queryFn: getProducts
  });

  return { data, isPending, error };
};

export const useGetSingleProduct = (id:string | undefined) => {
  const getSingleProduct = async (): Promise<Product> => {
    const response = await fetch(`${API_BASE_URL}/api/products/${id}`, 
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )

    if (!response.ok) {
     throw new Error("Something went wrong");
      
    }
const data = await response.json();
    console.log("Fetched product:", data);
    return data;

    
  }

  const {data, isPending, error} = useQuery({
    queryKey: ["getSingleProduct", id],
    queryFn: getSingleProduct,
    enabled:!!id
  });

  return{data, isPending, error}
}


