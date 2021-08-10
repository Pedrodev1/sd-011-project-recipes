// HomeMeals.test.js
import React from 'react';
import { screen } from '@testing-library/react';
import HomeRecipe from '../pages/HomeRecipe';
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';
import mockMeals from '../../cypress/mocks/meals';

const INITIAL_STATE = {
  RecipesReducer: {
    recipesData: { meals: [] },
    recipeDetailsData: [],
    recipesRedirectData: [],
    isLoading: false,
    showRecipe: false,
  },
};

describe('Testes para página de HomeComidas', () => {
  it('Verifica se há os itens procurados', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockMeals),
    });
    const { findByText, findByTestId } = renderWithRouterAndRedux(
      <HomeRecipe location={ { state: '' } } />,
      { route: '/comidas' }, INITIAL_STATE,
    );

    const exploreBtn = screen.getByTestId('explore-bottom-btn');
    expect(exploreBtn).toBeInTheDocument();
    const profileBtn = screen.getByTestId('profile-top-btn');
    expect(profileBtn).toBeInTheDocument();
    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle).toBeInTheDocument();
    const type = await findByText(/Dal fry/i);
    const title = await findByTestId('1-recipe-card');
    expect(type).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});

// Para utilizar o location
// <HomeRecipe location={ { state: 'chicken' } } />

// Para utilizar o match.param
// <HomeDetail match={ { params: { item: 'pamp' } } } />
