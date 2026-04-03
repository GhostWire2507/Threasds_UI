import "./global.css";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppProvider, useAppContext } from "./context/AppContext";
import TabNavigator from "./navigation/TabNavigator";

function AppShell() {
  const { themeMode } = useAppContext();
  const isDark = themeMode === "dark";

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: isDark ? "#0b1213" : "#e3f4f7",
      card: isDark ? "#121c1d" : "#b1e3eb",
      border: isDark ? "#2c3e40" : "#90c0c8",
      text: isDark ? "#e3f4f7" : "#121c1d",
      primary: isDark ? "#e3f4f7" : "#121c1d",
      notification: "#63868b"
    }
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <StatusBar style={isDark ? "light" : "dark"} />
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  );
}
