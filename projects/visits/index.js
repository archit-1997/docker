const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();

//connection to the redis server
const client = redis.createClient({
	host: 'redis-server',
	//default port generally used with redis
	port: 6379,
});
client.set('visits', 0);

app.get('/', (req, res) => {
	process.exit(0);
	//get the client connection to the server to get the number of visits of the particular page
	client.get('visits', (err, visits) => {
		res.send('Number of visits is : ' + visits);
		client.set('visits', parseInt(visits) + 1);
	});
});

app.listen(8081, () => {
	console.log('Listening of port 8081...');
});
