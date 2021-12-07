const tenant = require('../database/tenant_queries');
const user = require('../database/user_queries');

const processMessage = async (kafkaMessage) => {

	//Start working here
	console.clear();

	if( kafkaMessage.event_name === 'user_created' ){
		console.log('New User Information');
		user.create(kafkaMessage.properties).then((user) => {
			console.log(user[0]);
		});
	}
	else if( kafkaMessage.event_name === 'tenant_created' ){
		console.log('New Tenant Information');
		tenant.create(kafkaMessage.properties).then((tn) => {
			console.log(tn[0]);
		});
	}

};

module.exports = { processMessage };

