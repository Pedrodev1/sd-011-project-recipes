import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import '../styles/RecipesRecomendations.css';

function FoodsRecomendations(props) {
  const { recomendations } = props;
  console.log(recomendations);
  const recomendationsNumber = 6;
  return (
    <Carousel>
      {recomendations.map((element, index) => {
        if (index < recomendationsNumber) {
          return (
            <Carousel.Item
              key={ element.idMeal }
              data-testid={ `${index}-recomendation-card` }
            >
              <img
                className="recipe-recom"
                src={ element.strMealThumb }
                alt="Comida recomendada"
              />
              <p>{element.strCategory}</p>
              <p
                data-testid={ `${index}-recomendation-title` }
              >
                {element.strMeal}
              </p>
            </Carousel.Item>
          );
        }
        return null;
      })}
    </Carousel>
  );
}

FoodsRecomendations.propTypes = ({
  recomendations: PropTypes.arrayOf.isRequired,
});

export default FoodsRecomendations;
