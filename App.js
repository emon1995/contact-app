import "react-native-gesture-handler";
import { StyleSheet} from "react-native";
import AppNavContainer from "./src/navigations";
import GlobalProvider from "./src/context/Provider";

export default function App() {
  return (
    <GlobalProvider>
      <AppNavContainer></AppNavContainer>
    </GlobalProvider>
  );
}

