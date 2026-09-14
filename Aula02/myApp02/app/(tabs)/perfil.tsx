import { useRouter } from "expo-router";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";

export default function Perfil() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Cabeçalho com botão de voltar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Meu Perfil</Text>
      </View>

      {/* Seção da Foto e Nome Principal */}
      <View style={styles.profileSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>US</Text>
        </View>
        <Text style={styles.name}>Usuario</Text>
        <Text style={styles.role}>Estagiário em Desenvolvimento de Software</Text>
      </View>

      {/* Cartão de Informações Pessoais */}
      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>E-mail</Text>
          <Text style={styles.infoValue}>frank@email.com</Text>
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Instituição</Text>
          <Text style={styles.infoValue}>FATEC Praia Grande</Text>
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Senha</Text>
          <Text style={styles.infoValue}>********</Text>
        </View>
      </View>

      {/* Botões de Ação */}
      <TouchableOpacity style={styles.buttonPrimary}>
        <Text style={styles.buttonPrimaryText}>Editar Dados</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.buttonOutline} 
        onPress={() => router.replace("/login")}
      >
        <Text style={styles.buttonOutlineText}>Sair da Conta</Text>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Centraliza o título
    position: "relative",
  },
  backButton: {
    position: "absolute",
    left: 0,
    padding: 10,
    zIndex: 1,
  },
  backButtonText: {
    color: "#28A745", // Verde do seu padrão
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#28A745",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  avatarText: {
    color: "#FFF",
    fontSize: 36,
    fontWeight: "bold",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  role: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
    textAlign: "center",
  },
  infoCard: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoRow: {
    flexDirection: "column",
    marginVertical: 10,
  },
  infoLabel: {
    fontSize: 14,
    color: "#888",
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    width: "100%",
    marginVertical: 5,
  },
  buttonPrimary: {
    backgroundColor: "#28A745", 
    width: "80%",
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
  buttonOutline: {
    borderColor: "#DC3545",
    borderWidth: 1,
    width: "80%",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonOutlineText: {
    color: "#DC3545",
    fontSize: 16,
    fontWeight: "bold",
  },
});