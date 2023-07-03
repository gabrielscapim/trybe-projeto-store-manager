const checkRequiredFields = (receivedFields, requiredFields) => {
    for (let index = 0; index < requiredFields.length; index += 1) {
      const currentField = requiredFields[index];
      if (!(currentField in receivedFields)) {
        return `"${currentField}" is required`;
      }
    }
  };
  
  module.exports = checkRequiredFields;