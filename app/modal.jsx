import { View, StyleSheet, Text, Image } from "react-native"
import { Link, router } from "expo-router"
import { StatusBar } from "expo-status-bar"
// import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles"

export default function Modal() {
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = router.canGoBack()
  return (
    <View>
      {/* <Text style={[styles.settings1, styles.venmoFlexBox]}>Settings</Text> */}
      <View style={[styles.frameGroup, styles.settingsPosition]}>
        <View style={styles.image175Parent}>
          <Image
            style={styles.image175Icon}
            contentFit="cover"
            source={require("../assets/image-175.png")}
          />
          <View style={styles.patrickYoungParent}>
            <Text style={[styles.patrickYoung, styles.patrickYoungTypo]}>
              Patrick Young
            </Text>
            <Text style={[styles.editProfile, styles.tylermaTypo]}>
              Edit profile
            </Text>
          </View>
        </View>
        <View style={styles.frameContainer}>
          <View style={styles.paymentMethodsParent}>
            <Text style={[styles.paymentMethods, styles.patrickYoungTypo]}>
              Payment methods
            </Text>
            <View style={styles.customRange}>
              <Image
                style={styles.image177Icon}
                contentFit="cover"
                source={require("../assets/image-1771.png")}
              />
              <Text style={[styles.addMethod, styles.tylermaTypo]}>
                Add method
              </Text>
            </View>
          </View>
          <View style={[styles.dashboardParent, styles.frameWrapperFlexBox]}>
            <View style={[styles.dashboard, styles.dashboardShadowBox]} />
            <View style={styles.image175Group}>
              <Image
                style={styles.image175Icon1}
                contentFit="cover"
                source={require("../assets/image-1752.png")}
              />
              <View style={styles.amazonGiftCardsWrapper}>
                <Text style={[styles.amazonGiftCards, styles.appearanceTypo]}>
                  Amazon Gift cards
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
            <View style={styles.dashboardGroup}>
              <View style={[styles.dashboard1, styles.dashboardShadowBox]} />
              <Image
                style={styles.image175Icon2}
                contentFit="cover"
                source={require("../assets/image-1753.png")}
              />
              <View style={styles.amazonGiftCardsWrapper}>
                <Text style={[styles.venmo, styles.venmoTypo]}>Venmo</Text>
                <Text style={[styles.tylerma, styles.tylermaTypo]}>
                  @tylerma
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameView}>
          <View style={styles.paymentMethodsParent}>
            <Text style={[styles.shippingAddresses, styles.patrickYoungTypo]}>
              Shipping addresses
            </Text>
            <View style={styles.customRange}>
              <Image
                style={styles.image177Icon}
                contentFit="cover"
                source={require("../assets/image-1771.png")}
              />
              <Text style={[styles.addMethod, styles.tylermaTypo]}>
                Add address
              </Text>
            </View>
          </View>
          <View style={styles.productSearchBar}>
            <View style={styles.tylerMaParent}>
              <Text style={[styles.tylerMa, styles.venmoTypo]}>Tyler Ma</Text>
              <Text
                style={[styles.birchmoreWalkLawrenceville, styles.venmoTypo]}
              >
                237 Birchmore Walk, Lawrenceville GA 30044
              </Text>
            </View>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon1.png")}
            />
          </View>
        </View>
        <View style={styles.frameView}>
          <Text style={[styles.paymentMethods, styles.patrickYoungTypo]}>
            Preferences
          </Text>
          <View style={[styles.frameWrapper1, styles.frameWrapperFlexBox]}>
            <View style={styles.appearanceParent}>
              <Text style={[styles.appearance, styles.appearanceTypo]}>
                Appearance
              </Text>
              <Image
                style={styles.image165Icon}
                contentFit="cover"
                source={require("../assets/image-165.png")}
              />
            </View>
          </View>
        </View>
        <Text style={[styles.logOut, styles.logOutTypo]}>Log out</Text>
        <Text style={[styles.deleteAccount, styles.logOutTypo]}>
          Delete account
        </Text>
        <View style={styles.sellrazeBlackParent}>
          <Image
            style={styles.sellrazeBlackIcon}
            contentFit="cover"
            source={require("../assets/sellraze-black.png")}
          />
          <Text style={[styles.version1002024, styles.logOutTypo]}>
            Version 1.0.0 (2024)
          </Text>
          <Text
            style={[styles.version1002024, styles.logOutTypo]}
          >{`Terms & Privacy`}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  settingsLayout: {
    height: 852,
    width: 393,
  },
  settingsPosition: {
    left: 16,
    position: "absolute",
  },
  venmoFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  patrickYoungTypo: {
    textAlign: "left",
    letterSpacing: -0.6,
    fontSize: FontSize.size_2xl,
    color: Color.dark100,
    // // fontFamily: FontFamily.sFPro,
    fontWeight: "700",
  },
  tylermaTypo: {
    letterSpacing: -0.3,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    // // fontFamily: FontFamily.sFPro,
  },
  frameWrapperFlexBox: {
    marginTop: 10,
    flexWrap: "wrap",
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
    width: 358,
  },
  dashboardShadowBox: {
    width: 18,
    borderWidth: 1,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 1.8,
    shadowRadius: 1.8,
    shadowOffset: {
      width: 0,
      height: 1.7999999523162842,
    },
    shadowColor: "rgba(25, 89, 253, 0.04)",
    borderRadius: Border.br_xs,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  appearanceTypo: {
    width: 128,
    letterSpacing: -0.4,
    fontSize: FontSize.size_sm,
    // height: 10,
    textAlign: "left",
    display: "flex",
    color: Color.dark100,
    // // fontFamily: FontFamily.sFPro,
    alignItems: "center",
  },
  venmoTypo: {
    letterSpacing: -0.4,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    // // fontFamily: FontFamily.sFPro,
  },
  logOutTypo: {
    textAlign: "center",
    fontSize: FontSize.size_base,
    // // fontFamily: FontFamily.sFPro,
    letterSpacing: -0.5,
  },
  homeLayout: {
    height: 5,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  settingsChild: {
    top: 50,
    height: 1201,
    overflow: "hidden",
    width: 358,
    backgroundColor: Color.background,
    borderRadius: Border.br_3xl,
  },
  settings1: {
    fontSize: FontSize.size_lg,
    textAlign: "right",
    width: 218,
    height: 23,
    color: Color.dark100,
    // // fontFamily: FontFamily.sFPro,
    letterSpacing: -0.5,
    display: "flex",
    fontWeight: "700",
  },
  frameChild: {
    width: 24,
    height: 24,
    borderRadius: Border.br_3xl,
  },
  settingsParent: {
    top: 25,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 358,
  },
  image175Icon: {
    borderRadius: Border.br_lg,
    width: 32,
    height: 32,
  },
  patrickYoung: {
    width: 254,
    height: 21,
    display: "flex",
    alignItems: "center",
  },
  editProfile: {
    width: 50,
    height: 11,
    marginTop: 6,
    color: Color.dark72,
    fontWeight: "500",
  },
  patrickYoungParent: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image175Parent: {
    padding: Padding.p_3xs,
    height: 36,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
    width: 358,
  },
  paymentMethods: {
    width: 177,
    height: 24,
  },
  image177Icon: {
    borderRadius: Border.br_6xs,
    width: 10,
    // height: 10,
  },
  addMethod: {
    marginLeft: 4,
    fontWeight: "600",
    color: Color.dark100,
  },
  customRange: {
    borderRadius: Border.br_7xs,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_4xs,
    justifyContent: "center",
    height: 24,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.background,
  },
  paymentMethodsParent: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  dashboard: {
    height: 18,
  },
  image175Icon1: {
    width: 33,
    height: 23,
  },
  amazonGiftCards: {
    fontWeight: "600",
  },
  amazonGiftCardsWrapper: {
    width: 89,
    marginLeft: 10,
    justifyContent: "center",
  },
  image175Group: {
    width: 160,
    marginLeft: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  dashboardParent: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
    marginTop: 10,
    flexWrap: "wrap",
    height: 36,
  },
  dashboard1: {
    height: 18,
  },
  image175Icon2: {
    height: 26,
    width: 33,
    marginLeft: 10,
    borderRadius: Border.br_5xs,
  },
  venmo: {
    width: 117,
    fontWeight: "600",
    // height: 10,
    display: "flex",
    alignItems: "center",
    color: Color.dark100,
  },
  tylerma: {
    width: 157,
    // height: 10,
    marginTop: 6,
    color: Color.dark72,
    display: "flex",
    alignItems: "center",
  },
  dashboardGroup: {
    width: 162,
    alignItems: "center",
    flexDirection: "row",
  },
  frameWrapper: {
    height: 41,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
    marginTop: 10,
    flexWrap: "wrap",
  },
  frameContainer: {
    marginTop: 40,
  },
  shippingAddresses: {
    width: 198,
    height: 24,
  },
  tylerMa: {
    fontWeight: "600",
    color: Color.dark100,
  },
  birchmoreWalkLawrenceville: {
    width: 167,
    color: Color.dark72,
  },
  tylerMaParent: {
    width: 249,
    // height: 55,
    justifyContent: "space-between",
  },
  icon: {
    width: 16,
    height: 16,
  },
  productSearchBar: {
    marginTop: 14,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    width: 358,
  },
  frameView: {
    marginTop: 40,
    width: 358,
  },
  appearance: {
    fontWeight: "500",
  },
  image165Icon: {
    width: 12,
    height: 18,
  },
  appearanceParent: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 358,
  },
  frameWrapper1: {
    marginTop: 10,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  logOut: {
    color: Color.red,
    marginTop: 40,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  deleteAccount: {
    color: Color.minGrey,
    marginTop: 40,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  sellrazeBlackIcon: {
    width: 131,
    height: 51,
  },
  version1002024: {
    color: Color.dark16,
    marginTop: 6,
    fontWeight: "500",
  },
  sellrazeBlackParent: {
    alignSelf: "stretch",
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  frameGroup: {
    top: 71,
  },
  homeIndicator: {
    top: 7,
    left: 176,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    width: 42,
  },
  frameParent: {
    top: 64,
    left: 0,
    backgroundColor: Color.white,
    height: 790,
    overflow: "hidden",
    borderRadius: Border.br_3xl,
    position: "absolute",
    width: 393,
  },
  statusBarIcon: {
    top: 22,
    left: 55,
    width: 302,
    height: 12,
    position: "absolute",
  },
  homeIndicator1: {
    top: 838,
    left: 130,
    width: 134,
    backgroundColor: Color.colorBlack,
  },
  settings: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorBlack,
  },
})
