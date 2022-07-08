import Head from "next/head";
import React from "react";
import Clients from "../components/Clients/Clients";
import Main from "../components/Main/Main";
import Projects from "../components/Projects/Projects";
import Register from "../components/Register/Register";

function Home() {
  return (
    <>
    <Head>
      <title>Pagina inicial</title>
    </Head>
      <Main />
      <Projects />
      <Clients />
      <Register />
    </>
  );
}

export default Home;
