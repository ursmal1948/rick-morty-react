import axios from "axios"

const baseUrl = 'https://rickandmortyapi.com/api';

export const getCharacters = async (page=1)=>{
    try {
        const response = await axios.get(`${baseUrl}/character?page=${page}`)

        if (!response || !response.data ){
            throw new Error("Invalid getMovies response data");
        }
        return response.data;
    }catch(error){
        console.error(error)
    }
}