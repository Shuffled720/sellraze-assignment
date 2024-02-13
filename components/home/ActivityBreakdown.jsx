import { Text, View } from "react-native"
import React, { Component } from "react"
import { Image } from "react-native"

export class ActivityBreakdown extends Component {
  render() {
    return (
      <View style={{ marginTop: 20, paddingHorizontal: 3 }}>
        <Text
          style={{
            fontWeight: "500",
            textAlign: "left",
            fontSize: 18,
            color: "black",
          }}
        >
          Activity breakdown
        </Text>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              paddingHorizontal: 20,
              // justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              borderRadius: 20,
              backgroundColor: "#f8f9fb",
              height: 32,
            }}
          >
            <Text
              style={{
                color: "black",
                letterSpacing: -0.3,
                fontSize: 10,
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              Hour
            </Text>
          </View>
          <View
            style={{
              borderRadius: 22,
              paddingVertical: 2,
              paddingHorizontal: 20,
              justifyContent: "center",
              marginLeft: 10,
              height: 32,
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "#f8f9fb",
            }}
          >
            <Text
              style={{
                color: "#076aff",
                letterSpacing: -0.3,
                fontSize: 10,
                textAlign: "center",
                fontWeight: "700",
              }}
            >
              Week
            </Text>
          </View>
          <View
            style={{
              borderRadius: 22,
              paddingVertical: 10,
              paddingHorizontal: 20,
              justifyContent: "center",
              marginLeft: 10,
              height: 32,
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "#f8f9fb",
            }}
          >
            <Text
              style={{
                color: "black",
                letterSpacing: -0.3,
                fontSize: 10,
                textAlign: "center",
                fontWeight: "700",
              }}
            >
              Month
            </Text>
          </View>
          <View
            style={{
              borderRadius: 22,
              paddingVertical: 5,
              paddingHorizontal: 15,
              justifyContent: "center",
              marginLeft: 10,
              height: 32,
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "#f8f9fb",
            }}
          >
            <Text
              style={{
                color: "black",
                letterSpacing: -0.3,
                fontSize: 10,
                textAlign: "center",
                fontWeight: "700",
              }}
            >
              Lifetime
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                padding: 15,
                // height: 98,
                width: 174,
                backgroundColor: "#edeff1",
                borderRadius: 10,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Image
                  style={{ width: 18, height: 18 }}
                  contentFit="cover"
                  source={require("../../assets/union.png")}
                />
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                  <Image
                    style={{ width: 16, height: 16, overflow: "hidden" }}
                    contentFit="cover"
                    source={require("../../assets/upwardicon.png")}
                  />
                  <Text style={{}}>+19.4%</Text>
                </View>
              </View>
              <View style={{ height: 37, marginTop: 10 }}>
                <Text
                  style={{
                    color: "darkgrey",
                    letterSpacing: -0.4,
                    fontSize: 12,

                    fontWeight: "500",
                  }}
                >
                  Revenue
                </Text>
                <Text
                  style={{
                    width: 124,
                    fontWeight: "600",

                    color: "black",
                    letterSpacing: -0.6,
                    fontSize: 20,
                  }}
                >
                  $500.34
                </Text>
              </View>
            </View>
            <View
              style={{
                padding: 15,
                // height: 98,
                width: 174,
                backgroundColor: "#edeff1",
                borderRadius: 10,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Image
                  style={{ width: 18, height: 18 }}
                  contentFit="cover"
                  source={require("../../assets/union.png")}
                />
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                  <Image
                    style={{ width: 16, height: 16, overflow: "hidden" }}
                    contentFit="cover"
                    source={require("../../assets/upwardicon.png")}
                  />
                  <Text style={{}}>+19.4%</Text>
                </View>
              </View>
              <View style={{ height: 37, marginTop: 10 }}>
                <Text
                  style={{
                    color: "darkgrey",
                    letterSpacing: -0.4,
                    fontSize: 12,

                    fontWeight: "500",
                  }}
                >
                  Revenue
                </Text>
                <Text
                  style={{
                    width: 124,
                    fontWeight: "600",

                    color: "black",
                    letterSpacing: -0.6,
                    fontSize: 20,
                  }}
                >
                  $500.34
                </Text>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <View
              style={{
                padding: 15,
                // height: 98,
                width: 174,
                backgroundColor: "#edeff1",
                borderRadius: 10,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Image
                  style={{ width: 18, height: 18 }}
                  contentFit="cover"
                  source={require("../../assets/union.png")}
                />
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                  <Image
                    style={{ width: 16, height: 16, overflow: "hidden" }}
                    contentFit="cover"
                    source={require("../../assets/upwardicon.png")}
                  />
                  <Text style={{}}>+19.4%</Text>
                </View>
              </View>
              <View style={{ height: 37, marginTop: 10 }}>
                <Text
                  style={{
                    color: "darkgrey",
                    letterSpacing: -0.4,
                    fontSize: 12,

                    fontWeight: "500",
                  }}
                >
                  Revenue
                </Text>
                <Text
                  style={{
                    width: 124,
                    fontWeight: "600",

                    color: "black",
                    letterSpacing: -0.6,
                    fontSize: 20,
                  }}
                >
                  $500.34
                </Text>
              </View>
            </View>
            <View
              style={{
                padding: 15,
                // height: 98,
                width: 174,
                backgroundColor: "#edeff1",
                borderRadius: 10,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Image
                  style={{ width: 18, height: 18 }}
                  contentFit="cover"
                  source={require("../../assets/union.png")}
                />
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                  <Image
                    style={{ width: 16, height: 16, overflow: "hidden" }}
                    contentFit="cover"
                    source={require("../../assets/upwardicon.png")}
                  />
                  <Text style={{}}>+19.4%</Text>
                </View>
              </View>
              <View style={{ height: 37, marginTop: 10 }}>
                <Text
                  style={{
                    color: "darkgrey",
                    letterSpacing: -0.4,
                    fontSize: 12,

                    fontWeight: "500",
                  }}
                >
                  Revenue
                </Text>
                <Text
                  style={{
                    width: 124,
                    fontWeight: "600",

                    color: "black",
                    letterSpacing: -0.6,
                    fontSize: 20,
                  }}
                >
                  $500.34
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default ActivityBreakdown
