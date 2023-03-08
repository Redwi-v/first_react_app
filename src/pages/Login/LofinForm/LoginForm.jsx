import style from "./loginForm.module.css";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { login } from "../../../redux/auth_reduser";
import { Navigate } from "react-router-dom";

const LoginForm = ({ login, isAuth }) => {
  console.log(isAuth);
  if (isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    // <form action=''>
    // 	<input plaseholder='login' type='text' />
    // 	<input plaseholder='login' type='password' />
    // 	<input type='checkbox' /> remember
    // 	<button type='submit'>send</button>
    // </form>

    <Formik
      initialValues={{ email: "", password: "", rememberMe: false }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        } else if (!values.password) {
          errors.password = "Required";
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting, setFieldError }) => {
        const errors = await login(
          values.email,
          values.password,
          values.rememberMe
        );
        setSubmitting(false);
        errors && setFieldError("general", errors);
      }}
    >
      {({ isSubmitting, errors, touched }) => {
        return (
          <Form>
            <ErrorMessage error={errors.general} />

            <div className={style.field}>
              <Field className={style.input} type="text" name="email" />
              <ErrorMessage touched={touched.email} error={errors.email} />
            </div>
            <div className={style.field}>
              <Field className={style.input} type="password" name="password" />
              <ErrorMessage
                touched={touched.password}
                error={errors.password}
              />
            </div>

            <div className={style.rememberMe}>
              <Field
                className={style.checkBox}
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
              />
              <label className={style.rememberMeLable} htmlFor="rememberMe">
                Запомнить меня
              </label>
            </div>

            <button
              className={style.sendBtn}
              type="submit"
              disabled={isSubmitting}
            >
              Войти
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

const ErrorMessage = ({ touched = true, error }) => {
  return touched && error ? (
    <div className={style.error} name="email" component="div">
      {error}
    </div>
  ) : null;
};

const mapSateToProps = (state) => {
  return {
    isAuth: state.authReduser.isAuth,
  };
};

export default connect(mapSateToProps, { login })(LoginForm);
