import { Dimensions } from "react-native";
import { Default_CoreStyles } from "./styles/Default_CoreStyles";
import { Large_CoreStyles } from "./styles/Large_CoreStyles";
import { Medium_CoreStyles } from "./styles/Medium_CoreStyles";
import { Small_CoreStyles } from "./styles/Small_CoreStyles";
import { XLarge_CoreStyles } from "./styles/XLarge_CoreStyles";
import { XXLarge_CoreStyles } from "./styles/XXLarge_CoreStyles";

export function getEffectiveStyle(classNames) {
  /**
   * Step 1: Get default styles(xs) for className
   * Step 1: Get all styles object filter by classNames and Dimensions
   */

  // TODO Sanitize class names - remove duplicates
  // classNames = sanitizeClassNames(classNames);

  /* let width =
    Platform.OS == "web"
      ? Dimensions.get("window").width
      : Dimensions.get("screen").width; */
  let width = Dimensions.get("window").width;
  console.log(
    `+++++++++++++++++++[ width = ${width} ]+++++++++++++++++++++++++`
  );
  let styleObject = [];

  classNames.forEach((className, index) => {
    /**
     * TODO: Framework related discussion needed
     *
     * 1. condition must have range
     * 2. only one condition will apply based on width
     *    a. we can have else if statements
     *    b. we can return if any one satisfied
     */

    console.log(`Looking for className = ${className}`);

    // Get default styles
    if (getDefaultStyle(className)) {
      styleObject.push(getDefaultStyle(className));
      console.log(`Found any class in default for ${className}`);
      // console.log(`IN SM ${className} ==`);
      // console.log(styleObject);
    } else {
      console.log(`Not found any class in default for ${className}`);
    }
    // Get width specific styles
    if (width >= 576) {
      if (getSmallStyle(className)) {
        styleObject.push(getSmallStyle(className));
        console.log(`Found any class in SM for ${className}`);
        // console.log(`IN SM ${className} ==`);
        // console.log(styleObject);
      } else {
        console.log(`Not found any class in SM for ${className}`);
      }
    }
    if (width >= 768) {
      if (getMediumStyle(className)) {
        styleObject.push(getMediumStyle(className));
        console.log(`Found any class in MD for ${className}`);
        // console.log(`IN MD ${className} ==`);
        // console.log(styleObject);
      } else {
        console.log(`Not found any class in MD for ${className}`);
      }
    }
    if (width >= 992) {
      if (getLargeStyle(className)) {
        styleObject.push(getLargeStyle(className));
        console.log(`Found any class in LG for ${className}`);
        // console.log(`IN LG ${className} ==`);
        // console.log(styleObject);
      } else {
        console.log(`Not found any class in LG for ${className}`);
      }
    }
    if (width >= 1200) {
      if (getXLargeStyle(className)) {
        styleObject.push(getXLargeStyle(className));
        console.log(`Found any class in XL for ${className}`);
        // console.log(`IN XL ${className} ==`);
        // console.log(styleObject);
      } else {
        console.log(`Not found any class in XL for ${className}`);
      }
    }
    if (width >= 1400) {
      if (getXXLargeStyle(className)) {
        styleObject.push(getXXLargeStyle(className));
        console.log(`Found any class in XXL for ${className}`);
        // console.log(`IN XXL ${className} ==`);
        // console.log(styleObject);
      } else {
        console.log(`Not found any class in XXL for ${className}`);
      }
    }
  });

  // console.log("Combined ==");
  // console.log(styleObject);

  return styleObject;
}

const getDefaultStyle = (className) => {
  return [Default_CoreStyles.devBorder, Default_CoreStyles[className]];
};
const getSmallStyle = (className) => {
  return Small_CoreStyles[className];
};
const getMediumStyle = (className) => {
  return Medium_CoreStyles[className];
};
const getLargeStyle = (className) => {
  return Large_CoreStyles[className];
};
const getXLargeStyle = (className) => {
  return XLarge_CoreStyles[className];
};
const getXXLargeStyle = (className) => {
  return XXLarge_CoreStyles[className];
};
