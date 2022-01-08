import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

import { AppRoutes } from "constants/AppRoutes";
import { UserLoginInfo } from "types/usersTypes";

import Input from "components/Input";

interface ILoginProps {
  error: string | null;
  loading: boolean;
  submitLoginForm: (userInfo: UserLoginInfo) => void;
}

const Login: FC<ILoginProps> = ({ error, loading, submitLoginForm }) => {
  const initState = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initState);

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    submitLoginForm(formData);
    setFormData(initState);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
      <form onSubmit={onSubmitHandler}>
        <div style={{ marginBottom: 10 }}>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChangeHandler={onChangeHandler}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <Input
            type="password"
            placeholder="Пароль"
            name="password"
            value={formData.password}
            onChangeHandler={onChangeHandler}
          />
        </div>
        <div>
          <button>Войти</button>
        </div>
      </form>
      Нет аккаунта? <Link to={AppRoutes.REGISTRATION}>Регистрация</Link>
    </>
  );
};

export default Login;
