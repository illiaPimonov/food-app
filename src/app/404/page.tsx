import Header from '@/components/layout/Header/Header';
import React from 'react';
import styles from './404.module.css';
import Image from 'next/image';
import Button from '@/components/ui/Button/Button';
import ArrowSVG from '@/components/ui/Icons/ArrowSVG/ArrowSVG';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.textCont}>
          <div>
            <p className={"t-lg-40"}>Страница не найдена</p>
            <p className={`${'t-md-20'} ${styles.lowerText}`}>Проверьте корректность введённого адреса или повторите попытку позже</p>
          </div>
          <div className={styles.btnCont}>
            <Button variant={'active'} height={50} width={158}>
              <ArrowSVG/>
              <Link href={'/'}>На главную</Link>
            </Button>
            <Button variant={'active'} height={50} width={130}>Обновить</Button>
          </div>
        </div>
        <Image
          alt="not found"
          width={340}
          height={346}
          src="/assets/images/image.png"
        />
      </div>
    </>
  );
};

export default Page;
