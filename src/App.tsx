import React, { FC, ReactElement } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { AppRoutes } from "constants/AppRoutes";
import { useAuthQuery } from "services/api/usersApi";

import HeaderContainer from "containers/HeaderContainer";
import RegistrationContainer from "containers/RegistrationContainer";
import LoginContainer from "containers/LoginContainer";
import Loading from "views/Loading";
import Layout from "components/Layout";
import NotesView from "views/NotesView";

import "./App.css";

const App: FC = (): ReactElement => {
  const { data, isLoading, refetch } = useAuthQuery();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <div style={{ marginTop: 20 }}>
        <Layout>
          <HeaderContainer user={data?.login} />

          <Routes>
            {data ? (
              <>
                <Route path={"/"} element={<NotesView />} />
                <Route path="*" element={<Navigate to={"/"} />} />
              </>
            ) : (
              <>
                <Route
                  path={AppRoutes.REGISTRATION}
                  element={<RegistrationContainer refetchAuth={refetch} />}
                />
                <Route
                  path={AppRoutes.LOGIN}
                  element={<LoginContainer refetchAuth={refetch} />}
                />
                <Route path="*" element={<Navigate to={AppRoutes.LOGIN} />} />
              </>
            )}
          </Routes>
        </Layout>
      </div>
    </div>
  );
};

export default App;
