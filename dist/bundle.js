define("qni/apis/qni_codes", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var QniInputRequestDataType;
    (function (QniInputRequestDataType) {
        QniInputRequestDataType[QniInputRequestDataType["INPUT_REQ_TOUCH"] = 0] = "INPUT_REQ_TOUCH";
        QniInputRequestDataType[QniInputRequestDataType["INPUT_REQ_ENTER"] = 1] = "INPUT_REQ_ENTER";
        QniInputRequestDataType[QniInputRequestDataType["INPUT_REQ_ANYKEY"] = 2] = "INPUT_REQ_ANYKEY";
        QniInputRequestDataType[QniInputRequestDataType["INPUT_REQ_BOOLEAN"] = 3] = "INPUT_REQ_BOOLEAN";
        QniInputRequestDataType[QniInputRequestDataType["INPUT_REQ_STR"] = 10] = "INPUT_REQ_STR";
        QniInputRequestDataType[QniInputRequestDataType["INPUT_REQ_STR_MAX_LEN"] = 11] = "INPUT_REQ_STR_MAX_LEN";
        QniInputRequestDataType[QniInputRequestDataType["INPUT_REQ_STR_SELECT"] = 12] = "INPUT_REQ_STR_SELECT";
        QniInputRequestDataType[QniInputRequestDataType["INPUT_REQ_INT"] = 20] = "INPUT_REQ_INT";
        QniInputRequestDataType[QniInputRequestDataType["INPUT_REQ_INT_MAX_LEN"] = 21] = "INPUT_REQ_INT_MAX_LEN";
        QniInputRequestDataType[QniInputRequestDataType["INPUT_REQ_FLOAT"] = 30] = "INPUT_REQ_FLOAT";
        QniInputRequestDataType[QniInputRequestDataType["INPUT_REQ_FLOAT_MAX_LEN"] = 31] = "INPUT_REQ_FLOAT_MAX_LEN";
        QniInputRequestDataType[QniInputRequestDataType["INPUT_REQ_DATE"] = 40] = "INPUT_REQ_DATE";
        QniInputRequestDataType[QniInputRequestDataType["INPUT_REQ_DATETIME"] = 41] = "INPUT_REQ_DATETIME";
        QniInputRequestDataType[QniInputRequestDataType["INPUT_REQ_TIME"] = 42] = "INPUT_REQ_TIME";
        QniInputRequestDataType[QniInputRequestDataType["INPUT_REQ_COLOR"] = 50] = "INPUT_REQ_COLOR";
    })(QniInputRequestDataType = exports.QniInputRequestDataType || (exports.QniInputRequestDataType = {}));
    var QniInputResponseDataType;
    (function (QniInputResponseDataType) {
        QniInputResponseDataType[QniInputResponseDataType["INPUT_RES_EMPTY"] = 0] = "INPUT_RES_EMPTY";
        QniInputResponseDataType[QniInputResponseDataType["INPUT_RES_BOOLEAN"] = 10] = "INPUT_RES_BOOLEAN";
        QniInputResponseDataType[QniInputResponseDataType["INPUT_RES_STR"] = 11] = "INPUT_RES_STR";
        QniInputResponseDataType[QniInputResponseDataType["INPUT_RES_INT"] = 12] = "INPUT_RES_INT";
        QniInputResponseDataType[QniInputResponseDataType["INPUT_RES_FLOAT"] = 13] = "INPUT_RES_FLOAT";
        QniInputResponseDataType[QniInputResponseDataType["INPUT_RES_DATE"] = 20] = "INPUT_RES_DATE";
        QniInputResponseDataType[QniInputResponseDataType["INPUT_RES_DATETIME"] = 21] = "INPUT_RES_DATETIME";
        QniInputResponseDataType[QniInputResponseDataType["INPUT_RES_TIME"] = 22] = "INPUT_RES_TIME";
    })(QniInputResponseDataType = exports.QniInputResponseDataType || (exports.QniInputResponseDataType = {}));
    var QniConsolePrintDataType;
    (function (QniConsolePrintDataType) {
        QniConsolePrintDataType[QniConsolePrintDataType["PRINT"] = 0] = "PRINT";
        QniConsolePrintDataType[QniConsolePrintDataType["PRINT_LINE"] = 1] = "PRINT_LINE";
        QniConsolePrintDataType[QniConsolePrintDataType["PRINT_BUTTON"] = 2] = "PRINT_BUTTON";
        QniConsolePrintDataType[QniConsolePrintDataType["PRINT_IMG"] = 3] = "PRINT_IMG";
        QniConsolePrintDataType[QniConsolePrintDataType["NEW_LINE"] = 10] = "NEW_LINE";
        QniConsolePrintDataType[QniConsolePrintDataType["DELETE_LINE"] = 20] = "DELETE_LINE";
        QniConsolePrintDataType[QniConsolePrintDataType["CLEAR_LINE"] = 21] = "CLEAR_LINE";
    })(QniConsolePrintDataType = exports.QniConsolePrintDataType || (exports.QniConsolePrintDataType = {}));
    var QniFontStyle;
    (function (QniFontStyle) {
        QniFontStyle[QniFontStyle["REGULAR"] = 0] = "REGULAR";
        QniFontStyle[QniFontStyle["ITALIC"] = 1] = "ITALIC";
        QniFontStyle[QniFontStyle["BOLD"] = 2] = "BOLD";
        QniFontStyle[QniFontStyle["UNDERLINE"] = 4] = "UNDERLINE";
    })(QniFontStyle = exports.QniFontStyle || (exports.QniFontStyle = {}));
    var QniConsoleSettingItemType;
    (function (QniConsoleSettingItemType) {
        QniConsoleSettingItemType[QniConsoleSettingItemType["SETTING_TEXT_COLOR"] = 0] = "SETTING_TEXT_COLOR";
        QniConsoleSettingItemType[QniConsoleSettingItemType["SETTING_BACK_COLOR"] = 1] = "SETTING_BACK_COLOR";
        QniConsoleSettingItemType[QniConsoleSettingItemType["SETTING_HIGHLIGHT_COLOR"] = 2] = "SETTING_HIGHLIGHT_COLOR";
        QniConsoleSettingItemType[QniConsoleSettingItemType["SETTING_FONT"] = 10] = "SETTING_FONT";
        QniConsoleSettingItemType[QniConsoleSettingItemType["SETTING_TEXT_ALIGN"] = 20] = "SETTING_TEXT_ALIGN";
    })(QniConsoleSettingItemType = exports.QniConsoleSettingItemType || (exports.QniConsoleSettingItemType = {}));
    var QniTextAlign;
    (function (QniTextAlign) {
        QniTextAlign[QniTextAlign["LEFT"] = 0] = "LEFT";
        QniTextAlign[QniTextAlign["RIGHT"] = 1] = "RIGHT";
        QniTextAlign[QniTextAlign["CENTER"] = 2] = "CENTER";
    })(QniTextAlign = exports.QniTextAlign || (exports.QniTextAlign = {}));
    var QniConsoleRequestType;
    (function (QniConsoleRequestType) {
        QniConsoleRequestType[QniConsoleRequestType["CON_REQ_LOAD_STATE"] = 0] = "CON_REQ_LOAD_STATE";
        QniConsoleRequestType[QniConsoleRequestType["CON_REQ_SHARE_STATE"] = 1] = "CON_REQ_SHARE_STATE";
        QniConsoleRequestType[QniConsoleRequestType["CON_REQ_GET_STATE"] = 2] = "CON_REQ_GET_STATE";
    })(QniConsoleRequestType = exports.QniConsoleRequestType || (exports.QniConsoleRequestType = {}));
    var QniConsoleResponseType;
    (function (QniConsoleResponseType) {
        QniConsoleResponseType[QniConsoleResponseType["CON_RES_OK_INPUT"] = 0] = "CON_RES_OK_INPUT";
        QniConsoleResponseType[QniConsoleResponseType["CON_RES_OK_ACCEPT_INPUT"] = 1] = "CON_RES_OK_ACCEPT_INPUT";
        QniConsoleResponseType[QniConsoleResponseType["CON_RES_ERR"] = 255] = "CON_RES_ERR";
    })(QniConsoleResponseType = exports.QniConsoleResponseType || (exports.QniConsoleResponseType = {}));
    var QniConsoleMessageType;
    (function (QniConsoleMessageType) {
        QniConsoleMessageType[QniConsoleMessageType["CON_MSG_REQ"] = 0] = "CON_MSG_REQ";
        QniConsoleMessageType[QniConsoleMessageType["CON_MSG_RES"] = 1] = "CON_MSG_RES";
    })(QniConsoleMessageType = exports.QniConsoleMessageType || (exports.QniConsoleMessageType = {}));
    var QniProgramCommandType;
    (function (QniProgramCommandType) {
        QniProgramCommandType[QniProgramCommandType["PROG_COM_PRINT"] = 0] = "PROG_COM_PRINT";
        QniProgramCommandType[QniProgramCommandType["PROG_COM_UPDATE_SETTING"] = 1] = "PROG_COM_UPDATE_SETTING";
    })(QniProgramCommandType = exports.QniProgramCommandType || (exports.QniProgramCommandType = {}));
    var QniProgramRequestType;
    (function (QniProgramRequestType) {
        QniProgramRequestType[QniProgramRequestType["PROG_REQ_INPUT"] = 0] = "PROG_REQ_INPUT";
        QniProgramRequestType[QniProgramRequestType["PROG_REQ_ACCEPT_INPUT"] = 1] = "PROG_REQ_ACCEPT_INPUT";
    })(QniProgramRequestType = exports.QniProgramRequestType || (exports.QniProgramRequestType = {}));
    var QniProgramResponseType;
    (function (QniProgramResponseType) {
        QniProgramResponseType[QniProgramResponseType["PROG_RES_OK_LOAD_STATE"] = 0] = "PROG_RES_OK_LOAD_STATE";
        QniProgramResponseType[QniProgramResponseType["PROG_RES_OK_SHARE_STATE"] = 1] = "PROG_RES_OK_SHARE_STATE";
        QniProgramResponseType[QniProgramResponseType["PROG_RES_OK_GET_STATE"] = 2] = "PROG_RES_OK_GET_STATE";
        QniProgramResponseType[QniProgramResponseType["PROG_RES_ERR"] = 255] = "PROG_RES_ERR";
    })(QniProgramResponseType = exports.QniProgramResponseType || (exports.QniProgramResponseType = {}));
    var QniProgramMessageType;
    (function (QniProgramMessageType) {
        QniProgramMessageType[QniProgramMessageType["PROG_MSG_REQ"] = 0] = "PROG_MSG_REQ";
        QniProgramMessageType[QniProgramMessageType["PROG_MSG_RES"] = 1] = "PROG_MSG_RES";
    })(QniProgramMessageType = exports.QniProgramMessageType || (exports.QniProgramMessageType = {}));
});
define("qni/qni_decoder", ["require", "exports", "qni/apis/qni_codes"], function (require, exports, qni_codes_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const MAX_LOG = 1000;
    class QniConsoleSetting {
        constructor() {
            this.textColor = null;
            this.backColor = null;
            this.highlightColor = null;
            this.font = [null, 3, qni_codes_js_1.QniFontStyle.REGULAR];
            this.fontSizeCache = "3rem";
            this.align = "line-left";
        }
        setFont(font) {
            this.font = font;
            this.fontSizeCache = font[1] + "rem";
        }
    }
    function qniTextAlignToHtml(align) {
        switch (align) {
            case qni_codes_js_1.QniTextAlign.LEFT: return "line-left";
            case qni_codes_js_1.QniTextAlign.CENTER: return "line-center";
            case qni_codes_js_1.QniTextAlign.RIGHT: return "line-right";
        }
    }
    function qniColorToHtml(color) {
        return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    }
    const inputUploadEvent = new Event("qni-input-upload", {
        bubbles: false
    });
    var InputRoot;
    (function (InputRoot) {
        InputRoot[InputRoot["Normal"] = 0] = "Normal";
        InputRoot[InputRoot["Enter"] = 1] = "Enter";
        InputRoot[InputRoot["Touch"] = 2] = "Touch";
    })(InputRoot || (InputRoot = {}));
    function start(url, qniConsole, input, inputBtn) {
        const setting = new QniConsoleSetting();
        function makeNewLine() {
            const line = document.createElement("div");
            return qniConsole.appendChild(line);
        }
        let lastLine = makeNewLine();
        lastLine.className = setting.align;
        let newLineFlag = true;
        function clearConsole() {
            if (qniConsole.lastChild !== null) {
                qniConsole.removeChild(qniConsole.lastChild);
            }
            newline();
        }
        clearConsole();
        const ws = new WebSocket(url);
        ws.binaryType = "arraybuffer";
        let curInputReq = null;
        let curInputMaxLen = null;
        let statusPos = 0;
        function sendMsg(msg) {
            const pack = msgpack.encode(msg);
            ws.send(pack);
        }
        function sendReq(req) {
            sendMsg([qni_codes_js_1.QniConsoleMessageType.CON_MSG_REQ, req]);
        }
        function sendRes(res) {
            sendMsg([qni_codes_js_1.QniConsoleMessageType.CON_MSG_RES, res]);
        }
        function sendInputRes(_, input) {
            if (curInputReq === null)
                return;
            sendRes([qni_codes_js_1.QniConsoleResponseType.CON_RES_OK_INPUT, input]);
            qniConsole.dispatchEvent(inputUploadEvent);
        }
        function updateStatus() {
            sendReq([qni_codes_js_1.QniConsoleRequestType.CON_REQ_GET_STATE, statusPos]);
            if (curInputReq === null && ws.readyState === ws.CONNECTING) {
                setTimeout(updateStatus, 200);
            }
        }
        function sendInputByInputElem(root) {
            if (curInputReq === null)
                return;
            switch (curInputReq[0][0]) {
                case qni_codes_js_1.QniInputRequestDataType.INPUT_REQ_ANYKEY:
                case qni_codes_js_1.QniInputRequestDataType.INPUT_REQ_ENTER:
                case qni_codes_js_1.QniInputRequestDataType.INPUT_REQ_TOUCH:
                    {
                        sendInputRes(root, [[qni_codes_js_1.QniInputResponseDataType.INPUT_RES_EMPTY, null], curInputReq[2]]);
                        break;
                    }
                case qni_codes_js_1.QniInputRequestDataType.INPUT_REQ_INT:
                case qni_codes_js_1.QniInputRequestDataType.INPUT_REQ_INT_MAX_LEN:
                    {
                        if (isNaN(input.valueAsNumber))
                            return;
                        sendInputRes(root, [[qni_codes_js_1.QniInputResponseDataType.INPUT_RES_INT, input.valueAsNumber], curInputReq[2]]);
                        break;
                    }
                case qni_codes_js_1.QniInputRequestDataType.INPUT_REQ_STR:
                case qni_codes_js_1.QniInputRequestDataType.INPUT_REQ_STR_MAX_LEN:
                    {
                        sendInputRes(root, [[qni_codes_js_1.QniInputResponseDataType.INPUT_RES_STR, input.value], curInputReq[2]]);
                        break;
                    }
                default:
                    {
                        // TODO implmenet
                        break;
                    }
            }
            input.value = "";
        }
        inputBtn.addEventListener("click", function (e) {
            sendInputByInputElem(InputRoot.Enter);
        });
        input.addEventListener("keydown", e => {
            if (e.key === "Enter") {
                sendInputByInputElem(InputRoot.Enter);
            }
            else if (input.value.length === curInputMaxLen) {
                sendInputByInputElem(InputRoot.Normal);
            }
        });
        function checkMaxLog() {
            let diff = qniConsole.childElementCount - MAX_LOG;
            while (--diff >= 0 && qniConsole.firstChild !== null) {
                qniConsole.removeChild(qniConsole.firstChild);
            }
        }
        function updateInput() {
            if (curInputReq === null)
                return;
            switch (curInputReq[0][0]) {
                case qni_codes_js_1.QniInputRequestDataType.INPUT_REQ_ANYKEY:
                case qni_codes_js_1.QniInputRequestDataType.INPUT_REQ_ENTER:
                case qni_codes_js_1.QniInputRequestDataType.INPUT_REQ_TOUCH:
                    {
                        input.hidden = true;
                        curInputMaxLen = null;
                        break;
                    }
                case qni_codes_js_1.QniInputRequestDataType.INPUT_REQ_STR_MAX_LEN:
                    {
                        input.type = "text";
                        curInputMaxLen = curInputReq[0][1];
                        break;
                    }
                case qni_codes_js_1.QniInputRequestDataType.INPUT_REQ_STR:
                    {
                        input.type = "text";
                        curInputMaxLen = null;
                        break;
                    }
                case qni_codes_js_1.QniInputRequestDataType.INPUT_REQ_INT:
                    {
                        input.type = "number";
                        curInputMaxLen = null;
                        break;
                    }
                case qni_codes_js_1.QniInputRequestDataType.INPUT_REQ_INT_MAX_LEN:
                    {
                        input.type = "number";
                        curInputMaxLen = curInputReq[0][1];
                        break;
                    }
                default:
                    {
                        input.type = "text";
                        break;
                    }
            }
        }
        qniConsole.dispatchEvent(inputUploadEvent);
        function newline() {
            lastLine = makeNewLine();
            newLineFlag = true;
        }
        function deleteline(count) {
            if (newLineFlag) {
                qniConsole.removeChild(lastLine);
            }
            while (--count >= 0 && qniConsole.lastChild !== null) {
                qniConsole.removeChild(qniConsole.lastChild);
            }
            if (newLineFlag) {
                newline();
            }
        }
        function createPrintSpan(highlight) {
            const span = document.createElement("span");
            span.style.color = setting.textColor;
            span.style.background = setting.backColor;
            span.style.fontFamily = setting.font[0];
            span.style.fontSize = setting.fontSizeCache;
            if (setting.font[2] & qni_codes_js_1.QniFontStyle.BOLD) {
                span.style.fontWeight = "bold";
            }
            if (setting.font[2] & qni_codes_js_1.QniFontStyle.ITALIC) {
                span.style.fontStyle = "italic";
            }
            if (setting.font[2] & qni_codes_js_1.QniFontStyle.UNDERLINE) {
                span.classList.add("underline");
            }
            if (highlight) {
                const color = setting.textColor;
                const highlight = setting.highlightColor;
                const mouseenter = () => {
                    span.style.color = highlight;
                };
                const mouseleave = () => {
                    span.style.color = color;
                };
                span.addEventListener("mouseenter", mouseenter);
                span.addEventListener("touchstart", mouseenter);
                span.addEventListener("mouseleave", mouseleave);
                span.addEventListener("touchend", mouseleave);
                qniConsole.addEventListener("qni-input-upload", function inputupdate() {
                    span.style.color = color;
                    span.removeEventListener("mouseenter", mouseenter);
                    span.removeEventListener("touchstart", mouseenter);
                    span.removeEventListener("mouseleave", mouseleave);
                    span.removeEventListener("touchend", mouseleave);
                    qniConsole.removeEventListener("qni-input-upload", inputupdate);
                });
            }
            return span;
        }
        function print(str) {
            const span = createPrintSpan(false);
            span.innerText = str;
            lastLine.appendChild(span);
        }
        function printbtn(str, data) {
            const span = createPrintSpan(true);
            span.innerText = str;
            const click = (e) => {
                if (!curInputReq)
                    return false;
                switch (e.button) {
                    // left btn
                    case 0:
                    // middle btn
                    case 1: {
                        sendInputRes(InputRoot.Touch, [data, curInputReq[2]]);
                        break;
                    }
                }
            };
            span.addEventListener("click", click);
            qniConsole.addEventListener("qni-input-upload", function inputUpdate() {
                span.removeEventListener("click", click);
                qniConsole.removeEventListener("qni-input-upload", inputUpdate);
            });
            lastLine.appendChild(span);
        }
        function runCommand(com) {
            switch (com[0]) {
                case qni_codes_js_1.QniProgramCommandType.PROG_COM_PRINT: {
                    const dataType = com[1][0];
                    const data = com[1][1];
                    console.log(`print [${dataType}]: ${data}`);
                    switch (dataType) {
                        case qni_codes_js_1.QniConsolePrintDataType.PRINT: {
                            print(data);
                            newLineFlag = false;
                            break;
                        }
                        case qni_codes_js_1.QniConsolePrintDataType.PRINT_BUTTON: {
                            const btnData = data;
                            printbtn(btnData[0], btnData[1]);
                            newLineFlag = false;
                            break;
                        }
                        case qni_codes_js_1.QniConsolePrintDataType.PRINT_LINE: {
                            print(data);
                            newline();
                            break;
                        }
                        case qni_codes_js_1.QniConsolePrintDataType.CLEAR_LINE: {
                            clearConsole();
                            break;
                        }
                        case qni_codes_js_1.QniConsolePrintDataType.DELETE_LINE: {
                            deleteline(data);
                            break;
                        }
                        case qni_codes_js_1.QniConsolePrintDataType.NEW_LINE: {
                            newline();
                            break;
                        }
                    }
                    break;
                }
                case qni_codes_js_1.QniProgramCommandType.PROG_COM_UPDATE_SETTING: {
                    const item = com[1];
                    switch (item[0]) {
                        case qni_codes_js_1.QniConsoleSettingItemType.SETTING_FONT: {
                            setting.setFont(item[1]);
                            break;
                        }
                        case qni_codes_js_1.QniConsoleSettingItemType.SETTING_TEXT_COLOR: {
                            setting.textColor = qniColorToHtml(item[1]);
                            break;
                        }
                        case qni_codes_js_1.QniConsoleSettingItemType.SETTING_BACK_COLOR: {
                            setting.backColor = qniColorToHtml(item[1]);
                            break;
                        }
                        case qni_codes_js_1.QniConsoleSettingItemType.SETTING_HIGHLIGHT_COLOR: {
                            setting.highlightColor = qniColorToHtml(item[1]);
                            break;
                        }
                        case qni_codes_js_1.QniConsoleSettingItemType.SETTING_TEXT_ALIGN: {
                            setting.align = qniTextAlignToHtml(item[1]);
                            lastLine.className = setting.align;
                            break;
                        }
                    }
                    break;
                }
            }
        }
        function processRequest(req) {
            switch (req[0]) {
                case qni_codes_js_1.QniProgramRequestType.PROG_REQ_INPUT: {
                    curInputReq = req[1];
                    updateInput();
                    break;
                }
                case qni_codes_js_1.QniProgramRequestType.PROG_REQ_ACCEPT_INPUT: {
                    if (curInputReq !== null && curInputReq[2] <= req[1]) {
                        curInputReq = null;
                    }
                    sendRes([qni_codes_js_1.QniConsoleResponseType.CON_RES_OK_ACCEPT_INPUT, null]);
                    updateInput();
                    updateStatus();
                    break;
                }
            }
        }
        function processResponse(res) {
            switch (res[0]) {
                case qni_codes_js_1.QniProgramResponseType.PROG_RES_OK_GET_STATE: {
                    const commands = res[1];
                    commands.forEach(runCommand);
                    statusPos += commands.length;
                    break;
                }
                case qni_codes_js_1.QniProgramResponseType.PROG_RES_OK_LOAD_STATE: {
                    statusPos = 0;
                    clearConsole();
                    updateStatus();
                    break;
                }
                case qni_codes_js_1.QniProgramResponseType.PROG_RES_OK_SHARE_STATE: {
                    console.log("share success! index: " + res[1]);
                    break;
                }
                case qni_codes_js_1.QniProgramResponseType.PROG_RES_ERR: {
                    console.error(`program fail: ${res[1]}`);
                    break;
                }
            }
        }
        ws.addEventListener("open", e => {
            updateStatus();
        });
        ws.addEventListener("message", e => {
            try {
                const dat = new Uint8Array(e.data);
                const msg = msgpack.decode(dat);
                switch (msg[0]) {
                    case qni_codes_js_1.QniProgramMessageType.PROG_MSG_REQ: {
                        const req = msg[1];
                        processRequest(req);
                        break;
                    }
                    case qni_codes_js_1.QniProgramMessageType.PROG_MSG_RES: {
                        const res = msg[1];
                        processResponse(res);
                        checkMaxLog();
                        break;
                    }
                }
                document.documentElement.style.backgroundColor = setting.backColor;
                input.style.color = setting.textColor;
                inputBtn.style.color = setting.textColor;
            }
            catch (e) {
                console.error(e);
                ws.close();
            }
            return true;
        });
    }
    exports.start = start;
});
//# sourceMappingURL=bundle.js.map