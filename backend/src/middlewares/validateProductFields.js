const checkRequiredFields = require('../utils/checkRequiredFields');
const { EMPTY_STRING_REGEX } = require('../utils/regex');

const validateProductFields = (req, res, next) => {
    const { body } = req;
    const requiredFields = ['name'];

    const requiredFieldError = checkRequiredFields(body, requiredFields);
    
    if (requiredFieldError) {
        return res.status(400).json({ message: requiredFieldError });
    }
    
    if (body.name.replace(EMPTY_STRING_REGEX).length < 5) {
        return res.status(422).json(
            { message: '"name" length must be at least 5 characters long' },
        );
    }

    return next();
};

module.exports = validateProductFields;