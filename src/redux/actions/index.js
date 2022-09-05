import {ADD_RECIPES} from "./actionsType";

//Add recipe
export const addRecipes = (data) => ({
    type: ADD_RECIPES,
    playload: {
        data
    }
})

