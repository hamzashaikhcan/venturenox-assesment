const { Kafka } = require('kafkajs');
const { processMessage } = require('./StreamManager');

/***************************
 * DO NOT CHANGE THIS FILE *
 ***************************/

const initConsumer = async () => {

	const kafka = new Kafka({
		clientId: 'social',
		brokers: ['kafka:9092']
	});

	const consumer = kafka.consumer({ groupId: 'social-consumer' });

	try {

		await consumer.connect();

		console.log('Connected');

		await consumer.subscribe({ topic: 'event_stream', fromBeginning: true });

		console.log('Subscribed');


		await consumer.run({
			eachMessage: async ({ message }) => {

				processMessage(JSON.parse(message.value.toString()));

			}
		});
	} catch (err) {
		console.log('Error ----->', err.message);
	}

};

module.exports = { initConsumer };
