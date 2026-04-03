import "./global.css";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppProvider, useAppContext } from "./context/AppContext";
import TabNavigator from "./navigation/TabNavigator";

SplashScreen.preventAutoHideAsync().catch(() => {
  // Splash can already be locked by the runtime in development reloads.
});

function AppShell() {
  const { themeMode } = useAppContext();
  const [appIsReady, setAppIsReady] = useState(false);
  const isDark = themeMode === "dark";

  useEffect(() => {
    async function prepare() {
      await new Promise((resolve) => setTimeout(resolve, 1800));
      setAppIsReady(true);
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [appIsReady]);

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

  if (!appIsReady) {
    return <View className={`flex-1 ${isDark ? "bg-firefly-950" : "bg-firefly-50"}`} />;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
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
