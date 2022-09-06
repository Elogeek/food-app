import React from "react";
import {Text} from "react-native";

export default function RecipesDetails({route,navigation}) {

    const {id} = route.params
    //console.log("ID = ", id);

    return(
        <>
            <Text>Here, les détails</Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack()
                }}>
                    <Text>Revenir à l'accueil</Text>
            </TouchableOpacity>
        </>
    );
}
