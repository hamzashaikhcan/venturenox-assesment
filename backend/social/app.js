// const express = require('express');
// // const { initConsumer } = require('./utilities/consumer');

// const { initProducer } = require('./utilities/producer');

// // const { connectConsumer } = require('./utilities/consumer');
// // const { connectProducer, connectAdmin } = require('./utilities/producer');
// // const KeyMaster = require('./utilities/KeyMaster');
// // const databaseConfig = require('./database/DatabaseConfig');

// const app = express();

// // const user = require('./controllers/user.controller');
// // const tenant = require('./controllers/tenant.controller');

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // app.use(databaseConfig.initializeDB());


// app.get('/', (req, res)=>{
// 	res.send('Working fine');
// });

// // app.use('/user', user);
// // app.use('/tenant', tenant);
// // app.get('*', (req, res)=>{

// // 	res.status(400).json({
// // 		code: 'fail',
// // 		message: 'Invalid request, Please visit /user or /tenant'
// // 	});
	
// // });


// app.listen(process.env.PORT || 5000, async () => {
	
// 	console.log('App started at port', process.env.PORT || 5000);
// 	// try {
// 	// 	await initProducer();
// 	// } catch (err) {
// 	// 	console.log(err);
// 	// }

// });


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


const users = require('./database/user_queries');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(databaseConfig.initializeDB());

// app.use('/', async (req, res) => {

// 	res.status(400).json({
// 		code: 'fail',
// 		message: 'Invalid request, Please visit /user or /tenant'
// 	});

// });

// app.use('/user', async (req, res) => {

// 	try{
// 		users.getUsers().then((result) => {
// 			res.json(result);
// 		});
// 	}
// 	catch (err){
// 		res.status(400).json({
// 			code: 'fail',
// 			message: err
// 		});
// 	}
    
// });

app.use('/user', user);

app.listen(process.env.PORT || 4000, async () => {
	
	console.log('App started at port', process.env.PORT || 4000);
	await initProducer();

});