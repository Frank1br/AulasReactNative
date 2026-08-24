import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Item({ title }) {
  return (
    <TouchableOpacity style={styles.pill} activeOpacity={0.8}>
      <Text style={styles.pillText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pill: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2, // Sombra leve
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  pillText: {
    fontSize: 15,
    color: "#333333",
    fontWeight: "600",
  },
});