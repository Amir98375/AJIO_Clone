// MenProducts.js
import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native";

const MenProducts = () => {
  const arr = [
    {
      imageURl:
        "https://media.istockphoto.com/id/467533204/photo/mans-legs.jpg?s=1024x1024&w=is&k=20&c=DdobxQadNf9mkV6SPfZo0GvI6NWo-7XGG9JAWk8gscs=",
   
      },
    ,
    {
      imageURl:
        "https://media.istockphoto.com/id/527236518/photo/mans-legs.jpg?s=1024x1024&w=is&k=20&c=048I3alxFMmacC6VW6af2_PF9SE_ELXjHeuZqYWChN8=",
    },
    {
      imageURl:
        "https://media.istockphoto.com/id/175518026/photo/approaching-life-with-a-great-attitude-is-key.jpg?s=1024x1024&w=is&k=20&c=tS7oXtIf8Bfv32-sqhmqOWlnE98anzA7MTGFJUDS5bg=",
    },
    {
      imageURl:
        "https://media.istockphoto.com/id/888767732/photo/man-with-shoulder-bag-and-hand-luggage-walking-in-airport-terminal.jpg?s=1024x1024&w=is&k=20&c=qFHAn16fDtN_22-FGFqfOt-_uImusYFArxhA5bxi8iQ=",
    },
    {
      imageURl:
        "https://media.istockphoto.com/id/1084128060/photo/blank-black-mens-pants-mock-up-isolated.jpg?s=1024x1024&w=is&k=20&c=W8h4bW_eNpIL1quhQzv9qOK0vNZmlHECizFExxsweoI=",
    },
    {
      imageURl:
        "https://media.istockphoto.com/id/534194534/photo/modern-man-go-bag-or-go-home.jpg?s=1024x1024&w=is&k=20&c=iEOZcTOH4kYm3K_16D9MBpCnePv0HOYzFFHkGe-a0cc=",
    },
    {
      imageURl:
        "https://media.istockphoto.com/id/467533204/photo/mans-legs.jpg?s=1024x1024&w=is&k=20&c=DdobxQadNf9mkV6SPfZo0GvI6NWo-7XGG9JAWk8gscs=",
    },
    {
      imageURl:
        "https://media.istockphoto.com/id/175518026/photo/approaching-life-with-a-great-attitude-is-key.jpg?s=1024x1024&w=is&k=20&c=tS7oXtIf8Bfv32-sqhmqOWlnE98anzA7MTGFJUDS5bg=",
    },
    {
      imageURl:
        "https://media.istockphoto.com/id/527236518/photo/mans-legs.jpg?s=1024x1024&w=is&k=20&c=048I3alxFMmacC6VW6af2_PF9SE_ELXjHeuZqYWChN8=",
    },
    {
      imageURl:
        "https://media.istockphoto.com/id/888767732/photo/man-with-shoulder-bag-and-hand-luggage-walking-in-airport-terminal.jpg?s=1024x1024&w=is&k=20&c=qFHAn16fDtN_22-FGFqfOt-_uImusYFArxhA5bxi8iQ=",
    },
    {
      imageURl:
        "https://media.istockphoto.com/id/1084128060/photo/blank-black-mens-pants-mock-up-isolated.jpg?s=1024x1024&w=is&k=20&c=W8h4bW_eNpIL1quhQzv9qOK0vNZmlHECizFExxsweoI=",
    },
    {
      imageURl:
        "https://media.istockphoto.com/id/534194534/photo/modern-man-go-bag-or-go-home.jpg?s=1024x1024&w=is&k=20&c=iEOZcTOH4kYm3K_16D9MBpCnePv0HOYzFFHkGe-a0cc=",
    },
  ];
  return (
    <ScrollView>
      {arr.map((el, index) => {
        return (
          <View style={styles.container}>
            <View style={styles.containerChild}>
              <Image
                key={index}
                source={{ uri: el.imageURl }}
                style={styles.imageCon}
              />
              <Text style={styles.title}>
                Title Title 2 Title Title 2Title Title 2Title Title 2Title Title
                2
              </Text>
            </View>
            <View style={styles.containerChild}>
              <Image
                key={index}
                source={{ uri: el.imageURl1 }}
                style={styles.imageCon}
              />
              <Text style={styles.title}>
                Title Title 2 Title Title 2Title Title 2Title Title 2Title Title
                2Title Title 2
              </Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default MenProducts;

const styles = StyleSheet.create({
  imageCon: {
    height: "60%",
    width: "100%",
    // borderRadius: 10 // half of 150
  },
  title: {
    textAlign: "center",
    marginTop: 5,
    // color: 'white'
  },
  container: {
    backgroundColor: "whitesmoke",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",

    // backgroundColor: 'grey',
    // paddingVertical: ,
    height: 300,
    width: "100%",
  },
  containerChild: {
    height: "100%",
    width: "50%",
    // borderRadius:15,
    borderColor: "red",
    borderLeftWidth: 1,
    borderLeftColor: "grey",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    elevation: 2,
    backgroundColor: "whitesmoke",
    // alignItems: 'center', // Align content horizontally center
    // justifyContent: 'center' // Align content vertically center
  },
});
