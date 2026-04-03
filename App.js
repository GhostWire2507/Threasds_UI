import "./global.css";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useRef, useState } from "react";
import { Animated, Image, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppProvider, useAppContext } from "./context/AppContext";
import TabNavigator from "./navigation/TabNavigator";

const THREADS_LOGO = require("./assets/threads-logo-black-background-vector_1017-45262.jpg");

SplashScreen.preventAutoHideAsync().catch(() => {});

// Full-screen overlay that shows the Threads logo then fades out.
function SplashOverlay({ onFinished }) {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Hold the logo for 1.5 s then fade over 700 ms.
    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      }).start(() => onFinished());
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View pointerEvents="none" style={[StyleSheet.absoluteFillObject, styles.splash, { opacity }]}>
      <Image source={THREADS_LOGO} style={styles.logo} resizeMode="contain" />
    </Animated.View>
  );
}

function AppShell() {
  const { themeMode } = useAppContext();
  const [splashVisible, setSplashVisible] = useState(true);
  const isDark = themeMode === "dark";

  // Hide the native Expo splash as soon as the JS layout is painted.
  const onLayoutRootView = useCallback(() => {
    SplashScreen.hideAsync().catch(() => {});
  }, []);

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: isDark ? "#0b1213" : "#e3f4f7",
      card: isDark ? "#121c1d" : "#b1e3eb",
      border: isDark ? "#2c3e40" : "#90c0c8",
      text: isDark ? "#e3f4f7" : "#121c1d",
      primary: isDark ? "#e3f4f7" : "#121c1d",
      notification: "#63868b",
    },
  };

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer theme={navigationTheme}>
        <StatusBar style={isDark ? "light" : "dark"} />
        <TabNavigator />
      </NavigationContainer>

      {/* Custom splash sits on top of everything and fades out once ready. */}
      {splashVisible && <SplashOverlay onFinished={() => setSplashVisible(false)} />}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  splash: {
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  },
  logo: {
    width: 110,
    height: 110,
    borderRadius: 22,
  },
});

export default function App() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  );
}
