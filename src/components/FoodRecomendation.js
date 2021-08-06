import React, { Component } from 'react';
import PropTypes, { object } from 'prop-types';
import { connect } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';

class FoodRecomendation extends Component {
  render() {
    const { foodRecomendations } = this.props;
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            data-testid="0-recomendation-card"
            src={ foodRecomendations.length && foodRecomendations[0].strMealThumb }
            alt="First slide"
          />
          <h3 data-testid="0-recomendation-title">
            {foodRecomendations.length && foodRecomendations[0].strMeal}
          </h3>
          <img
            className="d-block w-100"
            data-testid="1-recomendation-card"
            src={ foodRecomendations.length && foodRecomendations[1].strMealThumb }
            alt="First slide"
          />
          <h3 data-testid="1-recomendation-title">
            {foodRecomendations.length && foodRecomendations[1].strMeal}
          </h3>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            data-testid="2-recomendation-card"
            src={ foodRecomendations.length && foodRecomendations[2].strMealThumb }
            alt="First slide"
          />
          <h3 data-testid="2-recomendation-title">
            {foodRecomendations.length && foodRecomendations[2].strMeal}
          </h3>
          <img
            className="d-block w-100"
            data-testid="3-recomendation-card"
            src={ foodRecomendations.length && foodRecomendations[3].strMealThumb }
            alt="First slide"
          />
          <h3 data-testid="3-recomendation-title">
            {foodRecomendations.length && foodRecomendations[3].strMeal}
          </h3>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            data-testid="4-recomendation-card"
            src={ foodRecomendations.length && foodRecomendations[4].strMealThumb }
            alt="First slide"
          />
          <h3 data-testid="4-recomendation-title">
            {foodRecomendations.length && foodRecomendations[4].strMeal}
          </h3>
          <img
            className="d-block w-100"
            data-testid="5-recomendation-card"
            src={ foodRecomendations.length && foodRecomendations[5].strMealThumb }
            alt="First slide"
          />
          <h3 data-testid="5-recomendation-title">
            {foodRecomendations.length && foodRecomendations[5].strMeal}
          </h3>
        </Carousel.Item>
      </Carousel>
    );
  }
}

const mapStateToProps = (state) => ({
  foodRecomendations: state.drinkReducer.foodRecomendations,
});

FoodRecomendation.propTypes = {
  foodRecomendations: PropTypes.arrayOf(object),
}.isRequired;

export default connect(mapStateToProps)(FoodRecomendation);
