// VALIDATION
const Joi = require("joi");

// Register validation
const registerValidation = data => {
  const schema = Joi.object({
    first_Name: Joi.string()
    .min(4)
    .required(),
    last_Name: Joi.string()
      .min(4)
      .required(),
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required()
  });
  return schema.validate(data);
};

//Login validation
const loginValidation = data => {
  const schema = Joi.object({
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required()
  });
  return schema.validate(data);
};

module.exports = {registerValidation, loginValidation};