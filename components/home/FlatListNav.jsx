import { Text, View } from "react-native"
import React, { Component } from "react"

export class FlatListNav extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            marginTop: 20,
            borderRadius: 12,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              borderRadius: 16,
              backgroundColor: "#cecece",
              // width: 132,
              marginLeft: 6,
              // height: 24,
              paddingHorizontal: 14,
              paddingVertical: 7,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                width: 71,
                textAlign: "center",
                fontSize: 12,
              }}
            >
              Total sales
            </Text>
          </View>
          <View
            style={{
              borderRadius: 16,
              backgroundColor: "black",
              // width: 132,
              marginLeft: 6,
              // height: 24,
              paddingHorizontal: 14,
              paddingVertical: 7,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontSize: 12,

                width: 111,
                textAlign: "center",
                color: "white",
                fontWeight: "600",
              }}
            >
              Activity breakdown
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

export default FlatListNav
