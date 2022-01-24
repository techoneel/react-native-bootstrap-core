import React from "react";
import CoreClasses from "../../CoreClasses";
import CoreView from "./CoreView";

export default function Row(props) {
  return (
    <CoreView coreClasses={props.coreClasses || [CoreClasses.LAYOUT.ROW]}>
      {props.children}
    </CoreView>
  );
}
