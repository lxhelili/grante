var express = require('express');
var multer = require('multer');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'Plutio_SECRET',
  userProperty: 'payload'
});

var authController = require('../controllers/authentication');
var grantsController = require('../controllers/grants');
var applicationsController = require('../controllers/applications');
var getGrantsController = require('../controllers/users');



// authentication
router.post('/register', authController.register);
router.post('/login', authController.login);

router.post('/grants', auth, grantsController.addGrant);
router.get('/grants', auth, getGrantsController.getGrants);
router.get('/public/grants', getGrantsController.getClientGrants);
router.delete('/grante/:granteId', auth, getGrantsController.fshiGrante);

router.get('/aplikantet', auth, getGrantsController.getAplikantet);

router.post('/applications/:aplicationId', applicationsController.addApplication);
router.get('/applications/:aplicationId', applicationsController.getApplication);

module.exports = router;
