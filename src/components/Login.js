import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Background from "./Background";
import { darkGreen } from "./Constant";
import Field from "./Field";
import Btn from "./Btn";

const Login = (props) => {
  return (
    <Background>
      <View style={{ alignItems: "center", width: 400 }}>
        <Text
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: "bold",
            marginVertical: 10,
          }}
        >
          Login
        </Text>

        <View
          style={{
            backgroundColor: "white",
            height: 600,
            width: 450,
            borderTopLeftRadius: 130,
            // borderTopRightRadius:130,
            // borderBottomLeftRadius:130,
            borderBottomRightRadius:130,
            paddingTop: 100,
            paddingRight:40,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 40, color: darkGreen, fontWeight: "bold" }}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: "grey",
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Login to your account
          </Text>
          <Field
            placeholder="Email / User Name"
            keyboardType={"email-address"}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{
              alignItems: "flex-end",
              width: "78%",
              paddingRight: 20,
            //   marginBottom: 100,
            }}
          >
            <Text
              style={{ color: darkGreen, fontSize: 16, fontWeight: "bold" }}
            >
              Forgot Passowrd
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Login"
            Press={() => alert("Logged In")}
          ></Btn>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Don't have an account ?
            </Text>
            <TouchableOpacity onPress={()=>props.navigation.navigate("Signup")}>
              <Text
                style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
