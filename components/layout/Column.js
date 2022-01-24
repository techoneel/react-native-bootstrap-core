import React from "react";
import CoreClasses from "../../CoreClasses";
import CoreView from "./CoreView";

export default function Column(props) {
  return (
    <CoreView coreClasses={props.coreClasses || [CoreClasses.LAYOUT.COL]}>
      {props.children}
    </CoreView>
  );
}
