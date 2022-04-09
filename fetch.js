const axios = require('axios');


axios.request({
        method: 'POST',
        url: 'https://v2.jokeapi.dev/jo121564654Any',
        params: {
            'safe-mode' : true
        },
        data: {

        }
    })
    .then(response => {
        console.log(JSON.stringify(response.data, null, 4));
    })
    .catch(response => {
        console.error(response);
    })
