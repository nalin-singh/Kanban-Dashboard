import Image from "next/image";
import styles from "./page.module.css";
import Main from "@/components/Main";
import Board from "@/components/Board";

export default function Home() {
  return (
    <>
      <Main />
      <Board />
    </>
  );
}
