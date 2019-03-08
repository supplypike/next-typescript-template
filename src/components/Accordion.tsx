/// @ts-ignore
import styles from '../styles/controltower-styles/style.module.scss';
import { useState, createRef } from 'react';

export default ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);
  const contentRef: { current: any } = createRef();
  const open = () => {
    if (isOpen) {
      contentRef.current.style.maxHeight = null;
    } else {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    }
    setOpen(!isOpen);
  };
  return (
    <div onClick={open} className={`${isOpen ? styles['is-open'] : ''}`}>
      <div className={styles['accordion-title']}>
        <span>{title}</span>
        <div className={styles['accordion-icon']} />
      </div>
      <div
        ref={contentRef}
        className={`${styles['accordion-body']} ${isOpen ? styles['is-open'] : ''}`}
      >
        <p>{children}</p>
      </div>
    </div>
  );
};
