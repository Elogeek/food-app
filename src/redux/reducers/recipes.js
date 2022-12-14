import {ADD_RECIPES, SELECTED_RECIPE, STEPS_TO_FOLLOW} from "../actions/actionsType";

const initialState = {
    list: [],
    selectedRecipes: {},
    stepsToFollow: {}
}

export const recipes = (state = initialState, action) => {
    switch (action.type) {
        // return new state
        case ADD_RECIPES:
            return {
                selectedRecipes: state.selectedRecipes,
                //concatenation du new state (recipes exist + new recipes)
                list: [...state.list, ...action.playload.data]
            }
        case SELECTED_RECIPE:
            return {
                list: state.list,
                selectedRecipe: action.payload.data
            };
        case STEPS_TO_FOLLOW:
            return {
                list: state.list,
                stepsToFollow: action.payload.data
            };
        default:
            return state
    }
}




