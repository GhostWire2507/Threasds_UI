import { Image } from "expo-image";
import { Text, View } from "react-native";

export default function Avatar({ uri, size = 44, showPlus = true }) {
  return (
    <View style={{ width: size, height: size }} className="relative">
      <Image
        source={uri}
        style={{ width: size, height: size, borderRadius: size / 2 }}
        className="bg-firefly-700"
        contentFit="cover"
        transition={180}
        cachePolicy="memory-disk"
      />
      {showPlus ? (
        <View className="absolute bottom-0 right-0 h-4 w-4 items-center justify-center rounded-full border border-firefly-950 bg-firefly-50">
          <Text className="text-[11px] font-semibold text-firefly-950">+</Text>
        </View>
      ) : null}
    </View>
  );
}
