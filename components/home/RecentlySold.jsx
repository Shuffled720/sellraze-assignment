import { Image, Text, View } from "react-native"
import React, { Component } from "react"
import RecentlySoldCard from "./RecentlySoldCard"

export class RecentlySold extends Component {
  render() {
    return (
      <View>
        <View style={{ marginTop: 20, padding: 1 }}>
          <Text
            style={{
              width: 138,
              height: 24,
              textAlign: "left",
              color: "black",
              fontWeight: "700",
              letterSpacing: -0.6,
              fontSize: 20,
              textAlign: "left",
              color: "black",
            }}
          >
            Recently sold
          </Text>
          <RecentlySoldCard />
          <RecentlySoldCard />
          <RecentlySoldCard />
          <RecentlySoldCard />
        </View>
      </View>
    )
  }
}

export default RecentlySold
