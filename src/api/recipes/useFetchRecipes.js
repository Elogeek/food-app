import axios from "axios";
import {useDispatch} from "react-redux";
import {addRecipes} from "../../redux/actions";

//const {getAllRecipes} = useFetchRecipes();

// Link of the api
const URL_API = "https://api.spoonacular.com/recipes/complexSearch";
// Key of the api
const KEY_API = "27d75c487bf34c07a678425df4a986d1";
const MAX_RESULT_PER_PAGE = 25;

// Search all recipes in the server
export  const useFetchRecipes = () => {

    const dispatch = useDispatch();

    const getAllRecipes = async () => {
        try {
            const response = await axios.get(URL_API,{
                params: {
                    apiKey: KEY_API,
                    number: MAX_RESULT_PER_PAGE
                }
            });
            console.log( "result", response.data.results);
            dispatch(addRecipes(response.data.results))
        }
        catch (e) {
            console.error("Error in getAllRecipes", e);
        }
    }
    return {
        getAllRecipes
    }
}
