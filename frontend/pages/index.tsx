import React, { Component, useReducer } from "react";
import Head from "next/head";
import DropZone from "../components/DropZone";
import styles from "../styles/Home.module.css";

import { Button } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

export default function Home() {


return (
    <div className={styles.container}>
        <Head>
            <title>The Build Network</title>
            <meta name="description" content="The Build Network" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <Button />
        </main>

        <footer className={styles.footer}>
            <div>{new Date().getFullYear()}</div>
        </footer>
    </div>
    );
}