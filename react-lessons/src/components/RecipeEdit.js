import React, {useState, useEffect} from 'react'
import RecipeIngredient from './RecipeIngredientEdit'
import RecipeIngredientEdit from './RecipeIngredientEdit'

export default function RecipeEdit() {
  return (
    <div className="recipe-edit">
      <div>
        <button>&times;</button>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name"/>
        <label htmlFor="Cook Time">Cook Time</label>
        <input type="text" name="name" id="cookTime" />
        <label htmlFor="servings">Servings</label>
        <input type="number" min="1" name="servings"
        id="servings" />
        <label htmlFor="instructions">Instructions</label>
        <textarea name="instrucitons" id="instructions" />
      </div>
      <br />
      <label>Ingredients</label>
      <div>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        <RecipeIngredientEdit />
        <RecipeIngredientEdit />
      </div>
      <div>
        <button>Add Ingredients</button>
      </div>
    </div>
  )
}
