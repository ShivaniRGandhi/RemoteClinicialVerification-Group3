import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image,
} from "react-native";
import { Camera } from "expo-camera";
import CameraPreview from "./CameraPreview";
import * as FaceDetector from "expo-face-detector";
import Icon from "react-native-vector-icons/Ionicons";

let camera: Camera;
export default function MainCamera() {
  const [startCamera, setStartCamera] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState<any>(null);

  const [faces, setFaces] = useState([]);
  const green_checkmark_circle = {
    name: "checkmark-circle-sharp",
    color: "#16c60c",
  };

  const red_close_circle = {
    name: "close-circle-sharp",
    color: "red",
  };
  const [icon, setIcon] = useState({});

  const faceDetected = ({ faces }) => {
    setFaces(faces);
    if (faces[0]) setIcon(green_checkmark_circle);
    else setIcon(red_close_circle);
    console.log({ faces });
  };
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const __startCamera = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    console.log(status);
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  };
  const __takePicture = async () => {
    const photo: any = await camera.takePictureAsync();
    // console.log(photo);
    setPreviewVisible(true);
    //setStartCamera(false)
    setCapturedImage(photo);
  };
  const __savePhoto = () => {};
  const __retakePicture = () => {
    setCapturedImage(null);
    setPreviewVisible(false);
    __startCamera();
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        {previewVisible && capturedImage ? (
          <CameraPreview
            photo={capturedImage}
            savePhoto={__savePhoto}
            retakePicture={__retakePicture}
          />
        ) : (
          <Camera
            type="front"
            onFacesDetected={faceDetected}
            FaceDetectorSettings={{
              mode: FaceDetector.Constants.Mode.accurate,
              detectLandmarks: FaceDetector.Constants.Landmarks.all,
              runClassifications: FaceDetector.Constants.Classifications.none,
              minDetectionInterval: 5000,
              tracking: false,
            }}
            style={{ flex: 1 }}
            ref={(r) => {
              camera = r;
            }}
          >
            <View
              style={{
                flex: 1,
                width: "100%",
                backgroundColor: "transparent",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  left: "5%",
                  top: "10%",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              ></View>
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  flexDirection: "row",
                  flex: 1,
                  width: "100%",
                  padding: 20,
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    alignSelf: "center",
                    flex: 1,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                  // disabled={}
                    onPress={__takePicture}
                    style={{
                      width: 70,
                      height: 70,

                      borderRadius: 60,
                      backgroundColor: "transparent",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 0,
                    }}
                  >
                    <Icon
                      name={icon.name}
                      size={75}
                      color={icon.color}
                      style={{
                        position: "absolute",
                        right: 3,
                      }}
                    ></Icon>
                  </TouchableOpacity>

                  {/* <Icon.Button
                        name="ios-checkmark-circle"
                        size={80}
                        color="#16c60c"
                        style={{
                          justifyContent: 'center',
                        alignItems: 'center',
                          width: 80,
                          height: 80,
                          borderRadius: 60,
                          padding: 0
                        }}
                        onPress={__takePicture}
                        backgroundColor = "white"
                      ></Icon.Button> */}
                </View>
              </View>
            </View>
          </Camera>
        )}
      </View>
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
