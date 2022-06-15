import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserSchema } from "../constants/schema";
import { useGlobalContext } from "../context/context";
import { regexStrings } from "../constants/constant";

import "./styles.css";
import Input from "../components/input/input";
import Select from "../components/select/select";
import userEvent from "@testing-library/user-event";

function UserDetails() {
  const { setSteps,steps,setValues } = useGlobalContext();
  const { regexOnlyLetters } = regexStrings;

  const option = [
    "React js",
    "Java",
    "software testing",
    "React Native",
    "Node Js",
    "Angular Js",
  ];
  const Error=({ errors })=><div style={{ color: "red" }}>{errors ? errors.message : " "}</div>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UserSchema),
  });

  const onSubmit = (data) => {
    setValues(data)
    alert(JSON.stringify(data));
    setSteps(steps+1);
  };


//   const handleChange = (e) => {
//     if (new RegExp(regexPattern).test(e.target.value)) {
//       return e.target.value;
//     } else {
//       return (e.target.value = "");
//     }
//   };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 style={{ color: "white" }}>UserDetails</h1>
        <Input
          label="Full Name :"
          reg={register("fullName")}
          type="text"
          placeHolder="Enter Your Full Name"
          regexPattern={regexOnlyLetters}
        />
        <Error errors={errors.fullName} />

        <Input
          label="Mobile Number :"
          reg={register("mobileNumber")}
          type="number"
          placeHolder="Enter Your Mobile Number"
        />
        <Error errors={errors.mobileNumber} />

        <Input
          label="Email Id :"
          reg={register("email")}
          type="email"
          placeHolder="Enter Your email"
        />
        <Error errors={errors.email} />

        <Select
          reg={register("sub")}
          options={option}
          label="What is your course ?"
        />
        <Error errors={errors.sub} />

        <Input
          label="Enter Your WebSite :"
          reg={register("url")}
          type="url"
          placeHolder="Enter Your Website"
        />
        <Error errors={errors.url} />
      <button type="submit">continue</button>
    </form>
  );
}

export default UserDetails;
