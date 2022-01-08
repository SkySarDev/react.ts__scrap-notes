import React, { FC, ReactElement, useState } from "react";
import { Link } from "react-router-dom";

import { AppRoutes } from "constants/AppRoutes";
import { IUserInfo } from "types/usersTypes";

import Input from "components/Input";

interface IRegistrationViewProps {
  loading: boolean;
  error: string | null;
  submitRegistrationForm: (arg: IUserInfo) => void;
}

const RegistrationView: FC<IRegistrationViewProps> = ({
  loading,
  error,
  submitRegistrationForm,
}): ReactElement => {
  const initState = {
    email: "",
    login: "",
    password: "",
  };
  const [formData, setFormData] = useState(initState);

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    submitRegistrationForm(formData);
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
            placeholder="Login"
            name="login"
            value={formData.login}
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
          <button>Регистрация</button>
        </div>
      </form>
      Уже есть аккаунт? <Link to={AppRoutes.LOGIN}>Войти</Link>
    </>
  );
};

export default RegistrationView;
