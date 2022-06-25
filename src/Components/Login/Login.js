import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import loginSchema from "./loginValidation";
import Error from "../Util/Error";
import SuccessMessage from "../Util/SuccessMessage";

function Login() {
  const [validLogin, setValidLogin] = useState(false);
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      setValidLogin(false);
      console.log(values);
      setValidLogin(true);
    },
  });
  return (
    <>
      {" "}
      {validLogin && <SuccessMessage message={"Successfully login"} />}
      <form
        className="flex flex-col space-y-4 items-center justify-center mx-auto border-2 border-blue-200 rounded-lg my-5 py-5 w-96"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="font-bold text-2xl text-violet-700"> Login </h1>{" "}
        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs input-info"
            {...formik.getFieldProps("email")}
          />{" "}
        </div>{" "}
        {formik.touched.email && formik.errors.email && (
          <Error errorMessage={formik.errors.email} />
        )}{" "}
        <div className="form-control w-full max-w-xs">
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs input-info"
            {...formik.getFieldProps("password")}
          />{" "}
        </div>{" "}
        {formik.touched.password && formik.errors.password && (
          <Error errorMessage={formik.errors.password} />
        )}{" "}
        <button type="submit" className="btn btn-primary">
          Login{" "}
        </button>{" "}
      </form>{" "}
    </>
  );
}

export default Login;
