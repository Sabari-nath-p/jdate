import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import styles from "@/styles/Home.module.css";
import { APP_NAME } from "@/utils/constants";
import type { User } from "@/types";

interface ProfileProps {
  user: User | null;
}

const ProfilePage: NextPage<ProfileProps> = ({ user }) => {
  return (
    <>
      <Head>
        <title>Profile | {APP_NAME}</title>
      </Head>
      <Layout>
        <div className={styles.page}>
          <h1>Profile</h1>
          <p>{user ? user.name : "No user loaded"}</p>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<ProfileProps> = async () => {
  // TODO: fetch the authenticated user's profile from the API

  return {
    props: {
      user: null,
    },
  };
};

export default ProfilePage;
