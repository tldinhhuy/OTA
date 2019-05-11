const express = require('express');
const bodyParser = require('body-parser');

const updateDeviceService =  require('./updateDevice/service');

const app = express();

app.use(bodyParser.json());
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
app.post('/update/device', updateDeviceService.update )

app.listen(3000, () => {
    console.log('Server started')
})