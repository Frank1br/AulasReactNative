import { Link, useRouter } from "expo-router";
import { use, useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";


export default function Cadastro() {
  const router = useRouter();
  const [nome, setNome]   = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const cadastrar = () => {
      router.navigate({pathname: "/login", params: {"user":nome} });
  } 
  return (
    <View style={styles.container}>

        {/* <Text>{nome}</Text>
        <Text>{email}</Text>
        <Text>{senha}</Text> */}

      <Text style={styles.title}>Tela de cadastro</Text>
        <TextInput 
        placeholder="Seu Nome" 
        style={styles.input} 
        value={nome} 
        onChangeText={setNome}
        />

        <TextInput 
        placeholder="emailmail@gmail.com" 
        style={styles.input} 
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        />

        <TextInput 
        placeholder="Senha" 
        style={styles.input} 
        secureTextEntry
        value={senha} 
        onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.buttonPrimary} onPress={cadastrar}>
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
