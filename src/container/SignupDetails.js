import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserSchema } from "../constants/schema";
import { useGlobalContext } from "../context/context";

import "./styles.css";
import Input from "../components/input/input";

function SignupDetails() {
  const { setSteps, setValues,steps,details} = useGlobalContext();
  
  function Error({ errors }) {
    return <div style={{ color: "red" }}>{errors ? errors.message : " "}</div>;
  }

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    // resolver: yupResolver(UseSchema),
  });
  const onSubmit = (data) => {
    console.log(details)
    setValues(data);
    alert(JSON.stringify(data));
    setSteps(steps+1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 style={{ color: "white" }}>SignupDetails</h1>
        <Input
          label="Username :"
          reg={register("username")}
          type="text"
          placeHolder="Enter the UserName"
        />
        {/* <Error errors={errors.fullName} /> */}

        <Input
          label="Password :"
          reg={register("password")}
          type="text"
          placeHolder="Enter Your Password"
        />
        {/* <Error errors={errors.mobileNumber} /> */}

        <Input
          label="Confirm Password :"
          reg={register("cpassword")}
          type="text"
          placeHolder="Enter Your Confirm Password"
        />
        {/* <Error errors={errors.email} /> */}

        

      
      <button type="submit">continue</button>
    </form>
  );
}

export default SignupDetails;
