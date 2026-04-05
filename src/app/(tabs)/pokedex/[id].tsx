import {View, Text, ScrollView, StyleSheet} from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Detail() {
    const { id } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
    },
});