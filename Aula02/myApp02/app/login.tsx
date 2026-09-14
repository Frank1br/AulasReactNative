import { Link, useRouter, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

export default function Login() {
  
    const router = useRouter();
    const { user } = useLocalSearchParams();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const entrar = () => {
        if(email === "admin@gmail.com" && senha === "admin"){
            router.navigate({pathname: "/dashboard", params: {"user":user} });
        } else {
            alert("Email ou senha incorretos!");
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela de Login</Text>

                { user ? <Text>Bem-vindo, {user}</Text> : <Text></Text> }
                <TextInput placeholder="email@gmail.com" style={styles.input} keyboardType="email-address" value={email} onChangeText={setEmail}/>

                <TextInput placeholder="Senha" style={styles.input} secureTextEntry value={senha} onChangeText={setSenha}/>

                <TouchableOpacity style={styles.buttonPrimary} onPress={entrar}>
                        <Text style={styles.buttonPrimaryText}>Entrar</Text>
                </TouchableOpacity>
                <Text>
                    Não tem um cadastro? {' '}
                    <Link href="/cadastro" style={styles.link}>
                        Cadastrar-se!
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
