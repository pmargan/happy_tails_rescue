let multer = require('multer')
let Datauri = require('datauri')
let path = require('path')

const storage = multer.memoryStorage()
const multerUploads = multer({ storage }).array('images')
const dUri = new Datauri()
/**
* @description This function converts the buffer to data url
* @param {Object} req containing the field object
* @returns {String} The data url from the string buffer
*/
const dataUri = file => dUri.format(path.extname(file.originalname).toString(), file.buffer)

exports.multerUploads = multerUploads
exports.dataUri = dataUri