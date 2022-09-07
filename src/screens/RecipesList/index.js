import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from "react-native";
import {useFetchRecipes} from "../../api/recipes/useFetchRecipes";
import {useSelector} from "react-redux";
import {getRecipesList} from "../../redux/selectors";
import RecipeTile from "./RecipeTile";

export default function Index({navigation}) {

    const allRecipes = useSelector(getRecipesList);
    const [page,setPage] = useState(0);
    const {getAllRecipes} = useFetchRecipes();
    //console.log("ALL RECIPES", allRecipes);

    useEffect(() => {
        getAllRecipes(page)
    }, [page])

    // Stock recette (= item) return recipe
    const renderItem = ({item}) => <RecipeTile navigation={navigation} item={item} />

    //chargement infini
    // quand on arrive à la fin de la page scroll of the page (loading new page & 15 news recipes)
    const onEndReached = () => {
        // charger a new page
        setPage(currPage => currPage + 1) //currPage === page courante
    }


    return (
        <FlatList
            data={allRecipes}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            onEndReached={onEndReached}
            ListFooterComponent={() => <View style={{padding:40}}>
                <ActivityIndicator/>
            </View>}
        />
    );

}
