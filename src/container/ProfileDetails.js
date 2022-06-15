import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProfileSchema } from "../constants/schema";
import { useGlobalContext } from "../context/context";
import Input from "../components/input/input";

import "./styles.css";

function ProfileDetails() {
  const { steps, setSteps, setValues,details } = useGlobalContext();
  const Error = ({ errors }) => (
    <div style={{ color: "red" }}>{errors ? errors.message : " "}</div>
  );
  // const regexPattern = "^[a-zA-Z ]+$";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProfileSchema),
  });
  const onSubmit = (data) => {
    console.log(details)
    setValues(data);
    alert(JSON.stringify(data));
    setSteps(steps+1);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 style={{ color: "white" }}>ProfileDetails-</h1>
        <Input
          label="Place Of birth :"
          reg={register("birthPlace")}
          type="text"
          placeHolder="Enter Your Place Of birth"
        />
        <Error errors={errors.birthPlace} />

        <Input
          label="Age :"
          reg={register("age")}
          type="number"
          placeHolder="Enter Your Age"
        />
        <Error errors={errors.age} />

        <Input
          label="Company name:"
          reg={register("companyName", {
            onChange: (e) => {
              console.log(e.target.value);
            },
          })}
          type="text"
          placeHolder="Enter Your Company Name"
        />
        <Error errors={errors.companyName} />

        <Input
          label="Enter Your current City :"
          reg={register("city")}
          type="text"
          placeHolder="Enter Your Website"
          regexPattern="^[a-zA-Z ]+$"
        />
        <Error errors={errors.city} />
        <button type="submit">continue</button>
      </form>
    </>
  );
}

export default ProfileDetails;
