import axios from "axios"

const baseUrl = 'https://rickandmortyapi.com/api';

export const getCharacters = async (page ) => {
    try {
        const response = await axios.get(`${baseUrl}/character?page=${page}`)

        if (!response || !response.data) {
            throw new Error(`Invalid getMovies response data for page: ${page}`);
        }
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

export const getCharacterDetails = async (characterId) => {
    try {
        const response = await axios.get(`${baseUrl}/character/${characterId}`);

        if (!response || !response.data) {
            throw new Error(`Invalid response for getting character's details with id: ${characterId}`);
        }
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

export const getCharactersByStatus = async (status='alive',page=1) => {
    try{
        const response = await axios.get(`${baseUrl}/character?status=${status}&page=${page}`);
        if (!response || !response.data) {
            throw new Error(`Invalid response for filtering by status: ${status}`);
        }
        return response.data;
        

    }catch(error){
        console.log(error);
    }
}