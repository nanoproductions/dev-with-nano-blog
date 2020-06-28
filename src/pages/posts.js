import React from "react";
import Layout from "../components/layout/Layout";
import LatestPosts from "../components/LatestPosts";
import AllPosts from "../components/AllPosts";

const Posts = () => {
  return (
    <Layout>
      <h1>Posts Page</h1>
      <AllPosts />
    </Layout>
  );
};

export default Posts;
