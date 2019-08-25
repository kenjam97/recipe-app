import React from 'react';
import Header from '../Header';
import RecipeList from '../RecipeList';
import RecipeDetails from '../RecipeDetails';
import ShoppingList from '../ShoppingList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <RecipeList />
      <RecipeDetails />
      <ShoppingList />
    </div>
  );
}

export default App;
