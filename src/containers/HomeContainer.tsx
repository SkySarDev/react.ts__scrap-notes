import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import { useAuthQuery } from "services/authApi";
import { AppRoutes } from "constants/AppRoutes";

import Layout from "components/Layout";
import Loading from "views/Loading";
import NotesView from "views/NotesView";

const HomeContainer = () => {
  // const navigate = useNavigate();
  //
  // useEffect(() => {
  //   if (error) {
  //     return navigate(AppRoutes.LOGIN);
  //   }
  // }, [error]);

  return (
    <>
      <div></div>
      {/*{isLoading ? (*/}
      {/*  <Loading />*/}
      {/*) : (*/}
      {/*  <Layout login={data?.login}>*/}
      {/*    <NotesView />*/}
      {/*  </Layout>*/}
      {/*)}*/}
    </>
  );
};

export default HomeContainer;
