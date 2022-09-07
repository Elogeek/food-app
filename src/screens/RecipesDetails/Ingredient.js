import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {useDispatch} from "react-redux";
import {addTask} from "../../redux/actions";

// Display une ligne d'ingrédient de la recette et le btn add panier
export default function Ingredient({ing}) {

    const dispatch = useDispatch();

    const onAddIngredient = () => {
        dispatch(addTask(`Ingrédient : ${ing.name}`))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.nameIngredient}>{ing.name}</Text>
            <TouchableOpacity style={styles.btnAdd} onPress={onAddIngredient}>
                <Text>Ajouter à ma liste de course</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    nameIngredient: {
        fontSize: 16
    },
    btnAdd: {
        Color: "white",
        backgroundColor: "orange",
        borderRadius: 5,
        borderWidth: 1,
        paddingHorizontal: 10
    }
})
