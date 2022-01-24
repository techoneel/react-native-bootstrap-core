import React from "react";
import { connect, useDispatch } from "react-redux";
import { Dialog, Portal, Title } from "react-native-paper";
import CoreView from "../../../core/components/layout/CoreView";
import Core_Button from "../../../core/components/content/Core_Button";
import { CLEAR_MESSAGE } from "../../../types/messageTypes";
import Row from "../layout/Row";
import Column from "../layout/Column";
import CoreClasses from "../../CoreClasses";

const CoreAlert = (props) => {
  const dispatch = useDispatch();
  return (
    <CoreView>
      {props.message ? (
        <Portal>
          <Row
            coreClasses={[
              CoreClasses.LAYOUT.ROW,
              CoreClasses.HEIGHT.VH_100,
              CoreClasses.JUSTIFY_CONTENT.JUSTIFY_CONTENT_CENTER,
              CoreClasses.ALIGN_ITEMS.ALIGN_ITEMS_CENTER,
            ]}
          >
            <Column
              coreClasses={[
                CoreClasses.LAYOUT.COL_12,
                CoreClasses.LAYOUT.COL_MD_5,
              ]}
            >
              <Dialog
                visible={props.message ? true : false}
                onDismiss={() => {
                  dispatch({ type: CLEAR_MESSAGE });
                }}
              >
                <Dialog.Title>{props.messageType || "Unknown"}</Dialog.Title>
                <Dialog.Content>
                  <Title>{props.message || "This error is unknown."}</Title>
                </Dialog.Content>
                <Dialog.Actions>
                  <Core_Button
                    mode="text"
                    title="OK"
                    onPress={() => {
                      dispatch({ type: CLEAR_MESSAGE });
                    }}
                  />
                </Dialog.Actions>
              </Dialog>
            </Column>
          </Row>
        </Portal>
      ) : (
        <></>
      )}
    </CoreView>
  );
};

function mapStateToProps(state) {
  const { messageType, message } = state.message;
  return {
    messageType,
    message,
  };
}

export default connect(mapStateToProps)(CoreAlert);
