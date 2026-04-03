import { View } from "react-native";

export default function ThreadLine({ className = "" }) {
  return <View className={`ml-[21px] w-[1px] flex-1 bg-firefly-700/70 ${className}`} />;
}
