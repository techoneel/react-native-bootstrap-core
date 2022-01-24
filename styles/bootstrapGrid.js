/*!
 * Bootstrap Grid v4.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
import { StyleSheet, Dimensions } from "react-native";

let screenWidth = Dimensions.get("window").width;

const bootstrapGridStyles = StyleSheet.create({
  container: {
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
    marginRight: "auto",
    marginLeft: "auto",
  },

  ...(screenWidth >= 576 && {
    container: {
      maxWidth: 540,
    },
  }),

  ...(screenWidth >= 768 && {
    container: {
      maxWidth: 720,
    },
  }),

  ...(screenWidth >= 992 && {
    container: {
      maxWidth: 960,
    },
  }),

  ...(screenWidth >= 1200 && {
    container: {
      maxWidth: 1140,
    },
  }),

  row: {
    display: "flex",
    flexWrap: "wrap",
    marginRight: -15,
    marginLeft: -15,
  },

  no_gutters: {
    marginRight: 0,
    marginLeft: 0,
  },

  col: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_sm_1: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_sm_2: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_sm_3: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_sm_4: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_sm_5: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_sm_6: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_sm_7: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_sm_8: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_sm_9: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_sm_10: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_sm_11: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_sm_12: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_sm: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_sm_auto: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_md_1: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_md_2: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_md_3: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_md_4: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_md_5: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_md_6: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_md_7: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_md_8: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_md_9: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_md_10: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_md_11: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_md_12: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_md: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_md_auto: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_lg_1: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_lg_2: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_lg_3: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_lg_4: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_lg_5: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_lg_6: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_lg_7: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_lg_8: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_lg_9: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_lg_10: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_lg_11: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_lg_12: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_lg: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_lg_auto: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_xl_1: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_xl_2: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_xl_3: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_xl_4: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_xl_5: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_xl_6: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_xl_7: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_xl_8: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_xl_9: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_xl_10: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_xl_11: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_xl_12: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_xl: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col_xl_auto: {
    position: "relative",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },

  col: {
    flexBasis: 0,
    flexGrow: 1,
    maxWidth: "100%",
  },

  col_auto: {
    flex: 1,
    width: "auto",
    maxWidth: "100%",
  },

  col_1: {
    flex: 1,
    maxWidth: "8.333333%",
  },

  col_2: {
    flex: 1,
    maxWidth: "16.666667%",
  },

  col_3: {
    flex: 1,
    maxWidth: "25%",
  },

  col_4: {
    flex: 1,
    maxWidth: "33.333333%",
  },

  col_5: {
    flex: 1,
    maxWidth: "41.666667%",
  },

  col_6: {
    flex: 1,
    maxWidth: "50%",
  },

  col_7: {
    flex: 1,
    maxWidth: "58.333333%",
  },

  col_8: {
    flex: 1,
    maxWidth: "66.666667%",
  },

  col_9: {
    flex: 1,
    maxWidth: "75%",
  },

  col_10: {
    flex: 1,
    maxWidth: "83.333333%",
  },

  col_11: {
    flex: 1,
    maxWidth: "91.666667%",
  },

  col_12: {
    flex: 1,
    maxWidth: "100%",
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

  ...(screenWidth >= 576 && {
    col_sm: {
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: "100%",
    },

    col_sm_auto: {
      flex: 1,
      width: "auto",
      maxWidth: "100%",
    },
    col_sm_1: {
      flex: 1,
      maxWidth: "8.333333%",
    },
    col_sm_2: {
      flex: 1,
      maxWidth: "16.666667%",
    },
    col_sm_3: {
      flex: 1,
      maxWidth: "25%",
    },
    col_sm_4: {
      flex: 1,
      maxWidth: "33.333333%",
    },
    col_sm_5: {
      flex: 1,
      maxWidth: "41.666667%",
    },
    col_sm_6: {
      flex: 1,
      maxWidth: "50%",
    },
    col_sm_7: {
      flex: 1,
      maxWidth: "58.333333%",
    },
    col_sm_8: {
      flex: 1,
      maxWidth: "66.666667%",
    },
    col_sm_9: {
      flex: 1,
      maxWidth: "75%",
    },
    col_sm_10: {
      flex: 1,
      maxWidth: "83.333333%",
    },
    col_sm_11: {
      flex: 1,
      maxWidth: "91.666667%",
    },
    col_sm_12: {
      flex: 1,
      maxWidth: "100%",
    },

    offset_sm_0: {
      marginLeft: 0,
    },
    offset_sm_1: {
      marginLeft: "8.333333%",
    },
    offset_sm_2: {
      marginLeft: "16.666667%",
    },
    offset_sm_3: {
      marginLeft: "25%",
    },
    offset_sm_4: {
      marginLeft: "33.333333%",
    },
    offset_sm_5: {
      marginLeft: "41.666667%",
    },
    offset_sm_6: {
      marginLeft: "50%",
    },
    offset_sm_7: {
      marginLeft: "58.333333%",
    },
    offset_sm_8: {
      marginLeft: "66.666667%",
    },
    offset_sm_9: {
      marginLeft: "75%",
    },
    offset_sm_10: {
      marginLeft: "83.333333%",
    },
    offset_sm_11: {
      marginLeft: "91.666667%",
    },
  }),

  ...(screenWidth >= 768 && {
    col_md: {
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: "100%",
    },
    col_md_auto: {
      flex: 1,
      width: "auto",
      maxWidth: "100%",
    },
    col_md_1: {
      flex: 1,
      maxWidth: "8.333333%",
    },
    col_md_2: {
      flex: 1,
      maxWidth: "16.666667%",
    },
    col_md_3: {
      flex: 1,
      maxWidth: "25%",
    },
    col_md_4: {
      flex: 1,
      maxWidth: "33.333333%",
    },
    col_md_5: {
      flex: 1,
      maxWidth: "41.666667%",
    },
    col_md_6: {
      flex: 1,
      maxWidth: "50%",
    },
    col_md_7: {
      flex: 1,
      maxWidth: "58.333333%",
    },
    col_md_8: {
      flex: 1,
      maxWidth: "66.666667%",
    },
    col_md_9: {
      flex: 1,
      maxWidth: "75%",
    },
    col_md_10: {
      flex: 1,
      maxWidth: "83.333333%",
    },
    col_md_11: {
      flex: 1,
      maxWidth: "91.666667%",
    },
    col_md_12: {
      flex: 1,
      maxWidth: "100%",
    },
    offset_md_0: {
      marginLeft: 0,
    },
    offset_md_1: {
      marginLeft: "8.333333%",
    },
    offset_md_2: {
      marginLeft: "16.666667%",
    },
    offset_md_3: {
      marginLeft: "25%",
    },
    offset_md_4: {
      marginLeft: "33.333333%",
    },
    offset_md_5: {
      marginLeft: "41.666667%",
    },
    offset_md_6: {
      marginLeft: "50%",
    },
    offset_md_7: {
      marginLeft: "58.333333%",
    },
    offset_md_8: {
      marginLeft: "66.666667%",
    },
    offset_md_9: {
      marginLeft: "75%",
    },
    offset_md_10: {
      marginLeft: "83.333333%",
    },
    offset_md_11: {
      marginLeft: "91.666667%",
    },
  }),

  ...(screenWidth >= 992 && {
    col_lg: {
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: "100%",
    },
    col_lg_auto: {
      flex: 1,
      width: "auto",
      maxWidth: "100%",
    },
    col_lg_1: {
      flex: 1,
      maxWidth: "8.333333%",
    },
    col_lg_2: {
      flex: 1,
      maxWidth: "16.666667%",
    },
    col_lg_3: {
      flex: 1,
      maxWidth: "25%",
    },
    col_lg_4: {
      flex: 1,
      maxWidth: "33.333333%",
    },
    col_lg_5: {
      flex: 1,
      maxWidth: "41.666667%",
    },
    col_lg_6: {
      flex: 1,
      maxWidth: "50%",
    },
    col_lg_7: {
      flex: 1,
      maxWidth: "58.333333%",
    },
    col_lg_8: {
      flex: 1,
      maxWidth: "66.666667%",
    },
    col_lg_9: {
      flex: 1,
      maxWidth: "75%",
    },
    col_lg_10: {
      flex: 1,
      maxWidth: "83.333333%",
    },
    col_lg_11: {
      flex: 1,
      maxWidth: "91.666667%",
    },
    col_lg_12: {
      flex: 1,
      maxWidth: "100%",
    },
    offset_lg_0: {
      marginLeft: 0,
    },
    offset_lg_1: {
      marginLeft: "8.333333%",
    },
    offset_lg_2: {
      marginLeft: "16.666667%",
    },
    offset_lg_3: {
      marginLeft: "25%",
    },
    offset_lg_4: {
      marginLeft: "33.333333%",
    },
    offset_lg_5: {
      marginLeft: "41.666667%",
    },
    offset_lg_6: {
      marginLeft: "50%",
    },
    offset_lg_7: {
      marginLeft: "58.333333%",
    },
    offset_lg_8: {
      marginLeft: "66.666667%",
    },
    offset_lg_9: {
      marginLeft: "75%",
    },
    offset_lg_10: {
      marginLeft: "83.333333%",
    },
    offset_lg_11: {
      marginLeft: "91.666667%",
    },
  }),

  ...(screenWidth >= 1200 && {
    col_xl: {
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: "100%",
    },
    col_xl_auto: {
      flex: 1,
      width: "auto",
      maxWidth: "100%",
    },
    col_xl_1: {
      flex: 1,
      maxWidth: "8.333333%",
    },
    col_xl_2: {
      flex: 1,
      maxWidth: "16.666667%",
    },
    col_xl_3: {
      flex: 1,
      maxWidth: "25%",
    },
    col_xl_4: {
      flex: 1,
      maxWidth: "33.333333%",
    },
    col_xl_5: {
      flex: 1,
      maxWidth: "41.666667%",
    },
    col_xl_6: {
      flex: 1,
      maxWidth: "50%",
    },
    col_xl_7: {
      flex: 1,
      maxWidth: "58.333333%",
    },
    col_xl_8: {
      flex: 1,
      maxWidth: "66.666667%",
    },
    col_xl_9: {
      flex: 1,
      maxWidth: "75%",
    },
    col_xl_10: {
      flex: 1,
      maxWidth: "83.333333%",
    },
    col_xl_11: {
      flex: 1,
      maxWidth: "91.666667%",
    },
    col_xl_12: {
      flex: 1,
      maxWidth: "100%",
    },
    offset_xl_0: {
      marginLeft: 0,
    },
    offset_xl_1: {
      marginLeft: "8.333333%",
    },
    offset_xl_2: {
      marginLeft: "16.666667%",
    },
    offset_xl_3: {
      marginLeft: "25%",
    },
    offset_xl_4: {
      marginLeft: "33.333333%",
    },
    offset_xl_5: {
      marginLeft: "41.666667%",
    },
    offset_xl_6: {
      marginLeft: "50%",
    },
    offset_xl_7: {
      marginLeft: "58.333333%",
    },
    offset_xl_8: {
      marginLeft: "66.666667%",
    },
    offset_xl_9: {
      marginLeft: "75%",
    },
    offset_xl_10: {
      marginLeft: "83.333333%",
    },
    offset_xl_11: {
      marginLeft: "91.666667%",
    },
  }),

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

  ...(screenWidth >= 576 && {
    flex_sm_row: {
      flexDirection: "row",
    },
    flex_sm_column: {
      flexDirection: "column",
    },
    flex_sm_row_everse: {
      flexDirection: "row-reverse",
    },
    flex_sm_column_reverse: {
      flexDirection: "column-reverse",
    },
    flex_sm_wrap: {
      flexWrap: "wrap",
    },
    flex_sm_nowrap: {
      flexWrap: "nowrap",
    },
    flex_smWrapReverse: {
      flexWrap: "wrap-reverse",
    },
    flex_sm_fill: {
      flex: 1,
    },
    flex_smGrow_0: {
      flexGrow: 0,
    },
    flex_sm_grow_1: {
      flexGrow: 1,
    },
    flex_sm_shrink_0: {
      flexShrink: 0,
    },
    flex_sm_shrink_1: {
      flexShrink: 1,
    },
    justify_content_sm_start: {
      justifyContent: "flex-start",
    },
    justify_content_sm_end: {
      justifyContent: "flex-end",
    },
    justify_content_sm_center: {
      justifyContent: "center",
    },
    justify_content_sm_between: {
      justifyContent: "space-between",
    },
    justify_content_sm_around: {
      justifyContent: "space-around",
    },
    align_items_sm_start: {
      alignItems: "flex-start",
    },
    align_items_sm_end: {
      alignItems: "flex-end",
    },
    align_items_sm_center: {
      alignItems: "center",
    },
    align_items_sm_baseline: {
      alignItems: "baseline",
    },
    align_items_sm_stretch: {
      alignItems: "stretch",
    },
    align_content_sm_start: {
      alignContent: "flex-start",
    },
    align_content_sm_end: {
      alignContent: "flex-end",
    },
    align_content_sm_center: {
      alignContent: "center",
    },
    align_content_sm_between: {
      alignContent: "space-between",
    },
    align_content_sm_around: {
      alignContent: "space-around",
    },
    align_content_sm_stretch: {
      alignContent: "stretch",
    },
    align_self_sm_auto: {
      alignSelf: "auto",
    },
    align_self_sm_start: {
      alignSelf: "flex-start",
    },
    align_self_sm_end: {
      alignSelf: "flex-end",
    },
    align_self_sm_center: {
      alignSelf: "center",
    },
    align_self_sm_baseline: {
      alignSelf: "baseline",
    },
    align_self_sm_stretch: {
      alignSelf: "stretch",
    },
  }),

  ...(screenWidth >= 768 && {
    flex_md_row: {
      flexDirection: "row",
    },
    flex_mdColumn: {
      flexDirection: "column",
    },
    flex_md_row_reverse: {
      flexDirection: "row-reverse",
    },
    flex_md_column_reverse: {
      flexDirection: "column-reverse",
    },
    flex_md_wrap: {
      flexWrap: "wrap",
    },
    flex_md_nowrap: {
      flexWrap: "nowrap",
    },
    flex_md_wrap_reverse: {
      flexWrap: "wrap-reverse",
    },
    flex_md_fill: {
      flex: 1,
    },
    flex_md_grow_0: {
      flexGrow: 0,
    },
    flex_md_grow_1: {
      flexGrow: 1,
    },
    flex_md_shrink_0: {
      flexShrink: 0,
    },
    flex_md_shrink_1: {
      flexShrink: 1,
    },
    justify_content_md_start: {
      justifyContent: "flex-start",
    },
    justify_content_md_end: {
      justifyContent: "flex-end",
    },
    justify_content_md_center: {
      justifyContent: "center",
    },
    justify_content_md_between: {
      justifyContent: "space-between",
    },
    justify_content_md_around: {
      justifyContent: "space-around",
    },
    align_items_md_start: {
      alignItems: "flex-start",
    },
    align_items_md_end: {
      alignItems: "flex-end",
    },
    align_items_md_center: {
      alignItems: "center",
    },
    align_items_md_baseline: {
      alignItems: "baseline",
    },
    align_items_md_stretch: {
      alignItems: "stretch",
    },
    align_content_md_start: {
      alignContent: "flex-start",
    },
    align_content_md_end: {
      alignContent: "flex-end",
    },
    align_content_md_center: {
      alignContent: "center",
    },
    align_content_md_between: {
      alignContent: "space-between",
    },
    align_content_md_around: {
      alignContent: "space-around",
    },
    align_content_md_stretch: {
      alignContent: "stretch",
    },
    align_self_md_auto: {
      alignSelf: "auto",
    },
    align_self_md_start: {
      alignSelf: "flex-start",
    },
    align_self_md_end: {
      alignSelf: "flex-end",
    },
    align_self_md_center: {
      alignSelf: "center",
    },
    align_self_md_baseline: {
      alignSelf: "baseline",
    },
    align_self_md_stretch: {
      alignSelf: "stretch",
    },
  }),

  ...(screenWidth >= 992 && {
    flex_lg_row: {
      flexDirection: "row",
    },
    flex_lgColumn: {
      flexDirection: "column",
    },
    flex_lg_row_reverse: {
      flexDirection: "row-reverse",
    },
    flex_lgColumnReverse: {
      flexDirection: "column-reverse",
    },
    flex_lg_wrap: {
      flexWrap: "wrap",
    },
    flex_lg_nowrap: {
      flexWrap: "nowrap",
    },
    flex_lg_wrap_reverse: {
      flexWrap: "wrap-reverse",
    },
    flex_lg_fill: {
      flex: 1,
    },
    flex_lg_grow_0: {
      flexGrow: 0,
    },
    flex_lg_grow_1: {
      flexGrow: 1,
    },
    flex_lg_shrink_0: {
      flexShrink: 0,
    },
    flex_lg_shrink_1: {
      flexShrink: 1,
    },
    justify_content_lg_start: {
      justifyContent: "flex-start",
    },
    justify_content_lg_end: {
      justifyContent: "flex-end",
    },
    justify_content_lg_center: {
      justifyContent: "center",
    },
    justify_content_lg_between: {
      justifyContent: "space-between",
    },
    justify_content_lg_around: {
      justifyContent: "space-around",
    },
    align_items_lg_start: {
      alignItems: "flex-start",
    },
    align_items_lg_end: {
      alignItems: "flex-end",
    },
    align_items_lg_center: {
      alignItems: "center",
    },
    align_items_lg_baseline: {
      alignItems: "baseline",
    },
    align_items_lg_stretch: {
      alignItems: "stretch",
    },
    align_content_lg_start: {
      alignContent: "flex-start",
    },
    align_content_lg_end: {
      alignContent: "flex-end",
    },
    align_content_lg_center: {
      alignContent: "center",
    },
    align_content_lg_between: {
      alignContent: "space-between",
    },
    align_content_lg_around: {
      alignContent: "space-around",
    },
    align_content_lg_stretch: {
      alignContent: "stretch",
    },
    align_self_lg_auto: {
      alignSelf: "auto",
    },
    align_self_lg_start: {
      alignSelf: "flex-start",
    },
    align_self_lg_end: {
      alignSelf: "flex-end",
    },
    align_self_lg_center: {
      alignSelf: "center",
    },
    align_self_lg_baseline: {
      alignSelf: "baseline",
    },
    align_self_lg_stretch: {
      alignSelf: "stretch",
    },
  }),

  ...(screenWidth >= 1200 && {
    flex_xl_row: {
      flexDirection: "row",
    },
    flex_xlColumn: {
      flexDirection: "column",
    },
    flex_xl_row_reverse: {
      flexDirection: "row-reverse",
    },
    flex_xl_column_reverse: {
      flexDirection: "column-reverse",
    },
    flex_xlWrap: {
      flexWrap: "wrap",
    },
    flex_xl_nowrap: {
      flexWrap: "nowrap",
    },
    flex_xl_wrap_reverse: {
      flexWrap: "wrap-reverse",
    },
    flex_xl_fill: {
      flex: 1,
    },
    flex_xl_grow_0: {
      flexGrow: 0,
    },
    flex_xl_grow_1: {
      flexGrow: 1,
    },
    flex_xl_shrink_0: {
      flexShrink: 0,
    },
    flex_xl_shrink_1: {
      flexShrink: 1,
    },
    justify_content_xl_start: {
      justifyContent: "flex-start",
    },
    justify_content_xl_end: {
      justifyContent: "flex-end",
    },
    justify_content_xl_center: {
      justifyContent: "center",
    },
    justify_content_xl_between: {
      justifyContent: "space-between",
    },
    justify_content_xl_around: {
      justifyContent: "space-around",
    },
    align_items_xl_start: {
      alignItems: "flex-start",
    },
    align_items_xl_end: {
      alignItems: "flex-end",
    },
    align_items_xl_center: {
      alignItems: "center",
    },
    align_items_xl_baseline: {
      alignItems: "baseline",
    },
    align_items_xl_stretch: {
      alignItems: "stretch",
    },
    align_content_xl_start: {
      alignContent: "flex-start",
    },
    align_content_xl_end: {
      alignContent: "flex-end",
    },
    align_content_xl_center: {
      alignContent: "center",
    },
    align_content_xl_between: {
      alignContent: "space-between",
    },
    align_content_xl_around: {
      alignContent: "space-around",
    },
    align_content_xl_stretch: {
      alignContent: "stretch",
    },
    align_self_xl_auto: {
      alignSelf: "auto",
    },
    align_self_xl_start: {
      alignSelf: "flex-start",
    },
    align_self_xl_end: {
      alignSelf: "flex-end",
    },
    align_self_xl_center: {
      alignSelf: "center",
    },
    align_self_xl_baseline: {
      alignSelf: "baseline",
    },
    align_self_xl_stretch: {
      alignSelf: "stretch",
    },
  }),
});

export default bootstrapGridStyles;
