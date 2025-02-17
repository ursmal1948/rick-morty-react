import rmdb from "./rmdb";

export const getCharacters = async (page) => {
  try {
    const url = `character?page=${page}`;
    const response = await rmdb.get(url);

    if (!response || !response.data) {
      throw new Error(`Invalid getCharacters response data for page`);
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCharacterDetails = async (characterId) => {
  try {
    const url = `character/${characterId}`;
    const response = await rmdb.get(url);

    if (!response || !response.data) {
      throw new Error(
        `Invalid response for getting character's details with id: ${characterId}`
      );
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCharactersByStatus = async (status, page) => {
  try {
    const url = `character?status=${status}&page=${page}`;
    const response = await rmdb.get(url);

    if (!response || !response.data) {
      throw new Error(`Invalid response for filtering by status: ${status}`);
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};
