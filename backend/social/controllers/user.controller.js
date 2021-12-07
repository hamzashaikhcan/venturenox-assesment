const express = require('express');
const router = express.Router();

const users = require('../database/user_queries');

const isValidId = (req, res, next) => {

	if (!isNaN(req.params.id)){
		return next();
	}
	else {
		res.status(400).json({
			code: 'fail',
			message: 'Invalid ID'
		});
	}
};
  
const validateUser = (user) => {

	let response = false;

	// CHECKING USER DATA
	const hasFirstName = typeof user.first_name == 'string' && user.first_name.trim() != '';
	const hasLastName = typeof user.last_name == 'string' && user.last_name.trim() != '';
	const hasDepartment = typeof user.department == 'string' && user.department.trim() != '';
	const hasDesignation = typeof user.designation == 'string' && user.designation.trim() != '';
	const hasTenantID = typeof user.tenant_id == 'string' && user.tenant_id.trim() != '';
	const hasImageUrl = typeof user.image_url == 'string' && user.image_url.trim() != '';
	const hasCity = typeof user.city == 'string' && user.city.trim() != '';
	const hasCountry = typeof user.country == 'string' && user.country.trim() != '';
	const hasBio = typeof user.bio == 'string' && user.bio.trim() != '';
	const hasEmployeeId = typeof user.employee_id == 'string' && user.employee_id.trim() != '';


	if( 
		hasFirstName && 
		hasLastName && 
		hasDepartment && 
		hasDesignation && 
		hasTenantID && 
		hasImageUrl && 
		hasCity && 
		hasCountry && 
		hasBio && 
		hasEmployeeId
	){
		response = true;
	}
	return response;
};

router.post('/', async (req, res) => {

	if (validateUser(req.body)) {
		users.create(req.body).then((user) => {
			res.json(user[0]);
		});
	} else {
		res.status(401).json({
			code: 'error',
			message: 'Invalid request'
		});
	}

});

router.get('/', async (req, res) => {

	users.getUsers().then((result) => {
		res.json(result);
	});
    
});

router.get('/:id', isValidId, async (req, res) => {

	users.getOne(req.params.id).then((user) => {
		res.json(user);
	});

});

router.delete('/:id', isValidId, async (req, res) => {

	users.delete(req.params.id).then(() => {
		res.json({ deleted: true });
	});

});

router.patch('/:id', isValidId, async (req, res) => {

	if (validateUser(req.body)) {
		users.update(req.params.id, req.body).then((user) => {
			res.json(user[0]);
		});
	} else {
        res.status(400).json({
            code: 'fail',
            message: 'Invalid request'
        });
	}

});


module.exports = router;