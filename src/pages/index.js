import React from "react";
import Layout from "../components/layout/Layout";
import Showcase from "../components/layout/Showcase";
import LatestPosts from "../components/LatestPosts";
import { Helmet } from "react-helmet";
import EmailAdd from "../components/EmailAdd";

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Dev with Nano</title>
      </Helmet>
      <Showcase />
      <LatestPosts />
      <EmailAdd />
    </Layout>
  );
};
