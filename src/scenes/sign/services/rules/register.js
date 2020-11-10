export const requiredFieldRule = () => ({
  required: true,
  message: "field is required",
});

export const usernameRule = () => ({
  pattern: new RegExp(/^[0-9a-zA-Z_]*$/),
  message: "only contain a-z , 0-9",
});

export const passwordRule = () => ({});
