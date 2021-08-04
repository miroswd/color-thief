const { Router } = require('express');
const multer = require('multer');

const { uploadConfig } = require('../config');
const { DomainColorsService } = require('../services');

const routes = Router();
const upload = multer(uploadConfig);
routes.post('/image', upload.single('image'), DomainColorsService);

module.exports = routes;
