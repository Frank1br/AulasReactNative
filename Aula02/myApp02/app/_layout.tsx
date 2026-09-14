import { Stack } from "expo-router";

export default function RootLayout() {
    return (

        //Nao quer que apareça em todas? use o screenOptions={{ headerShown: false }} no Stack
        <Stack screenOptions={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#1E1E1E' } }}>
            <Stack.Screen name="index" options={{ title: "FaTech - Home", headerShown:false }} />
            <Stack.Screen name="login" options={{ title: "FaTech - Login" }} />
            <Stack.Screen name="cadastro" options={{ title: "FaTech - Cadastro" }} />
            <Stack.Screen name="dashboard" options={{ title: "FaTech - Dashboard" }} />
            <Stack.Screen name="(tabs)" options={{ headerShown:false }} />
            <Stack.Screen name="drawer" options={{ headerShown:false }} />
        </Stack>
    );
}