import { View, Text } from "react-native";
import React from "react";
import Background from "./Background";
import Btn from "./Btn";
import { darkGreen, green } from "./Constant";

const Home = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        {/* <h1></><span>G</span>uitar<span className='span2'> A</span>dda</h1> */}
        <Text
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1rem",
            fontWeight: "bold",
            fontSize: 50,
          }}
        >
          Let's Shop
        </Text>
        <Text
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: darkGreen,
            marginBottom: "1rem",
            fontWeight: "bold",
            fontSize: 50,
          }}
        >
          Something
        </Text>
      </View>
      <Btn
        bgColor={darkGreen}
        btnLabel="Login"
        textColor="white"
        Press={() => props.navigation.navigate("Login")}
      />
      <Btn
        bgColor="white"
        btnLabel="SignUp"
        textColor={darkGreen}
        Press={() => props.navigation.navigate("Signup")}
      />
    </Background>
  );
};

export default Home;
