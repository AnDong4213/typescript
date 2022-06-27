var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 适配器 adapter 抽象类
var MouseListenerProcessAdapter = /** @class */ (function () {
    function MouseListenerProcessAdapter() {
    }
    MouseListenerProcessAdapter.prototype.mouseReleased = function (e) {
        throw new Error("Method not implemented.");
    };
    MouseListenerProcessAdapter.prototype.mousePressed = function (e) {
        throw new Error("Method not implemented.");
    };
    MouseListenerProcessAdapter.prototype.mouseEntered = function (e) {
        throw new Error("Method not implemented.");
    };
    return MouseListenerProcessAdapter;
}());
var MyMouseListenerProcess = /** @class */ (function (_super) {
    __extends(MyMouseListenerProcess, _super);
    function MyMouseListenerProcess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyMouseListenerProcess.prototype.mouseClicked = function (e) {
        throw new Error("Method not implemented.");
    };
    MyMouseListenerProcess.prototype.mouseExited = function (e) {
        throw new Error("Method not implemented.");
    };
    return MyMouseListenerProcess;
}(MouseListenerProcessAdapter));
