import React, { FC, ReactElement } from "react";

import { useAuthQuery } from "services/api/usersApi";

import HeaderContainer from "containers/HeaderContainer";
import Layout from "components/Layout";
import PopupNotice from "components/UI/PopupNotice";
import LoadingSpinner from "components/UI/LoadingSpinner";
import AppRouter from "components/AppRouter";

const App: FC = (): ReactElement => {
  const { data, isLoading, refetch } = useAuthQuery();

  return (
    <>
      <HeaderContainer user={data?.login} isLoading={isLoading} />

      <Layout>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <AppRouter data={data} refetchAuth={refetch} />
        )}
      </Layout>

      <PopupNotice />
    </>
  );
};

export default App;
