import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams} from "./RootStackParams";

export type TNavigationHomeProps = NativeStackScreenProps<RootStackParams, "Home">
export type TNavigationProductDetailProps = NativeStackScreenProps<RootStackParams, "ProductDetail">