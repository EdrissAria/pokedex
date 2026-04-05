import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

interface Pokemon {
    name: string;
    image: string;
    url?: string;
    imageBack: string;
    types: PokemonType[];
}

interface PokemonType {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

const typeColors: { [key: string]: string } = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    grass: "#7AC74C",
    bug: "#A6B91A",
};

export default function HomeScreen() {

    const [data, setData] = useState<Pokemon[]>([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
            const json = await response.json();

            const detailedData = await Promise.all(json.results.map(async (pokemon: { name: string; url: string }) => {
                const response = await fetch(pokemon.url);
                const details = await response.json();
                return {
                    name: pokemon.name,
                    image: details.sprites.front_default,
                    imageBack: details.sprites.back_default,
                    types: details.types as PokemonType[]
                }
            }));
            setData(detailedData);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {
                data.map((pokemon: Pokemon) => (
                    <Link key={pokemon.name} href={{pathname: "/pokedex/[id]", params: {id: pokemon.name}}}
                    style={{backgroundColor: typeColors[pokemon.types[0].type.name] + 60, padding: 10, borderRadius: 20}}   
                    >
                    <View>
                        <Text style={styles.name}>{pokemon.name}</Text>
                        <Text style={styles.type}>{pokemon.types[0].type.name}</Text>
                        <View style={{ flexDirection: "row", justifyContent: "center", gap: 20 }}>
                            <Image source={{ uri: pokemon.image }} style={{ width: 150, height: 150 }} />
                            <Image source={{ uri: pokemon.imageBack }} style={{ width: 150, height: 150 }} />
                        </View>
                    </View>
                    </Link>
                ))
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 20,
        padding: 20,
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    type: {
        fontSize: 20,
        fontWeight: "bold",
        color: "gray",
        textAlign: "center",
    },
})
