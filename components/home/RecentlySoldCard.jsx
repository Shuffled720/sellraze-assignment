import { Image, Text, View } from "react-native"
import React, { Component } from "react"

export class RecentlySoldCard extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            marginTop: 11,
            width: 358,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View style={{ width: 203, height: 33 }}>
            <View
              style={{
                width: 160,
                top: 0,
                position: "absolute",
                left: 43,
                height: 30,
              }}
            >
              <View
                style={{
                  width: 160,
                  top: 0,
                  position: "absolute",
                  left: 0,
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    letterSpacing: -0.4,
                    fontSize: 15,
                    width: 180,
                    // height: 13,
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "600",
                    textAlign: "left",
                    color: "black",
                  }}
                >
                  Vanleonet Beach Blanket 10
                </Text>
              </View>
              <View
                style={{
                  width: 131,
                  alignItems: "center",
                  flexDirection: "row",
                  top: 17,
                  left: 0,
                  position: "absolute",
                }}
              >
                <Text
                  style={{
                    width: 131,
                    alignItems: "center",
                    flexDirection: "row",
                    color: "lightgrey",
                    letterSpacing: -0.4,
                    fontSize: 10,
                    textAlign: "left",
                  }}
                >
                  Feb 14, 2024
                </Text>
                <Image
                  style={{ width: 4, height: 4, marginLeft: 4 }}
                  contentFit="cover"
                  source={require("../../assets/ellipse-18.png")}
                />
                <Text
                  style={{
                    color: "darkgrey",
                    letterSpacing: -0.4,
                    fontSize: 10,
                    textAlign: "left",
                    // fontFamily: FontFamily.sFPro,
                    width: 46,
                    marginLeft: 4,
                    height: 13,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  5:19pm
                </Text>
              </View>
            </View>
            <Image
              style={{
                borderRadius: 17,
                width: 33,
                height: 33,
                left: 0,
                top: 0,
                left: 0,
                position: "absolute",
              }}
              contentFit="cover"
              source={require("../../assets/image-1751.png")}
            />
          </View>
          <View style={{ width: 43 }}>
            <Text
              style={{
                width: 42,
                //   height: 13,
                display: "flex",
                alignItems: "center",
                textAlign: "left",
                color: "black",
                fontWeight: "700",
                letterSpacing: -0.4,
                fontSize: 10,
              }}
            >
              $35.42
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

export default RecentlySoldCard
