import { Tabs } from "expo-router"; 

export default function RootLayout() {
    
    return (
        <Tabs screenOptions={{ headerShown: true, headerTintColor: 'white', headerStyle: { backgroundColor: '#1E1E1E'}, tabBarStyle: { backgroundColor: '#1E1E1E' }, tabBarActiveTintColor: '#00FF00', tabBarInactiveTintColor: '#FFFFFF' }}>
            <Tabs.Screen 
                name="dashboard" 
                options={{ title: "FaTech - Dashboard"}} 
            />

            <Tabs.Screen 
                name="perfil" 
                options={{ title: "FaTech - Perfil"}} 
            />
        </Tabs>
    )
}