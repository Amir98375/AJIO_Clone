import { View, Text } from "react-native";
import React from "react";
import Background from "./Background";
import Btn from "./Btn";
import { darkGreen, green } from "./Constant";

const Home = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        <Text>Lets start coding</Text>
      </View>
      <Btn bgColor={darkGreen} btnLabel="Login" textColor="white" Press={()=>props.navigation.navigate("Login")} />
      <Btn bgColor="white" btnLabel="SignUp" textColor={darkGreen} Press={()=>props.navigation.navigate("Signup")} />
    </Background>
  );
};

export default Home;
