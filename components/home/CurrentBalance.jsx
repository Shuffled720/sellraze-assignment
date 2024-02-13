import { Text, View } from "react-native"
import React, { Component } from "react"
import { LinearGradient } from "expo-linear-gradient"

export class CurrentBalance extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <LinearGradient
            style={{
              justifyContent: "center",
              //   borderRadius: Border.br_xs,
              alignItems: "center",
              paddingHorizontal: 58,
              paddingVertical: 24,
              width: 358,
            }}
            locations={[0, 0.48, 1]}
            colors={["#7394c6", "#076aff", "#43eef9"]}
          >
            <Text style={{ color: "white", fontSize: 20 }}>
              Current balance
            </Text>
            <Text
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 55,
                letterSpacing: -1.6,
                width: 218,
                height: 59,
                color: "white",
                marginTop: 20,
                // fontFamily: FontFamily.sFPro,
                fontWeight: "700",
              }}
            >
              $690.40
            </Text>
            <View
              style={{
                shadowOpacity: 1,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowColor: "rgba(25, 89, 253, 0.04)",
                shadowRadius: 2,
                elevation: 2,
                width: 167,
                height: 44,
                paddingHorizontal: 16,
                paddingVertical: 12,
                justifyContent: "center",
                // borderRadius: Border.br_xs,
                alignItems: "center",
                marginTop: 20,
                flexDirection: "row",
                backgroundColor: "white",
                borderRadius: 12,
              }}
            >
              <Text style={{ textAlign: "center", fontWeight: "700" }}>
                Cash out
              </Text>
            </View>
          </LinearGradient>
        </View>
      </View>
    )
  }
}

export default CurrentBalance
