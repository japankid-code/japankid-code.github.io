// Fork from https://codepen.io/penny1119/pen/xENWYq
// Inspired by these pen:
import React, { PureComponent } from 'react'
import { ThemeToggle } from './components/react-toggle/view';


var todoItems = [];
todoItems.push({ index: 1, value: "copy files from codepen", done: true });
todoItems.push({ index: 2, value: "add dark mode toggle", done: false });
todoItems.push({ index: 3, value: "hook up to postgres database??", done: false });
todoItems.push({ index: 4, value: "add some user authentication", done: false });
todoItems.push({ index: 5, value: "make a bunch of tests", done: false });
todoItems.push({ index: 6, value: "work on styling the app", done: true });
todoItems.push({ index: 7, value: "add cards with different lists", done: false });
todoItems.push({ index: 8, value: "add changing list title", done: false });


class TodoList extends React.Component {
  render() {
    var items = this.props.items.map((item, index) => {
      return /*#__PURE__*/(
        React.createElement(TodoListItem, { key: index, item: item, index: index, removeItem: this.props.removeItem, markTodoDone: this.props.markTodoDone }));
    });
    return /*#__PURE__*/(
      React.createElement("ul", { className: "list-group" }, items));
  }
}


class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickClose() {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  }
  onClickDone() {
    var index = parseInt(this.props.index);
    this.props.markTodoDone(index);
  }
  render() {
    var todoClass = this.props.item.done ? "done" : "undone";
    return /*#__PURE__*/(
      React.createElement("li", { className: "list-group-item" }, /*#__PURE__*/
      React.createElement("div", { className: todoClass }, /*#__PURE__*/
      React.createElement("span", { className: "glyphicon glyphicon-ok icon", onClick: this.onClickDone }),
      this.props.item.value, /*#__PURE__*/
      React.createElement("button", { type: "button", className: "close", onClick: this.onClickClose }, "\xD7"))));
  }
}


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.refs.itemName.focus();
  }
  onSubmit(event) {
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;
    if (newItemValue) {
      this.props.addItem({ newItemValue });
      this.refs.form.reset();
    }
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("form", { ref: "form", onSubmit: this.onSubmit, className: "form-inline" }, /*#__PURE__*/
      React.createElement("input", { type: "text", ref: "itemName", className: "form-control", placeholder: "add a new todo..." }), /*#__PURE__*/
      React.createElement("button", { type: "submit", className: "btn btn-default" })));
  }
}


class TodoHeader extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("h3", { className: "title" }, "ToDo List"));
  }
}


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = { todoItems: todoItems };
  }
  addItem(todoItem) {
    todoItems.unshift({
      index: todoItems.length + 1,
      value: todoItem.newItemValue,
      done: false });
    this.setState({ todoItems: todoItems });
  }
  removeItem(itemIndex) {
    todoItems.splice(itemIndex, 1);
    this.setState({ todoItems: todoItems });
  }
  markTodoDone(itemIndex) {
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({ todoItems: todoItems });
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "todoForm" }, /*#__PURE__*/
      React.createElement(TodoHeader, null), /*#__PURE__*/
      React.createElement(TodoForm, { addItem: this.addItem }), /*#__PURE__*/
      React.createElement(TodoList, { items: todoItems, removeItem: this.removeItem, markTodoDone: this.markTodoDone })));
  }
}

ThemeToggle.displayName = 'Theme Toggle'

ReactDOM.render( /*#__PURE__*/React.createElement(TodoApp, null), document.getElementById('todo'));
ReactDOM.render(<ThemeToggle />, document.getElementById('application'))