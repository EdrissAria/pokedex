import {Stack} from "expo-router";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerTitle: "Pokedex", headerTitleAlign: "center"}} />
            <Stack.Screen name="[id]" options={{headerTitle: "Detail"}} />
        </Stack>
    );
}
