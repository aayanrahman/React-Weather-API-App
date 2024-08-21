import axios from 'axios';

export async function getWeatherData(endpoint, place_id, measurementSystem) {
    const options = {
    method: 'GET',
    
    params: {
        place_id ,
        language: 'en',
        units: measurementSystem,
    },
    headers: {

    }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

