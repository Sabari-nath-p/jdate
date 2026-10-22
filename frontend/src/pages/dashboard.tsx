import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import styles from "@/styles/Home.module.css";
import { APP_NAME, AUTH_TOKEN_KEY } from "@/utils/constants";

interface DashboardProps {
  isAuthenticated: boolean;
}

const DashboardPage: NextPage<DashboardProps> = ({ isAuthenticated }) => {
  return (
    <>
      <Head>
        <title>Dashboard | {APP_NAME}</title>
      </Head>
      <Layout>
        <div className={styles.page}>
          <h1>Dashboard</h1>
          <p>Authenticated: {String(isAuthenticated)}</p>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<DashboardProps> = async ({ req }) => {
  const token = req.cookies[AUTH_TOKEN_KEY];

  // TODO: redirect to /login when there is no valid token

  return {
    props: {
      isAuthenticated: Boolean(token),
    },
  };
};

export default DashboardPage;
