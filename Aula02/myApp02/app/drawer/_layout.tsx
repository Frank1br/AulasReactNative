import { Drawer } from 'expo-router/drawer';

export default function RootLayout() {
    
    return (
       <Drawer>
            <Drawer.Screen name="produtos" options={{ title: "FaTech - Produtos" }} />
            <Drawer.Screen name="categoria" options={{ title: "FaTech - Categorias" }} />
       </Drawer> 
    )
}