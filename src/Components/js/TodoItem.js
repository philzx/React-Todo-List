import React from "react";
import "../css/TodoItem.css";
import { ListGroup, ListGroupItem, Row, Col } from "reactstrap";
import DeleteIcon from "@material-ui/icons/Delete";
import { SvgIcon, Button } from "@material-ui/core";

const TodoItem = ({ todo, deleteTodo, changeStatus }) => {
  return (
    <div id="todo-item">
      <Row>
        <Col md="12">
          <ListGroup>
            <ListGroupItem
              color={todo.status === "Incompleted" ? "danger" : "success"}
            >
              {todo.message}
              <div
                className="trashBin"
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                <SvgIcon>
                  <DeleteIcon />
                </SvgIcon>
              </div>
              <Button
                className="button"
                color="primary"
                variant="outlined"
                size="small"
                onClick={() => {
                  changeStatus(todo.id);
                }}
              >
                {todo.status}
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default TodoItem;
