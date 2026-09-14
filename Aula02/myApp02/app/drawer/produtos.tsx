import { useRouter } from "expo-router";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";

export default function Produtos() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Produtos</Text>
        <Text style={styles.subtitle}>Gerencie o catálogo e os preços</Text>
      </View>

      {/* Grid de Produtos */}
      <View style={styles.cardsContainer}>
        
        {/* Produto 1 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Teclado Mecânico</Text>
          <Text style={styles.cardValue}>R$ 350,00</Text>
          <Text style={styles.cardStock}>Estoque: 15 un.</Text>
        </View>

        {/* Produto 2 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Mouse Sem Fio</Text>
          <Text style={styles.cardValue}>R$ 120,00</Text>
          <Text style={styles.cardStock}>Estoque: 32 un.</Text>
        </View>

        {/* Produto 3 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Monitor LED 24"</Text>
          <Text style={styles.cardValue}>R$ 899,00</Text>
          <Text style={styles.cardStock}>Estoque: 8 un.</Text>
        </View>

        {/* Produto 4 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Headset Gamer</Text>
          <Text style={styles.cardValue}>R$ 250,00</Text>
          <Text style={styles.cardStock}>Estoque: 22 un.</Text>
        </View>

      </View>

      {/* Botões de Ação */}
      <TouchableOpacity 
        style={styles.buttonOutline2} 
        // onPress={() => router.navigate("/novo-produto")} // Exemplo para rota de criação
      >
        <Text style={styles.buttonOutlineTex2}>+ Adicionar Novo</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.buttonOutline} 
        onPress={() => router.back()} // Retorna para a tela anterior
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
    width: "48%", // Ocupa quase metade da tela, gerando um grid de 2 colunas
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 14,
    color: "#444",
    marginBottom: 8,
    textAlign: "center",
    fontWeight: "500",
  },
  cardValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#28A745", 
    marginBottom: 6,
  },
  cardStock: {
    fontSize: 12,
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