import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import Layout from "@/components/layout/Layout";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import styles from "@/styles/Auth.module.css";
import { APP_NAME } from "@/utils/constants";

const LoginPage: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    // TODO: call authService.login(email, password)
    setIsLoading(false);
  };

  return (
    <>
      <Head>
        <title>Login | {APP_NAME}</title>
      </Head>
      <Layout>
        <div className={styles.container}>
          <div className={styles.card}>
            <h1 className={styles.title}>Login</h1>
            <form onSubmit={handleSubmit}>
              <Input
                id="email"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit" isLoading={isLoading}>
                Login
              </Button>
            </form>
            <p className={styles.footerText}>
              Don&apos;t have an account? <Link href="/register">Register</Link>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LoginPage;
