const getColors = require('get-image-colors');

const path = require('path');
const fs = require('fs');

/**
 * @function DomainColorService
 * @param {Object} req
 * @param {Object} req.file
 * @param {Object} res
 * @returns {Number[]}
 */
const DomainColorsService = (req, res) => {
  try {
    const { path: filepath } = req.file;

    const rgb = [];
    getColors(path.join(filepath)).then((colors) => {
      colors.map((color) => rgb.push(color._rgb._unclipped));
    });

    setTimeout(() => {
      if (rgb.length === 0) throw new Error('RGB is empty');

      fs.unlinkSync(filepath);
      return res.status(200).json(rgb);
    }, 500);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = DomainColorsService;
