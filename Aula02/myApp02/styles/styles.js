import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },

  container: {
    flex: 1,
    backgroundColor: "transparent", 
  },

  header: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 30,
  },

  titleText: {
    fontSize: 36,
    fontWeight: "900",
    color: "#FFFFFF",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },

  subtitleText: {
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 5,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 8,
  },

  categoriesContainer: {
    height: 60,
    marginBottom: 30,
  },

  flatListContent: {
    paddingHorizontal: 20,
    alignItems: "center",
  },

  cardWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
  },
});

export default styles;