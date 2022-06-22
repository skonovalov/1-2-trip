import styles from '../assets/styles/DirectionsCard.module.scss';

type directionsCardTypes = {
  className?: string,
  picture: string,
  bottomLeft: string,
  bottomRight: string,
  topLeft: string,
  topRight: string,
}

export default function DirectionsCard(props: directionsCardTypes) {
  const {
    className = '', picture, bottomLeft, bottomRight, topLeft, topRight,
  } = props;

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <img
        src={`images/cards/${picture}.jpeg`}
        className={styles.bg}
        alt="background"
      />
      <div className={styles.text}>
        <span className={styles.topLeft}>
          {topLeft}
        </span>
        <span className={styles.topRight}>
          {topRight}
        </span>
        <span className={styles.bottomLeft}>
          {bottomLeft}
        </span>
        <span className={styles.bottomRight}>
          {bottomRight}
        </span>
      </div>
    </div>
  );
}

DirectionsCard.defaultProps = {
  className: '',
};
