const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const API_KEY = 'eW0xkCGocjeY2SVuICWoL7ppOvzGQjWv';

app.get('/api/nyt/:year/:month', async (req, res) => {
  try {
    const { year, month } = req.params;
    
    // Запрос к NYT API
    const response = await axios.get(
      `https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=${API_KEY}`,
    );
    
    // Возвращаем все новости
    res.json({
      response: {
        docs: response.data.response.docs,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при запросе к NYT API' });
  }
});

const PORT = 3003;
app.listen(PORT, () => console.log(`CORS-прокси запущен на порту ${PORT}`));