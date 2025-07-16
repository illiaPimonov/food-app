"use client";

import React from "react";
import styles from "./productCard.module.css";
import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import CustomizeSVG from "@/components/ui/Icons/CustomizeSVG/CustomizeSVG";
import PlusSVG from "@/components/ui/Icons/PlusSVG/PlusSVG";
import OptionalSVG from "@/components/ui/Icons/OptionalSVG/OptionalSVG";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  customizable: boolean;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {product.customizable ? (
          <div className={styles.svgWrapper}>
            <OptionalSVG />
          </div>
        ) : (
          <></>
        )}
        <Image
          src={product.image}
          alt={product.title}
          width={285}
          height={260}
        />
      </div>
      <div className={styles.textWrapper}>
        <h3 className={`t-lg-22`}>{product.title}</h3>
        <p className={`t-md-16 ${styles.description}`}>{product.description}</p>
      </div>
      <div className={styles.lowerCont}>
        <p className={`t-md-20`}>
          от <span className={`t-lg-20`}> {product.price} ₽</span>
        </p>
        {product.customizable ? (
          <Button variant={"card"} height={42} width={125} gap={10}>
            <CustomizeSVG></CustomizeSVG>Собрать
          </Button>
        ) : (
          <Button variant={"card"} height={42} width={125} gap={6}>
            <PlusSVG></PlusSVG>Добавить
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
