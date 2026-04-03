import { Feather, Ionicons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppContext } from "../context/AppContext";

const iconMap = {
  Home: ({ color, focused }) => <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />,
  Search: ({ color, focused }) => <Ionicons name={focused ? "search" : "search-outline"} size={24} color={color} />,
  CreateTrigger: ({ color }) => <Feather name="plus" size={26} color={color} />,
  Activity: ({ color, focused }) => <Ionicons name={focused ? "heart" : "heart-outline"} size={24} color={color} />,
  Profile: ({ color, focused }) => <Ionicons name={focused ? "person" : "person-outline"} size={24} color={color} />
};

export default function Navbar({ state, navigation }) {
  const insets = useSafeAreaInsets();
  const { themeMode } = useAppContext();
  const isDark = themeMode === "dark";

  return (
    <View
      style={{ paddingBottom: Math.max(insets.bottom, 14) }}
      className={`${isDark ? "border-firefly-700 bg-firefly-950" : "border-firefly-200 bg-firefly-50"} border-t px-6 pt-3`}
    >
      <View className="flex-row items-center justify-between">
        {state.routes.map((route, index) => {
          const focused = state.index === index;
          const color = focused ? (isDark ? "#e3f4f7" : "#121c1d") : isDark ? "#78a2a8" : "#4f6c70";
          const icon = iconMap[route.name];

          const onPress = () => {
            if (route.name === "CreateTrigger") {
              navigation.getParent()?.navigate("CreatePost");
              return;
            }

            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true
            });

            if (!focused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable
              key={route.key}
              accessibilityRole="button"
              onPress={onPress}
              style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.96 : 1 }] }]}
              className={`h-12 w-12 items-center justify-center rounded-full ${focused ? (isDark ? "bg-firefly-900" : "bg-firefly-100") : ""}`}
            >
              {icon({ color, focused })}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
