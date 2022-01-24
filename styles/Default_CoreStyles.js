import { Dimensions } from "react-native";
import { bsRoot, remToPx } from "./BsStylesConstants";

const { height, width } = Dimensions.get("window");

const containerStyle = {
  display: "flex",
  width: "100%",
  paddingRight: 12,
  paddingLeft: 12,
  marginRight: "auto",
  marginLeft: "auto",
};

const colAutoStyle = {
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: "auto",
};

const heading = {
  marginTop: 0,
  marginVertically: remToPx(0.5),
  fontWeight: "500",
  // lineHeight: "1.2",
};

export const Default_CoreStyles = {
  devBorder: {
    /* borderWidth: 1,
    borderColor: "#f00",
    margin: 1, */
  },

  container: containerStyle,
  container_fluid: containerStyle,
  container_sm: containerStyle,
  container_md: containerStyle,
  container_lg: containerStyle,
  container_xl: containerStyle,
  container_xxl: containerStyle,

  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 0,
  },

  col: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: "0%",
  },
  col_auto: {
    ...colAutoStyle,
    width: "auto",
  },
  col_1: {
    ...colAutoStyle,
    width: "8.3333%",
  },
  col_2: {
    ...colAutoStyle,
    width: "16.66666667%",
  },
  col_3: {
    ...colAutoStyle,
    width: "25%",
  },
  col_4: {
    ...colAutoStyle,
    width: "33.33333333%",
  },
  col_5: {
    ...colAutoStyle,
    width: "41.66666667%",
  },
  col_6: {
    ...colAutoStyle,
    width: "50%",
  },
  col_7: {
    ...colAutoStyle,
    width: "58.33333333%",
  },
  col_8: {
    ...colAutoStyle,
    width: "66.66666667%",
  },
  col_9: {
    ...colAutoStyle,
    width: "75%",
  },
  col_10: {
    ...colAutoStyle,
    width: "83.33333333%",
  },
  col_11: {
    ...colAutoStyle,
    width: "91.66666667%",
  },
  col_12: {
    ...colAutoStyle,
    width: "100%",
  },

  offset_1: {
    marginLeft: "8.333333%",
  },

  offset_2: {
    marginLeft: "16.666667%",
  },

  offset_3: {
    marginLeft: "25%",
  },

  offset_4: {
    marginLeft: "33.333333%",
  },

  offset_5: {
    marginLeft: "41.666667%",
  },

  offset_6: {
    marginLeft: "50%",
  },

  offset_7: {
    marginLeft: "58.333333%",
  },

  offset_8: {
    marginLeft: "66.666667%",
  },

  offset_9: {
    marginLeft: "75%",
  },

  offset_10: {
    marginLeft: "83.333333%",
  },

  offset_11: {
    marginLeft: "91.666667%",
  },

  m_0: {
    margin: 0,
  },
  m_1: {
    margin: 4,
  },
  m_2: {
    margin: 8,
  },
  m_3: {
    margin: 16,
  },
  m_4: {
    margin: 24,
  },
  m_5: {
    margin: 48,
  },
  m_auto: {
    margin: "auto",
  },

  me_0: {
    marginEnd: 0,
  },
  me_1: {
    marginEnd: 4,
  },
  me_2: {
    marginEnd: 8,
  },
  me_3: {
    marginEnd: 16,
  },
  me_4: {
    marginEnd: 24,
  },
  me_5: {
    marginEnd: 48,
  },
  me_auto: {
    marginEnd: "auto",
  },

  ms_0: {
    marginStart: 0,
  },
  ms_1: {
    marginStart: 4,
  },
  ms_2: {
    marginStart: 8,
  },
  ms_3: {
    marginStart: 16,
  },
  ms_4: {
    marginStart: 24,
  },
  ms_5: {
    marginStart: 48,
  },
  ms_auto: {
    marginStart: "auto",
  },

  mx_0: {
    marginHorizontal: 0,
  },
  mx_1: {
    marginHorizontal: 4,
  },
  mx_2: {
    marginHorizontal: 8,
  },
  mx_3: {
    marginHorizontal: 16,
  },
  mx_4: {
    marginHorizontal: 24,
  },
  mx_5: {
    marginHorizontal: 48,
  },
  mx_auto: {
    marginHorizontal: "auto",
  },

  my_0: {
    marginVertical: 0,
  },
  my_1: {
    marginVertical: 4,
  },
  my_2: {
    marginVertical: 8,
  },
  my_3: {
    marginVertical: 16,
  },
  my_4: {
    marginVertical: 24,
  },
  my_5: {
    marginVertical: 48,
  },
  my_auto: {
    marginVertical: "auto",
  },

  mb_0: {
    marginBottom: 0,
  },
  mb_1: {
    marginBottom: 4,
  },
  mb_2: {
    marginBottom: 8,
  },
  mb_3: {
    marginBottom: 16,
  },
  mb_4: {
    marginBottom: 24,
  },
  mb_5: {
    marginBottom: 48,
  },
  mb_auto: {
    marginBottom: "auto",
  },

  mt_0: {
    marginTop: 0,
  },
  mt_1: {
    marginTop: 4,
  },
  mt_2: {
    marginTop: 8,
  },
  mt_3: {
    marginTop: 16,
  },
  mt_4: {
    marginTop: 24,
  },
  mt_5: {
    marginTop: 48,
  },
  mt_auto: {
    marginTop: "auto",
  },

  p_0: {
    padding: 0,
  },
  p_1: {
    padding: 4,
  },
  p_2: {
    padding: 8,
  },
  p_3: {
    padding: 16,
  },
  p_4: {
    padding: 24,
  },
  p_5: {
    padding: 48,
  },
  p_auto: {
    padding: "auto",
  },

  pe_0: {
    paddingEnd: 0,
  },
  pe_1: {
    paddingEnd: 4,
  },
  pe_2: {
    paddingEnd: 8,
  },
  pe_3: {
    paddingEnd: 16,
  },
  pe_4: {
    paddingEnd: 24,
  },
  pe_5: {
    paddingEnd: 48,
  },
  pe_auto: {
    paddingEnd: "auto",
  },

  ps_0: {
    paddingStart: 0,
  },
  ps_1: {
    paddingStart: 4,
  },
  ps_2: {
    paddingStart: 8,
  },
  ps_3: {
    paddingStart: 16,
  },
  ps_4: {
    paddingStart: 24,
  },
  ps_5: {
    paddingStart: 48,
  },
  ps_auto: {
    paddingStart: "auto",
  },

  px_0: {
    paddingHorizontal: 0,
  },
  px_1: {
    paddingHorizontal: 4,
  },
  px_2: {
    paddingHorizontal: 8,
  },
  px_3: {
    paddingHorizontal: 16,
  },
  px_4: {
    paddingHorizontal: 24,
  },
  px_5: {
    paddingHorizontal: 48,
  },
  px_auto: {
    paddingHorizontal: "auto",
  },

  py_0: {
    paddingVertical: 0,
  },
  py_1: {
    paddingVertical: 4,
  },
  py_2: {
    paddingVertical: 8,
  },
  py_3: {
    paddingVertical: 16,
  },
  py_4: {
    paddingVertical: 24,
  },
  py_5: {
    paddingVertical: 48,
  },
  py_auto: {
    paddingVertical: "auto",
  },

  pb_0: {
    paddingBottom: 0,
  },
  pb_1: {
    paddingBottom: 4,
  },
  pb_2: {
    paddingBottom: 8,
  },
  pb_3: {
    paddingBottom: 16,
  },
  pb_4: {
    paddingBottom: 24,
  },
  pb_5: {
    paddingBottom: 48,
  },
  pb_auto: {
    paddingBottom: "auto",
  },

  pt_0: {
    paddingTop: 0,
  },
  pt_1: {
    paddingTop: 4,
  },
  pt_2: {
    paddingTop: 8,
  },
  pt_3: {
    paddingTop: 16,
  },
  pt_4: {
    paddingTop: 24,
  },
  pt_5: {
    paddingTop: 48,
  },
  pt_auto: {
    paddingTop: "auto",
  },

  /**
   * Flex
   */
  flex_row: {
    flexDirection: "row",
  },

  flex_column: {
    flexDirection: "column",
  },

  flex_row_reverse: {
    flexDirection: "row-reverse",
  },

  flex_column_reverse: {
    flexDirection: "column-reverse",
  },

  flex_wrap: {
    flexWrap: "wrap",
  },

  flex_no_wrap: {
    flexWrap: "nowrap",
  },

  flex_wrap_reverse: {
    flexWrap: "wrap-reverse",
  },

  flex_fill: {
    flex: 1,
  },

  flex_grow_0: {
    flexGrow: 0,
  },

  flex_grow_1: {
    flexGrow: 1,
  },

  flex_shrink_0: {
    flexShrink: 0,
  },

  flex_shrink_1: {
    flexShrink: 1,
  },
  // Justify Content
  justify_content_start: {
    justifyContent: "flex-start",
  },

  justify_content_end: {
    justifyContent: "flex-end",
  },

  justify_content_center: {
    justifyContent: "center",
  },

  justify_content_between: {
    justifyContent: "space-between",
  },

  justify_content_around: {
    justifyContent: "space-around",
  },

  // Align Items
  align_items_start: {
    alignItems: "flex-start",
  },

  align_items_end: {
    alignItems: "flex-end",
  },

  align_items_center: {
    alignItems: "center",
  },

  align_items_baseline: {
    alignItems: "baseline",
  },

  align_items_stretch: {
    alignItems: "stretch",
  },

  // Align Content
  align_content_start: {
    alignContent: "flex-start",
  },

  align_content_end: {
    alignContent: "flex-end",
  },

  align_content_center: {
    alignContent: "center",
  },

  align_content_between: {
    alignContent: "space-between",
  },

  align_content_around: {
    alignContent: "space-around",
  },

  align_content_stretch: {
    alignContent: "stretch",
  },

  // Align Self
  align_self_auto: {
    alignSelf: "auto",
  },

  align_self_start: {
    alignSelf: "flex-start",
  },

  align_self_end: {
    alignSelf: "flex-end",
  },

  align_self_center: {
    alignSelf: "center",
  },

  align_self_baseline: {
    alignSelf: "baseline",
  },

  align_self_stretch: {
    alignSelf: "stretch",
  },

  //image
  img: {
    verticalAlign: "middle",
  },

  img_fluid: {
    maxWidth: "100%",
    height: "auto",
  },

  img_thumbnail: {
    padding: remToPx(0.25),
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#dee2e6",
    borderRadius: remToPx(0.25),
    maxWidth: "100%",
    height: "auto",
  },

  /**
   * Width & Height
   */
  w_25: {
    width: "25%",
  },

  w_50: {
    width: "50%",
  },

  w_75: {
    width: "75%",
  },

  w_100: {
    width: "100%",
  },

  w_auto: {
    width: "auto",
  },

  mw_100: {
    max_width: width,
  },

  vw_100: {
    width: width,
  },

  min_vw_100: {
    min_width: width,
  },

  h_10: {
    height: "10%",
  },

  h_15: {
    height: "15%",
  },

  h_25: {
    height: "25%",
  },

  h_50: {
    height: "50%",
  },

  h_60: {
    height: "60%",
  },

  h_65: {
    height: "65%",
  },

  h_75: {
    height: "75%",
  },

  h_100: {
    height: "100%",
  },

  h_auto: {
    height: "auto",
  },

  mh_100: {
    maxHeight: height,
  },

  vh_100: {
    height: height,
  },

  min_vh_80: {
    minHeight: height * 0.8,
  },

  min_vh_100: {
    minHeight: height,
  },

  /**
   * Heading
   */
  h1: {
    ...heading,
    fontSize: remToPx(1.375) + width * 0.015,
  },
  h2: {
    ...heading,
    fontSize: remToPx(1.325) + width * 0.009,
  },
  h3: {
    ...heading,
    fontSize: remToPx(1.3) + width * 0.006,
  },
  h4: {
    ...heading,
    fontSize: remToPx(1.275) + width * 0.003,
  },
  h5: {
    ...heading,
    fontSize: remToPx(1.25),
  },
  h6: {
    ...heading,
    fontSize: remToPx(1),
  },

  /**
   * Colors
   */
  text_primary: {
    color: bsRoot.__bs_primary,
  },
  text_secondary: {
    color: bsRoot.__bs_secondary,
  },
  text_success: {
    color: bsRoot.__bs_success,
  },
  text_danger: {
    color: bsRoot.__bs_danger,
  },
  text_warning: {
    color: bsRoot.__bs_warning,
  },
  text_info: {
    color: bsRoot.__bs_info,
  },
  text_light: {
    color: bsRoot.__bs_light,
  },
  text_dark: {
    color: bsRoot.__bs_dark,
  },
  text_white: {
    color: bsRoot.__bs_white,
  },

  bg_primary: {
    backgroundColor: bsRoot.__bs_primary,
  },
  bg_secondary: {
    backgroundColor: bsRoot.__bs_secondary,
  },
  bg_success: {
    backgroundColor: bsRoot.__bs_success,
  },
  bg_danger: {
    backgroundColor: bsRoot.__bs_danger,
  },
  bg_warning: {
    backgroundColor: bsRoot.__bs_warning,
  },
  bg_info: {
    backgroundColor: bsRoot.__bs_info,
  },
  bg_light: {
    backgroundColor: bsRoot.__bs_light,
  },
  bg_dark: {
    backgroundColor: bsRoot.__bs_dark,
  },
  bg_white: {
    backgroundColor: bsRoot.__bs_white,
  },
  bg_gradient: {
    backgroundImage: bsRoot.__bs_gradient,
  },

  /**
   * Opacity
   */
  opacity_0: {
    opacity: 0,
  },
  opacity_25: {
    opacity: 0.25,
  },
  opacity_50: {
    opacity: 0.5,
  },
  opacity_75: {
    opacity: 0.75,
  },
  opacity_100: {
    opacity: 1,
  },

  /**
   * Fixed Top & Bottom
   */
  fixed_top: {
    // position: "fixed",
    position: "absolute",
    alignSelf: "flex-start",
    top: 0,
    right: 0,
    left: 0,
    zIndex: 1030,
  },

  fixed_bottom: {
    // position: "fixed",
    position: "absolute",
    alignSelf: "flex-end",
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1030,
  },

  /**
   * Text
   */
  text_start: {
    textAlign: "left",
  },

  text_end: {
    textAlign: "right",
  },

  text_center: {
    textAlign: "center",
  },
  /**
   * Border
   */
  border: {
    borderWidth: 1,
    borderColor: "#dee2e6",
  },

  border_0: {
    borderWidth: 0,
  },

  border_top: {
    borderTopWidth: 1,
    borderColor: "#dee2e6",
  },

  border_top_0: {
    borderTopWidth: 0,
  },

  border_end: {
    borderRightWidth: 1,
    borderColor: "#dee2e6",
  },

  border_end_0: {
    borderRightWidth: 0,
  },

  border_bottom: {
    borderBottomWidth: 1,
    borderColor: "#dee2e6",
  },

  border_bottom_0: {
    borderBottomWidth: 0,
  },

  border_start: {
    borderLeftWidth: 1,
    borderColor: "#dee2e6",
  },

  border_start_0: {
    borderLeftWidth: 0,
  },

  border_primary: {
    borderColor: "#0d6efd",
  },

  border_secondary: {
    borderColor: "#6c757d",
  },

  border_success: {
    borderColor: "#198754",
  },

  border_info: {
    borderColor: "#0dcaf0",
  },

  border_warning: {
    borderColor: "#ffc107",
  },

  border_danger: {
    borderColor: "#dc3545",
  },

  border_light: {
    borderColor: "#f8f9fa",
  },

  border_dark: {
    borderColor: "#212529",
  },

  border_white: {
    borderColor: "#fff",
  },

  border_1: {
    borderWidth: 1,
  },

  border_2: {
    borderWidth: 2,
  },

  border_3: {
    borderWidth: 3,
  },

  border_4: {
    borderWidth: 4,
  },

  border_5: {
    borderWidth: 5,
  },

  rounded: {
    borderRadius: remToPx(0.25),
  },

  rounded_0: {
    borderRadius: remToPx(0),
  },

  rounded_1: {
    borderRadius: remToPx(0.2),
  },

  rounded_2: {
    borderRadius: remToPx(0.25),
  },

  rounded_3: {
    borderRadius: remToPx(0.3),
  },

  rounded_circle: {
    borderRadius: "50%",
  },

  rounded_pill: {
    borderRadius: remToPx(50),
  },

  rounded_top: {
    borderTopLeftRadius: remToPx(0.25),
    borderTopRightRadius: remToPx(0.25),
  },

  rounded_end: {
    borderTopRightRadius: remToPx(0.25),
    borderBottomRightRadius: remToPx(0.25),
  },

  rounded_bottom: {
    borderBottomRightRadius: remToPx(0.25),
    borderBottomLeftRadius: remToPx(0.25),
  },

  rounded_start: {
    borderBottomLeftRadius: remToPx(0.25),
    borderTopLeftRadius: remToPx(0.25),
  },

  d_none: { display: "none" },
  d_block: { display: "flex" },
};
