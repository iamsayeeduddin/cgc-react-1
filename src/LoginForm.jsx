import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (values) => {
    let payload = {};
    payload.email = values.email;
    payload.password = values.password;
    setLoading(true);
    axios
      .post(import.meta.env.VITE_API_BASE_URL + "api/v1/users/login", payload, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))?.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
        if (res.data.success) {
          localStorage.setItem("user", JSON.stringify(res.data.data));
          navigate("/");
        }
      })
      .catch((err) => alert(err.response.data.message))
      .finally(() => setLoading(false));
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        // image: null,
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email!").required("Email is Mandatory!"),
        password: Yup.string().min(8, "Min 8 Char Required").max(10, "Max 10 Char Required").required("Password is Required"),
      })}
      onSubmit={(values) => {
        handleLogin(values);
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <Field
              name="email"
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
            />
            <div className="text-sm text-red-500">
              <ErrorMessage name="email" />
            </div>
          </div>
          <div className="mb-5">
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setFieldValue("password", e.target.value)}
              value={values.password}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <div className="text-sm text-red-500">
              <ErrorMessage name="password" />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={
              "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " +
              (loading ? "animate-pulse" : "")
            }
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
