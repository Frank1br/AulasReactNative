import { Link, useRouter } from "expo-router";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";


export default function Cadastro() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de cadastro</Text>
        <TextInput placeholder="Seu Nome" style={styles.input}/>
        <TextInput placeholder="emailmail@gmail.com" style={styles.input} keyboardType="email-address"/>
        <TextInput placeholder="Senha" style={styles.input} secureTextEntry/>
        <TouchableOpacity style={styles.buttonPrimary} onPress={() => router.navigate("/login")}>
                  <Text style={styles.buttonPrimaryText}>Cadastrar</Text>
        </TouchableOpacity>
        <Text>
             Ja tem login? {' '}
            <Link href="/login" style={styles.link}>
                Login
            </Link>
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: "blue",
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: .9,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "80%",
    borderRadius: 8,
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
});
