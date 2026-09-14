import { useRouter } from "expo-router";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";

export default function Categorias() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Categorias</Text>
        <Text style={styles.subtitle}>Organize seu catálogo por seções</Text>
      </View>

      {/* Grid de Categorias */}
      <View style={styles.cardsContainer}>
        
        {/* Categoria 1 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Eletrônicos</Text>
          <Text style={styles.cardSubtitle}>12 produtos</Text>
        </View>

        {/* Categoria 2 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Periféricos</Text>
          <Text style={styles.cardSubtitle}>45 produtos</Text>
        </View>

        {/* Categoria 3 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Monitores</Text>
          <Text style={styles.cardSubtitle}>8 produtos</Text>
        </View>

        {/* Categoria 4 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Acessórios</Text>
          <Text style={styles.cardSubtitle}>34 produtos</Text>
        </View>

      </View>

      {/* Botões de Ação */}
      <TouchableOpacity 
        style={styles.buttonOutline2} 
        // onPress={() => router.navigate("/nova-categoria")} 
      >
        <Text style={styles.buttonOutlineTex2}>+ Nova Categoria</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.buttonOutline} 
        onPress={() => router.back()} 
      >
        <Text style={styles.buttonOutlineText}>Voltar</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#F5F7FA",
    alignItems: "center",
  },
  header: {
    width: "100%",
    marginTop: 40,
    marginBottom: 30,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  cardsContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#FFFFFF",
    width: "48%",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 6,
    textAlign: "center",
  },
  cardSubtitle: {
    fontSize: 13,
    color: "#888",
  },
  buttonOutline: {
    borderColor: "#DC3545",
    borderWidth: 1,
    width: "80%",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 15,
  },
  buttonOutlineText: {
    color: "#DC3545",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonOutline2: {
    borderColor: "#35DC3B",
    borderWidth: 1,
    width: "80%",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonOutlineTex2: {
    color: "#35DC3B",
    fontSize: 16,
    fontWeight: "bold",
  },
});