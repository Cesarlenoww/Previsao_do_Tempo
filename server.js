const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;

// Substitua pela sua chave da API do OpenWeatherMap
const API_KEY = '2b3784e4da3034d3a12d3da570d75d47';

app.use(express.static(path.join(__dirname, 'public')));

app.get('/weather', async (req, res) => {
    const { city } = req.query;

    if (!city) {
        return res.status(400).json({ error: 'Cidade é necessária' });
    }

    try {
        const response = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric', // Para obter a temperatura em Celsius
                lang: 'pt' // Para obter os dados em português
            }
        });

        const weatherData = response.data;
        const result = {
            city: weatherData.name,
            country: weatherData.sys.country,
            temperature: weatherData.main.temp,
            weather: weatherData.weather[0].description,
            humidity: weatherData.main.humidity,
            windSpeed: weatherData.wind.speed
        };

        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter dados do tempo' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
