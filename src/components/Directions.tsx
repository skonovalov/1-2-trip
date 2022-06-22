import Container from './Container';
import DirectionsCard from './DirectionsCard';
import cards from '../mocks/cards';
import styles from '../assets/styles/Directions.module.scss';

type directionsTypes = {
  title: string,
}

export default function Directions({ title }: directionsTypes) {
  return (
    <Container>
      <div className="Directions">
        <h2>
          {title }
        </h2>
        <div className={styles.wrapper}>
          {
            cards.map((card) => (
              <DirectionsCard
                className={styles.item}
                key={card.id}
                picture={card.bg}
                topLeft={card.city}
                topRight={card.price}
                bottomLeft={card.country}
                bottomRight={card.rent}
              />
            ))
          }
        </div>
      </div>
    </Container>
  );
}
