// VALIDATION
const Joi = require("joi");

// Register validation
const registerValidation = data => {
  const schema = {
    fisrt_Name: Joi.string()
    .min(6)
    .required(),
    last_Name: Joi.string()
      .min(6)
      .required(),
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required()
  };
  return Joi.validate(data, schema);
};

// Login validation
// const loginValidation = data => {
//   const schema = {
//     email: Joi.string()
//       .min(6)
//       .required()
//       .email(),
//     password: Joi.string()
//       .min(6)
//       .required()
//   };
//   return Joi.validate(data, schema);
// };

module.exports.registerValidation = registerValidation;
// module.exports.loginValidation = loginValidation;
