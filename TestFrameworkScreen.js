import React from "react";
import Column from "./components/Column";
import Container from "./components/Container";
import CoreView from "./components/CoreView";
import Row from "./components/Row";

const TestFrameworkScreen = (props) => {
  return (
    <CoreView>
      <Container>
        <Row>
          <Column></Column>
        </Row>
      </Container>
    </CoreView>
  );
};

export default TestFrameworkScreen;
