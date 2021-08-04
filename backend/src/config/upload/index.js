const multer = require('multer');
const crypto = require('crypto');
const { resolve } = require('path');

const tmpFolder = resolve(__dirname, '..', '..', '..', 'temp', 'images');

module.exports = {
  directory: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');

      const filename = `${fileHash}-${file.originalname}`;

      return callback(null, filename);
    },
  }),
};
