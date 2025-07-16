import Header from "@/components/layout/Header/Header";
import React from "react";
import styles from "./accessDenied.module.css";
import ArrowSVG from "@/components/ui/Icons/ArrowSVG/ArrowSVG";
import Button from "@/components/ui/Button/Button";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.textCont}>
          <div>
            <p className={"t-lg-40"}>Доступ запрещён</p>
            <p className={`${"t-md-20"} ${styles.lowerText}`}>
              Данную страницу могут просматривать только авторизованные
              пользователи
            </p>
          </div>
          <div className={styles.btnCont}>
            <Button variant={"active"} height={50} width={158}>
              <ArrowSVG />
              <Link href={"/"}>На главную</Link>
            </Button>
            <Button variant={"active"} height={50} width={130}>
              Обновить
            </Button>
          </div>
        </div>
        <Image
          alt="denied access"
          width={320}
          height={379}
          src="/assets/images/denied.png"
        />
      </div>
    </>
  );
};

export default page;
