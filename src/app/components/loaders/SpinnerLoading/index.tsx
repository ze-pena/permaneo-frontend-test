import styles from './styles.module.scss';

export default function SpinnerLoading() {
  return (
    <div className={styles['spinner-loading']}>
      <div className={styles['spinner-loading__loader']}></div>
    </div>
  );
}
