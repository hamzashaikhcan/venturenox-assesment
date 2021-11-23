const { Kafka } = require('kafkajs');
const { initConsumer } = require('./consumer');
const faker = require('faker');

/***************************
 * DO NOT CHANGE THIS FILE *
 ***************************/

const initProducer = async () => {

	const kafka = new Kafka({
		clientId: 'social',
		brokers: ['kafka:9092']
	});

	const admin = kafka.admin();
	const producer = kafka.producer();

	try {

		await admin.connect();

		await admin.createTopics({
			validateOnly: false,
			waitForLeaders: false,
			topics: [
				{ topic: 'event_stream' },
			]
		});

		await producer.connect();

		var tenantIds = [];

		Array.from(Array(10)).map(async () => {
			tenantIds.push(faker.datatype.number({ min: 100000, max: 999999 }));
		});

		tenantIds.map(async (id) => {

			await producer.send({
				topic: 'event_stream',
				messages: [
					{
						timestamp: Date.now(),
						key: 'data_stream',
						value: JSON.stringify({
							event_name: 'tenant_created',
							properties: {
								id: id,
								name: faker.company.companyName(),
								address: faker.address.streetAddress(),
								city: faker.address.city(),
								state: faker.address.state(),
								country: faker.address.country(),
								zip_code: faker.address.zipCode(),
								phone: faker.phone.phoneNumber(),
								web_url: faker.internet.domainName()
							}
						}),
					}
				],

			});

		});

		tenantIds.map(async (id) => {

			await producer.send({
				topic: 'event_stream',
				messages: [
					{
						timestamp: Date.now(),
						key: 'data_stream',
						value: JSON.stringify({
							event_name: 'user_created',
							properties: {
								id: faker.datatype.number({ min: 100000, max: 999999 }),
								first_name: faker.name.firstName(),
								last_name: faker.name.lastName(),
								department: faker.lorem.word(),
								designation: faker.lorem.word(),
								tenant_id: id,
								image_url: faker.random.image(),
								city: faker.address.city(),
								country: faker.address.country(),
								bio: faker.lorem.sentence(),
								social_links: {facebook: 'https://facebook.com/'},
								employee_id: faker.datatype.number(),
							}
						}),
					}
				],

			});

		});

		await initConsumer();


	} catch (err) {
		console.log('Error ---->', err.message);
	}

};

module.exports = { initProducer };