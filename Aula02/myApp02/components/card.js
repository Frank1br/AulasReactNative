import { router, useRouter } from "expo-router";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from "react-native";



const { width } = Dimensions.get('window');
const cardWidth = width - 40; 

export default function Card() {

  const router = useRouter();

  return (
    <View style={styles.card}>
      
      {/* ScrollView horizontal com as duas imagens */}
      <View style={styles.imageContainer}>
        <ScrollView 
          horizontal 
          pagingEnabled 
          showsHorizontalScrollIndicator={false}
        >
          <Image
            source={{ uri: "https://http2.mlstatic.com/D_NQ_NP_602930-MLA111944189869_052026-O.webp" }} // Imagem 1 (Ex: Notebook)
            style={[styles.image, { width: cardWidth }]}
            resizeMode="contain"
          />
          <Image
            source={{ uri: "https://http2.mlstatic.com/D_NQ_NP_2X_973270-MLA110972499672_052026-F.webp" }} 
            style={[styles.image, { width: cardWidth }]}
            resizeMode="contain"
          />
          <Image
            source={{ uri: "https://imgs.search.brave.com/ImmScQoVFBPFaq8SI3DXb0cYgG7-ZcJc5XLH8Dv0nyw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/RmxhSF8yZHFsaVlB/QUFBTS91ZHlyLXNh/c3VrZS5naWY.gif" }} 
            style={[styles.image, { width: cardWidth }]}
            resizeMode="contain"
          />
        </ScrollView>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Ofertas Especiais!</Text>

        <TouchableOpacity style={styles.buttonPrimary} onPress={() => router.navigate("/login")}>
          <Text style={styles.buttonPrimaryText}>COMPRAR AGORA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonSecondaryText}>Ver detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    width: "100%",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  imageContainer: {
    height: 220,
    backgroundColor: "#FFFFFF",
  },
  image: {
    height: 220,
  },
  content: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 20,
  },
  buttonPrimary: {
    backgroundColor: "#28A745", 
    width: "100%",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  buttonPrimaryText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonSecondary: {
    backgroundColor: "#7B0000", 
    width: "100%",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonSecondaryText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});