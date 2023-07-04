const checkRequiredFields = require('../utils/checkRequiredFields');
const { EMPTY_STRING_REGEX } = require('../utils/regex');

const validateProductFields = (req, res, next) => {
    const { body } = req;
    const requiredFields = ['name'];

    const requiredFieldError = checkRequiredFields(body, requiredFields);
    
    if (requiredFieldError) {
        return next({ statusCode: 400, message: requiredFieldError });
    }
    
    if (body.name.replace(EMPTY_STRING_REGEX).length < 5) {
        return next({ statusCode: 422,
            message: '"name" length must be at least 5 characters long' });
    }

    return next();
};

module.exports = validateProductFields;