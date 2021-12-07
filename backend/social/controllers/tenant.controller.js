const express = require('express');
const router = express.Router();

const tenants = require('../database/tenant_queries');


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

	// CHECKING TENANT DATA
	const hasTenant_Name = typeof user.tenant_name == 'string' && user.tenant_name.trim() != '';
	const hasTenantState = typeof user.state == 'string' && user.state.trim() != '';
	const hasZipCode = typeof user.zip_code == 'string' && user.zip_code.trim() != '';
	const hasPhone = typeof user.phone == 'string' && user.phone.trim() != '';
	const hasWebURL = typeof user.web_url == 'string' && user.web_url.trim() != '';

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
		hasEmployeeId && 
		hasTenant_Name && 
		hasTenantState && 
		hasZipCode && 
		hasPhone && 
		hasWebURL 
	){
		response = true;
	}
	return response;
};

router.post('/', async (req, res) => {

	try{
		if (validateUser(req.body)) {
			tenants.create(req.body).then((social) => {
				res.json(social[0]);
			});
		} else {
			res.status(401).json({
				code: 'error',
				message: 'Invalid social'
			});
		}
	}
	catch(err){
		return err;
	}

});

router.get('/', async (req, res) => {

	try{
		tenants.getAll().then((result) => {
			res.json(result);
		});
	}
	catch(err){
		return err;
	}
    
});

router.get('/tenants', async (req, res) => {

	try{
		tenants.getAll().then((result) => {
			res.json(result);
		});
	}
	catch(err){
		return err;
	}
    
});

router.get('/:id', isValidId, async (req, res) => {

	try{
		tenants.getOne(req.params.id).then((social) => {
			res.json(social);
		});
	}
	catch(err){
		return err;
	}

});

router.delete('/:id', isValidId, async (req, res) => {

	try{
		tenants.delete(req.params.id).then(() => {
			res.json({ deleted: true });
		});
	}
	catch(err){
		return err;
	}

});

router.patch('/:id', isValidId, async (req, res) => {

	try{
		if (validateUser(req.body)) {
			tenants.update(req.params.id, req.body).then((social) => {
				res.json(social[0]);
			});
		} else {
			res.status().json({
				code: 'fail',
				message: 'Invalid social'
			});
		}
	}
	catch(err){
		return err;
	}

});


module.exports = router;