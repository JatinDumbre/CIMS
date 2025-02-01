//use the command for installation of react-hook-form
//npm install react-hook-form
import { useForm } from "react-hook-form";
import "../../styles/LoginForm.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../slice";
import Footer from "../Admin/Footer";

function LoginForm() {
  const [resp, setResp] = useState();
  const reduxAction = useDispatch();

  const loginfunc = async (logindetail) => {
    await fetch("http://localhost:8032/login", {
      method: "POST",
      body: JSON.stringify(logindetail),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error("Server Error");
        }
      })
      .then((text) => (text.length ? JSON.parse(text) : {}))
      .then((obj) => {
        if (Object.keys(obj).length === 0) {
          setResp("Wrong id/password");
        } else {
          reduxAction(login());
          localStorage.setItem("loggedUser", JSON.stringify(obj));
          if (obj.acc_id.acc_id === 1) {
            navigate("/admin");
          } else if (obj.acc_id.acc_id === 2) {
            navigate("/director");
          } else if (obj.acc_id.acc_id === 3) {
            navigate("/ipmanager");
          } else if (obj.acc_id.acc_id === 4) {
            navigate("/projectmanager");
          } else if (obj.acc_id.acc_id === 5) {
            navigate("/siteoperator");
          }
        }
      })
      .catch((error) => alert("Server Error ! Try after some time"));
  };

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginfunc(data);
  };

  return (
    <div>
      <div
        className="container-fluid d-flex flex-column justify-content-center align-items-center  login"
        style={{
          height: "85vh",
        }}
      >
        <div
          className="card "
          style={{
            background: "rgba(0,0 ,0 , 0.5)",
            maxWidth: "600px",
            minWidth: "400px",
          }}
        >
          <h1
            className="text-center pt-3"
            style={{
              color: "white",
              fontSize: "30px",
            }}
          >
            <b>Login</b>
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-3 pb-2">
              <label className="form-label" style={{ color: "white" }}>
                <b>Email Id</b>
              </label>
              <input
                className={
                  errors.email ? "email-error form-control" : "form-control"
                }
                type="text"
                name="email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Za-z0-9_.-]{3,10}@gmail.com$/,
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <p className="error-msg"> Email is required </p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p className="error-msg"> Email is invalid </p>
              )}
            </div>
            <div className="p-3 pb-2">
              <label className="form-label" style={{ color: "white" }}>
                <b>Enter password</b>
              </label>
              <input
                className={
                  errors.password
                    ? "password-error form-control"
                    : "form-control"
                }
                type="password"
                name="password"
                {...register("password", {
                  required: true,
                  pattern: /^[A-Za-z0-9*%$_.-]{8,12}$/,
                })}
              />
              {errors.password && errors.password.type === "required" && (
                <p className="error-msg"> Password is required </p>
              )}
              {errors.password && errors.password.type === "pattern" && (
                <p className="error-msg"> Password is invalid </p>
              )}
            </div>

            <div className="p-3 pb-2">
              <button
                className="btn btn-primary w-100 "
                style={{ background: "orange", border: "0" }}
              >
                Login
              </button>
            </div>
          </form>
          <p style={{ color: "red", marginLeft: "25px" }}>{resp}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default LoginForm;
