
import { useState } from "react";
import {CardHeading, ChevronDown, ChevronUp} from "react-bootstrap-icons";
import {Button, Card, CardBody, CardHeader, Col, Collapse, Container, Fade, Row} from "react-bootstrap";

const HiddenStep = ({index, hint}) => {
  const [showHint, setShowHint] = useState(false);

  return (
      <Row className={"align-items-center"}>
        <Col xs lg="3" >
        <Button className={"w-100 hint-button"} variant="outline-info" onClick={() => setShowHint(!showHint)}>{`${showHint ? "Hide" : "Reveal" } step ${index}`}</Button>
        </Col>
        <Col style={{borderLeftStyle: 'solid', borderLeftWidth: '1px', borderLeftColor: 'lightgray'}}>
          <div >


        <Fade in={showHint} >
          <p className={"mb-0"}> {hint}</p>

        </Fade>
          </div>
        </Col>
      </Row>


  )
    ;
};

export default HiddenStep;