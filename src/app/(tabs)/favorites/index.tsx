import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, View, Text, ScrollView, Image, StyleSheet, TextInput, SectionList } from "react-native";
import { Platform } from 'react-native';

export default function Favorites() {
    const params = useLocalSearchParams()
    const [text, setText] = useState('');
    return (
        <View style={{ flex: 2 }}>
            <View style={{ flex: 4, backgroundColor: 'powderblue' }} />
            <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
            <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 20,
        padding: 20,
    }
})
