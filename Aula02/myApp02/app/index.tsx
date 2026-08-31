import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ImageBackground
} from "react-native";

import styles from "../styles/styles";
import Card from "../components/card";
import Item from "../components/item";

export default function App() {
  const categorias = [
    { id: "1", title: "Celulares" },
    { id: "2", title: "Notebooks" },
    { id: "3", title: "Acessórios" },
    { id: "4", title: "Smart TVs" },
  ];

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
 
    <ImageBackground
      source={require("../assets/images/wallpaper.jpg")}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        {/* Título do App */}
        <View style={styles.header}>
          <Text style={styles.titleText}>FaTech</Text>
          <Text style={styles.subtitleText}>Tecnologia para transformar seu dia.</Text>
        </View>

        {/* Lista Horizontal (Categorias) */}
        <View style={styles.categoriesContainer}>
          <FlatList
            data={categorias}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
          />
        </View>

        {/* Card Centralizado */}
        <View style={styles.cardWrapper}>
          <Card />
        </View>

        <StatusBar style="light" />
      </SafeAreaView>
    </ImageBackground>
  );
}