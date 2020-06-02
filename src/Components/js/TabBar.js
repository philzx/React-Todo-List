import React from "react";
import "../css/TabBar.css";
import { Nav, NavItem, NavLink, Row, Col } from "reactstrap";

const TabBar = ({ show }) => {
  return (
    <div>
      <Row>
        <Col sm="12">
          <div id="tab-bar">
            <Nav tabs>
              <NavItem
                onClick={() => {
                  show("All");
                }}
              >
                <NavLink id="all" className="item" href="#">
                  All
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  id="complete"
                  onClick={() => {
                    show("Completed");
                  }}
                  className="item"
                  href="#"
                >
                  Complete
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  id="incomplete"
                  onClick={() => {
                    show("Incompleted");
                  }}
                  className="item"
                  href="#"
                >
                  Incomplete
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TabBar;
