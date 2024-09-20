const axios = require('axios')

exports.answer = async (q) => {
    try {
        const response = await axios.post('https://40b7-35-204-64-142.ngrok-free.app/predict', {
            input_text: q
        });

        return response.data
    } catch (error) {
        console.error("Error getting Answer", error);
        return {
            error: `An error occurred\n${error.message}`
        }
    }
}