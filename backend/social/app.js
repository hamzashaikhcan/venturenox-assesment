const express = require('express');
// const { initConsumer } = require('./utilities/consumer');

const { initProducer } = require('./utilities/producer');

// const { connectConsumer } = require('./utilities/consumer');
// const { connectProducer, connectAdmin } = require('./utilities/producer');
// const KeyMaster = require('./utilities/KeyMaster');
// const databaseConfig = require('./database/DatabaseConfig');

const app = express();

const user = require('./controllers/user.controller');
const tenant = require('./controllers/tenant.controller');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(databaseConfig.initializeDB());


app.use('/user', user);
app.use('/tenant', tenant);
app.get('*', (req, res)=>{

	res.status(400).json({
		code: 'fail',
		message: 'Invalid request, Please visit /user or /tenant'
	});
	
});


app.listen(process.env.PORT || 5000, async () => {
	
	console.log('App started at port', process.env.PORT || 5000);
	await initProducer();

});