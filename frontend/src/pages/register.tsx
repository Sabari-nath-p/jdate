import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import Layout from "@/components/layout/Layout";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import styles from "@/styles/Auth.module.css";
import { APP_NAME } from "@/utils/constants";

const RegisterPage: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    // TODO: call authService.register(name, email, password)
    setIsLoading(false);
  };

  return (
    <>
      <Head>
        <title>Register | {APP_NAME}</title>
      </Head>
      <Layout>
        <div className={styles.container}>
          <div className={styles.card}>
            <h1 className={styles.title}>Create an account</h1>
            <form onSubmit={handleSubmit}>
              <Input
                id="name"
                label="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
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
                Register
              </Button>
            </form>
            <p className={styles.footerText}>
              Already have an account? <Link href="/login">Login</Link>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default RegisterPage;
