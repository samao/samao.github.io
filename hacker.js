const axios = require('axios');

axios.get('https://next.youtu.tv/api/start').then(res => {
    console.log(res.data)
}).catch(reason => console.log(reason));
