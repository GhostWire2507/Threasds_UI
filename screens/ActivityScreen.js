import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Avatar from "../components/Avatar";
import { useAppContext } from "../context/AppContext";

export default function ActivityScreen() {
  const { notifications, themeMode } = useAppContext();
  const isDark = themeMode === "dark";

  return (
    <SafeAreaView className={`flex-1 ${isDark ? "bg-firefly-950" : "bg-firefly-50"}`} edges={["top"]}>
      <View className="px-4 pb-2">
        <Text className={`text-[32px] font-bold ${isDark ? "text-firefly-50" : "text-firefly-900"}`}>Activity</Text>
      </View>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className={`mx-4 flex-row border-b py-4 ${isDark ? "border-firefly-700" : "border-firefly-200"}`}>
            <Avatar uri={item.user.avatar} showPlus={false} />
            <View className="ml-3 flex-1">
              <Text className={`text-sm ${isDark ? "text-firefly-50" : "text-firefly-900"}`}>
                <Text className="font-semibold">{item.user.username} </Text>
                {item.text}
              </Text>
              <Text className="mt-1 text-xs text-firefly-300">{item.timestamp}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
