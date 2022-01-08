import React, { FC } from "react";

interface IHeaderProps {
  user?: string;
  logout: () => void;
}

const Header: FC<IHeaderProps> = ({ user, logout }) => {
  return (
    <div>
      {user ? (
        <div>
          Привет, {user} <button onClick={logout}>Выйти</button>
        </div>
      ) : (
        <div>
          Привет, незнакомец! Пожалуйста, войдите или загеристрируйтесь.
        </div>
      )}
    </div>
  );
};

export default Header;
