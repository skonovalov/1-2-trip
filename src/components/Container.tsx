import React from 'react';
import styles from '../assets/styles/Container.module.scss';

type containerTypes = {
  children: React.ReactNode
}

export default function Container({ children }: containerTypes) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
