import React from "react";
import { Avatar, Colors, Portal } from "react-native-paper";
import { connect } from "react-redux";
import CoreView from "../../../core/components/layout/CoreView";
import CoreClasses from "../../../core/CoreClasses";

const CoreLoader = (props) => {
  return props.loading == true ? (
    <Portal>
      <CoreView
        coreClasses={[
          CoreClasses.WIDTH.VW_100,
          CoreClasses.HEIGHT.MIN_VH_100,
          CoreClasses.WIDTH.MIN_VW_100,
          CoreClasses.JUSTIFY_CONTENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.ALIGN_ITEMS.ALIGN_ITEMS_CENTER,
          CoreClasses.UTILITIES.COLORS.BG_SECONDARY,
          CoreClasses.UTILITIES.OPACITY.OPACITY_75,
        ]}
      >
        <Avatar.Image
          size={48}
          source={require("../../../assets/loading-buffering.gif")}
          style={{
            backgroundColor: Colors.transparent,
            resizeMode: "cover",
          }}
        />
      </CoreView>
    </Portal>
  ) : (
    <></>
  );
};

function mapStateToProps(state) {
  const { loading } = state.loader;
  return {
    loading,
  };
}

export default connect(mapStateToProps)(CoreLoader);
