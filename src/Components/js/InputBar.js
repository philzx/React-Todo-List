import React, { Component } from "react";
import "../css/InputBar.css";
import { Input, Button, Form, FormGroup, Row, Col } from "reactstrap";

class InputBar extends Component {
  state = {
    status: "Incompleted",
  };

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    e.target.reset();
  };

  render() {
    return (
      <div id="input-bar">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Row>
              <Col md="11">
                <Input
                  type="text"
                  placeholder="Add Item"
                  onChange={this.handleChange}
                />
              </Col>
              <Col md="1">
                <Button color="success">Add</Button>
              </Col>
            </Row>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default InputBar;
