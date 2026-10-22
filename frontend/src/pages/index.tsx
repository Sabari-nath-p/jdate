import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import styles from "@/styles/Home.module.css";
import { APP_NAME } from "@/utils/constants";

interface HomeProps {
  serverTime: string;
}

const Home: NextPage<HomeProps> = ({ serverTime }) => {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content={`${APP_NAME} web application`} />
      </Head>
      <Layout>
        <div className={styles.page}>
          <h1>Welcome to {APP_NAME}</h1>
          <p>Rendered on the server at {serverTime}</p>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  return {
    props: {
      serverTime: new Date().toISOString(),
    },
  };
};

export default Home;
