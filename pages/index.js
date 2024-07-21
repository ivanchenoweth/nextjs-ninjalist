import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/comps/Navbar";
import Footer from "@/comps/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Homepage V1</h1>
      <p>Fugiat esse velit culpa exercitation incididunt excepteur quis nulla eu occaecat.</p>
      <p>Fugiat esse velit culpa exercitation incididunt excepteur quis nulla eu occaecat.</p>
      <Footer />
    </div>
  );
}
