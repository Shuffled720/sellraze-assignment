import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native"
import React, { Component } from "react"
import Stack from "expo-router/stack"
import { SafeAreaView } from "react-native"
import { Link } from "expo-router"

import CurrentBalance from "../components/home/CurrentBalance"
import FlatListNav from "../components/home/FlatListNav"
import ActivityBreakdown from "../components/home/ActivityBreakdown"
import RecentlySold from "../components/home/RecentlySold"

export class index extends Component {
  render() {
    return (
      <ScrollView>
        <SafeAreaView>
          <Stack.Screen
            options={{
              headerTitle: "My Balance",
              headerTitleAlign: "center",
              headerShadowVisible: false,
              headerLeft: () => (
                <>
                  <TouchableOpacity

                  // style={styles.btnContainer}
                  // onPress={handlePress}
                  >
                    {/* <Image source={require("../assets/image-175.png")} /> */}
                    <Link href="/modal">
                      <Image
                        source={require("../assets/image-175.png")}
                        resizeMode="cover"
                      />
                    </Link>
                  </TouchableOpacity>
                </>
              ),
              headerRight: () => (
                <>
                  <TouchableOpacity
                  // style={styles.btnContainer}
                  // onPress={handlePress}
                  >
                    <Image
                      source={require("../assets/image-179.png")}
                      resizeMode="cover"
                      // style={styles.btnImg(dimension)}
                    />
                  </TouchableOpacity>
                </>
              ),
            }}
          />
          <View style={{ paddingHorizontal: 2 }}>
            <CurrentBalance />
            <FlatListNav />
            <ActivityBreakdown />
            <RecentlySold />
            <View
              style={{
                top: 0,
                zIndex: 1000,
                backgroundColor: "rgba(255, 255, 255, 0.75)",
                shadowColor: "rgba(0, 0, 0, 0.25)",
                shadowRadius: 4,
                borderStyle: "solid",
                borderColor: "#ececec",
                height: 83,
              }}
            >
              <View
                style={{
                  top: 14,
                  left: 25,
                  width: 295,
                  alignItems: "center",
                  position: "absolute",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Image
                  style={{ width: 23, height: 24 }}
                  contentFit="cover"
                  source={require("../assets/image-178.png")}
                />
                <Image
                  style={{ width: 24 }}
                  contentFit="cover"
                  source={require("../assets/image-1791.png")}
                />
                <Image
                  style={{ width: 25 }}
                  contentFit="cover"
                  source={require("../assets/image-177.png")}
                />
                <Image
                  style={{ height: 24 }}
                  contentFit="cover"
                  source={require("../assets/image-182.png")}
                />
                <Image
                  style={{ height: 24 }}
                  contentFit="cover"
                  source={require("../assets/image-181.png")}
                />
              </View>
              <Image
                style={{
                  top: 9,
                  left: 141,
                  width: 10,
                  height: 10,
                  // position: "absolute",
                }}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    )
  }
}

export default index
