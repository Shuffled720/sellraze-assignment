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
                    <Image
                      source={require("../assets/image-175.png")}
                      resizeMode="cover"
                    />
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
          </View>
        </SafeAreaView>
      </ScrollView>
    )
  }
}

export default index
