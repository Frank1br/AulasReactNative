import { useRouter, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";

export default function Dashboard() {
  const router = useRouter();
  const { user } = useLocalSearchParams();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
        <Text style={styles.subtitle}>
           { user ? <Text>Olá, {user}</Text> : <Text>Bem-vindo de volta!</Text> }
        </Text>
      </View>

      {/* Cartões de Resumo */}
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Usuários Ativos</Text>
          <Text style={styles.cardValue}>1.250</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Transações</Text>
          <Text style={styles.cardValue}>R$ 4.530</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Notificações</Text>
          <Text style={styles.cardValue}>12</Text>
        </View>
      </View>

      {/* Botão de Sair */}
      <TouchableOpacity 
        style={styles.buttonOutline} 
        onPress={() => router.replace("/login")}
      >
        <Text style={styles.buttonOutlineText}>Sair do sistema</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.buttonOutline2} 
        onPress={() => router.navigate("../drawer/produtos")}
      >
        <Text style={styles.buttonOutlineTex2}>Produtos</Text>
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
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#FFFFFF",
    width: "48%", // Ocupa quase metade da tela, gerando um grid de 2 colunas
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombra para Android
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 14,
    color: "#888",
    marginBottom: 10,
    textAlign: "center",
  },
  cardValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#28A745", // Verde do seu padrão
  },
  buttonOutline: {
    borderColor: "#DC3545",
    borderWidth: 1,
    width: "80%",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
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