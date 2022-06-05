import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  Alert,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import axios from "axios";

import UserAvatar from "react-native-user-avatar";

import COLORS from "../consts/colors";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Loader from "../../components/Looder";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Shared from "../../components/Shared";

import * as ImagePicker from 'expo-image-picker';


const UserProfile = ({ navigation }) => {
  const [user, setUser] = useState([]);
  const [image, setImage] = useState(null);



 
    const myCustomShare = async () => {
    const shareOptions = {
      message: "This is a test message",
    };
    try {
      const ShareResponse = await Share.open(shareOptions);
    } catch (error) {
      console.log("Error => ", error);
    }
  };

  const pickImage = async () => {


    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        // aspect: [5, 10],
        // quality: 1,
        base64: true,
    });
    console.log("result: " + result);
    console.log(JSON.stringify(result));
    console.log("result.uri: " + result.uri );

    if (!result.cancelled) {
        setImage(result.uri);
    }
};

  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            padding: 10,
            width: "100%",
            backgroundColor: COLORS.primary,
            height: 150,
          }}
        >
          <TouchableOpacity>
            {/* <Image source={require('../../assets/onboardImage3.jpg')}
                    style={{ width: 30, height:80}}></Image> */}
            <View></View>
            <View></View>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/onboardImage3.jpg")}
            style={{
              width: 170,
              height: 170,
              borderRadius: 100,
              marginTop: -90,
              borderWidth: 90,
              borderColor: "white",
            }}
          ></Image>
          <UserAvatar
            size={100}
            name="User Name"
            style={{
              width: 170,
              height: 170,
              borderRadius: 100,
              marginTop: -175,
              borderWidth: 7,
              borderColor: "white",
            }}
          />
          {/* bgColors={['#ccc', '#fafafa', '#ccaabb']} */}
          {/* <Image source={require('../../assets/onboardImage3.jpg')} style={{width:170, height:170,
                 borderRadius:100, marginTop:-175, borderWidth: 7,
                 borderColor: "white"}}></Image> */}
         
         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
         
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              padding: 30,
              color: "black",
            }}
          >
            User Name
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              padding: 1,
              color: "grey",
            }}
          >
            Role Here
          </Text>
        </View>

        {/* <PhotoUpload
   onPhotoSelect={avatar => {
     if (avatar) {
       console.log('Image base64 string: ', avatar)
     }
   }}
 >
   <Image
     style={{
       paddingVertical: 30,
       width: 150,
       height: 150,
       borderRadius: 75
     }}
     resizeMode='cover'
     source={{
       uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
     }}
   />
 </PhotoUpload> */}

        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#fff",
            width: "90%",
            padding: 20,
            paddingBottom: 22,
            borderRadius: 10,
            shadowopacity: 80,
            elevation: 15,
            marginTop: 20,
          }}
        >
          <Text>Edit Profile</Text>
        </View>

        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#fff",
            width: "90%",
            padding: 20,
            paddingBottom: 22,
            borderRadius: 10,
            shadowopacity: 80,
            elevation: 15,
            marginTop: 20,
          }}
        >
          <Text>Company Name</Text>
        </View>

        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#fff",
            width: "90%",
            padding: 20,
            paddingBottom: 22,
            borderRadius: 10,
            shadowopacity: 80,
            elevation: 15,
            marginTop: 20,
          }}
        >
          <Text>Country</Text>
        </View>
        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#fff",
            width: "90%",
            padding: 20,
            paddingBottom: 22,
            borderRadius: 10,
            shadowopacity: 80,
            elevation: 15,
            marginTop: 20,
          }}
        >
          <Text>Address</Text>
        </View>

        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#fff",
            width: "90%",
            padding: 20,
            paddingBottom: 22,
            borderRadius: 10,
            shadowopacity: 80,
            elevation: 15,
            marginTop: 20,
          }}
        >
          <Text onPress={() => navigation.navigate("Contact")}>Contact us</Text>
        </View>

        <Shared />

        {/* <Countrypicker/> */}

        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#fff",
            width: "90%",
            padding: 20,
            paddingBottom: 22,
            borderRadius: 10,
            shadowopacity: 80,
            elevation: 15,
            margin: 50,
          }}
        >
          <Button title="Logout" onPress={""} />
        </View>
       

      </ScrollView>
    </View>
  );
};

export default UserProfile;
