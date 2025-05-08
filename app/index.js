import {View, StyleSheet } from "react-native";
import { PrimaryButton, RoundedButton, CircleButton } from "../components/button";
import {StatusBar} from "expo-status-bar"
import {AppName, Title} from "../components/text";

export default function Index() {
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
    

      <AppName />
      <Title  text ="Teste" />


<Value value={10} size="small" />
<Value value={10} size="medium" />
<Value value={10} size="large" />
<Value value={10} size="valorinexistente" />
  
       <PrimaryButton label ="Calcular"/>
       <RoundedButton label = "5%" />
       <CircleButton label = "+" />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});