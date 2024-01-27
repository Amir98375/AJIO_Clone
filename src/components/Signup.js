import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Background from "./Background";
import { darkGreen } from "./Constant";
import Field from "./Field";
import Btn from "./Btn";

const Signup = (props) => {
  return (
    <Background>
      <View style={{ alignItems: "center", width: 400 }}>
        <Text
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          Register
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            marginBottom: 10,
            fontWeight: "bold",
          }}
        >
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: "white",
            height: 620,
            width: 450,
            borderTopLeftRadius: 130,
            // borderTopRightRadius:130,
            // borderBottomLeftRadius:130,
            borderBottomRightRadius: 130,
            paddingTop: 30,
            paddingRight: 40,
            alignItems: "center",
          }}
        >
          <Field placeholder="First Name" />
          <Field
            placeholder="Last Name"
            // keyboardType={"email-address"}
          />

          <Field
            placeholder="Email / User Name"
            keyboardType={"email-address"}
          />
          <Field placeholder="Contact No" keyboardType={"number"} />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <View
            style={{
              display:"flex",
              flexDirection:"row",
              width: "78%",
              paddingRight: 20,
              //   marginBottom: 100,
            }}
          >
            <Text
              style={{ color: "grey", }}
            >
              By signing in, you agree to our
            </Text>
            <Text  style={{ color: darkGreen, fontSize: 16, fontWeight: "bold" }} > Terms & Conditions</Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="SignUp"
            Press={() => {
              alert("Account Created");
              props.navigation.navigate("Login");
            }}
          ></Btn>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Already have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text
                style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
              >
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
