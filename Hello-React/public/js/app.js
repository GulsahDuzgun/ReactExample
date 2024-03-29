"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var root = ReactDOM.createRoot(document.querySelector("#content"));
function Header(props) {
  return /*#__PURE__*/React.createElement("h1", {
    className: "text-center h3"
  }, props.title);
}
function ShowMessage(props) {
  return /*#__PURE__*/React.createElement("p", {
    className: "m-2 h6 "
  }, props.message);
}
function TodoList(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
    className: "list-group"
  }, props.items.map(function (element, index) {
    return /*#__PURE__*/React.createElement(TodoItem, {
      key: index,
      item: element,
      "delete": props.deleteItem
    });
  })), props.items.length > 0 ? /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-outline-danger float-end m-2",
    onClick: props.clear
  }, "Veriyi Temizle")) : /*#__PURE__*/React.createElement("div", {
    className: "alert alert-warning"
  }, "G\xF6rev Ekleyiniz"));
}
var TodoItem = function TodoItem(props) {
  return /*#__PURE__*/React.createElement("li", {
    className: "list-group-item"
  }, props.item, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sn btn-danger float-end",
    onClick: function onClick() {
      return props["delete"](props.item);
    }
  }, "X"));
};
var NewItem = /*#__PURE__*/function (_React$Component) {
  _inherits(NewItem, _React$Component);
  var _super = _createSuper(NewItem);
  function NewItem(props) {
    var _this;
    _classCallCheck(this, NewItem);
    _this = _super.call(this, props);
    _this.onFormSubmit = _this.onFormSubmit.bind(_assertThisInitialized(_this));
    _this.state = {
      errorMessage: ""
    };
    return _this;
  }
  _createClass(NewItem, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();
      var item = e.target.elements.txtItem.value.trim();
      if (item) {
        var err = this.props.addItem(item);
        this.setState({
          errorMessage: err
        });
      }
      e.target.elements.txtItem.value = "";
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log("Component güncellendi New Item");
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.errorMessage && /*#__PURE__*/React.createElement("p", null, this.state.errorMessage), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.onFormSubmit
      }, /*#__PURE__*/React.createElement("div", {
        className: "input-group"
      }, /*#__PURE__*/React.createElement("input", {
        className: "form-control",
        type: "text",
        name: "txtItem"
      }), /*#__PURE__*/React.createElement("button", {
        className: "btn btn-primary",
        type: "submit"
      }, "Ekle"))));
    }
  }]);
  return NewItem;
}(React.Component);
var TodoApp = /*#__PURE__*/function (_React$Component2) {
  _inherits(TodoApp, _React$Component2);
  var _super2 = _createSuper(TodoApp);
  function TodoApp(props) {
    var _this2;
    _classCallCheck(this, TodoApp);
    _this2 = _super2.call(this, props);
    _this2.state = {
      task: ["Gorev1", "Gorev2", "Gorev3"]
    };
    _this2.clearItems = _this2.clearItems.bind(_assertThisInitialized(_this2));
    _this2.addItem = _this2.addItem.bind(_assertThisInitialized(_this2));
    _this2.deleteItem = _this2.deleteItem.bind(_assertThisInitialized(_this2));
    return _this2;
  }
  _createClass(TodoApp, [{
    key: "clearItems",
    value: function clearItems() {
      this.setState({
        task: []
      });
    }
  }, {
    key: "addItem",
    value: function addItem(value) {
      if (this.state.task.indexOf(value) > -1) {
        return "Aynı görev bilgisi girilemez";
      }
      this.setState(function (prevState) {
        return {
          task: prevState.task.concat(value)
        };
      });
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(item) {
      this.setState(function (prevState) {
        var resultArray = prevState.task.filter(function (element) {
          return element != item;
        });
        return {
          task: resultArray
        };
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var jsonTask = JSON.parse(localStorage.getItem("items"));
      console.log(_typeof(jsonTask));
      if (jsonTask) {
        this.setState({
          task: jsonTask
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.task.length !== this.state.task.length) {
        var taskArr = JSON.stringify(this.state.task);
        //console.log(taskArr, typeof taskArr)
        localStorage.setItem("items", taskArr);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var data = {
        header: "Todo Application",
        description: "Bekleyen Görevler"
      };
      return /*#__PURE__*/React.createElement("div", {
        className: "container my-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "card"
      }, /*#__PURE__*/React.createElement("div", {
        className: "card-header"
      }, /*#__PURE__*/React.createElement(Header, {
        title: data.header
      })), /*#__PURE__*/React.createElement("div", {
        className: "car-body"
      }, /*#__PURE__*/React.createElement(ShowMessage, {
        message: data.description
      }), /*#__PURE__*/React.createElement(TodoList, {
        items: this.state.task,
        clear: this.clearItems,
        deleteItem: this.deleteItem
      })), /*#__PURE__*/React.createElement("div", {
        className: "card-footer"
      }, /*#__PURE__*/React.createElement(NewItem, {
        addItem: this.addItem
      }))));
    }
  }]);
  return TodoApp;
}(React.Component);
root.render( /*#__PURE__*/React.createElement(TodoApp, null));
