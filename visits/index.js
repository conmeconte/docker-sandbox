const express = require('express');
const redis = require('redis');
const process = require('process'); 

const app = express(); 
const client = redis.createClient({
  host: 'redis-server', //if not docker, but regular server, you would put http url. host name in docker-compose file as container name
  port: 6379 //default redis port, not need to put
}); 
client.set('visits', 0); 

app.get('/', (req, res) => {
  process.exit(0); // 0 - exit status code everything is ok. 1,2,3,etc we exited because something went wrong
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits); 
    client.set('visits', parseInt(visits) + 1)
  });
});

app.listen(8081, () => {
  console.log('Listening on port 8081')
})