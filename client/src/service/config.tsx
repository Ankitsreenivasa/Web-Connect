import { Platform } from "react-native";

export const BASE_URL = "http://192.168.56.1:8000"

export const SOCKET_URL =
  Platform.OS === "ios" ? "ws://localhost:3000" : "ws://10.0.2.2:3000";
