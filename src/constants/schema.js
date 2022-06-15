import * as yup from "yup";

export const UserSchema = yup.object().shape({
  fullName: yup
    .string()
    .max(20, "Max 20 chars")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required("Please enter your full Name")
    .max(20, "Must be exactly 5 digits"),
  mobileNumber: yup.number().required().positive().integer(),
  email: yup
    .string()
    .email("Must be a valid email")
    .max(50)
    .required("Email is required"),
  sub: yup.string().required(),
  url: yup.string().url().required(),
});

export const ProfileSchema = yup.object().shape({
  birthPlace: yup
    .string()
    .required("Please enter your Birth Place")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .max(20, "Max 20 chars"),
  age: yup
    .string()
    .required("Please enter your age")
    .max(60, "You must be at most 60 years"),
  companyName: yup
    .string()
    .required("Please enter your Birth Place")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .max(20, "Max 10 chars"),
  city: yup
    .string()
    .required("Please enter your City Name")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .max(20, "Max 20 chars"),
});
