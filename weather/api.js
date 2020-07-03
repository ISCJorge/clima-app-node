const axios = require('axios').default;

const apiKey = '692952f7e1d43a1ec42854fe695fdcc0';

const getWeather = async(city) => {
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
}

module.exports = {
    getWeather
}