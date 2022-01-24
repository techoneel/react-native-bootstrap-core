import React from "react";
import CoreClasses from "../../CoreClasses";
import CoreView from "./CoreView";

export default function Container(props) {
  return (
    <CoreView coreClasses={props.coreClasses || [CoreClasses.LAYOUT.CONTAINER]}>
      {props.children}
    </CoreView>
  );
}
