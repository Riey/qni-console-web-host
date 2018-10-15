// package: qni.api
// file: qni-api.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class StringArray extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<string>;
  setDataList(value: Array<string>): void;
  addData(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringArray.AsObject;
  static toObject(includeInstance: boolean, msg: StringArray): StringArray.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringArray, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringArray;
  static deserializeBinaryFromReader(message: StringArray, reader: jspb.BinaryReader): StringArray;
}

export namespace StringArray {
  export type AsObject = {
    dataList: Array<string>,
  }
}

export class ErrorResponse extends jspb.Message {
  getReqType(): string;
  setReqType(value: string): void;

  getReason(): string;
  setReason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorResponse): ErrorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorResponse;
  static deserializeBinaryFromReader(message: ErrorResponse, reader: jspb.BinaryReader): ErrorResponse;
}

export namespace ErrorResponse {
  export type AsObject = {
    reqType: string,
    reason: string,
  }
}

export class InputRequest extends jspb.Message {
  hasExpire(): boolean;
  clearExpire(): void;
  getExpire(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpire(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTouch(): boolean;
  clearTouch(): void;
  getTouch(): google_protobuf_empty_pb.Empty | undefined;
  setTouch(value?: google_protobuf_empty_pb.Empty): void;

  hasEnter(): boolean;
  clearEnter(): void;
  getEnter(): google_protobuf_empty_pb.Empty | undefined;
  setEnter(value?: google_protobuf_empty_pb.Empty): void;

  hasAnykey(): boolean;
  clearAnykey(): void;
  getAnykey(): google_protobuf_empty_pb.Empty | undefined;
  setAnykey(value?: google_protobuf_empty_pb.Empty): void;

  hasBoolean(): boolean;
  clearBoolean(): void;
  getBoolean(): google_protobuf_empty_pb.Empty | undefined;
  setBoolean(value?: google_protobuf_empty_pb.Empty): void;

  hasStr(): boolean;
  clearStr(): void;
  getStr(): google_protobuf_empty_pb.Empty | undefined;
  setStr(value?: google_protobuf_empty_pb.Empty): void;

  hasStrMaxLen(): boolean;
  clearStrMaxLen(): void;
  getStrMaxLen(): number;
  setStrMaxLen(value: number): void;

  hasStrSelect(): boolean;
  clearStrSelect(): void;
  getStrSelect(): StringArray | undefined;
  setStrSelect(value?: StringArray): void;

  hasInt(): boolean;
  clearInt(): void;
  getInt(): google_protobuf_empty_pb.Empty | undefined;
  setInt(value?: google_protobuf_empty_pb.Empty): void;

  hasIntMaxLen(): boolean;
  clearIntMaxLen(): void;
  getIntMaxLen(): number;
  setIntMaxLen(value: number): void;

  hasFloat(): boolean;
  clearFloat(): void;
  getFloat(): google_protobuf_empty_pb.Empty | undefined;
  setFloat(value?: google_protobuf_empty_pb.Empty): void;

  hasFloatMaxLen(): boolean;
  clearFloatMaxLen(): void;
  getFloatMaxLen(): number;
  setFloatMaxLen(value: number): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): google_protobuf_empty_pb.Empty | undefined;
  setDate(value?: google_protobuf_empty_pb.Empty): void;

  hasDatetime(): boolean;
  clearDatetime(): void;
  getDatetime(): google_protobuf_empty_pb.Empty | undefined;
  setDatetime(value?: google_protobuf_empty_pb.Empty): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_empty_pb.Empty | undefined;
  setTime(value?: google_protobuf_empty_pb.Empty): void;

  hasColor(): boolean;
  clearColor(): void;
  getColor(): google_protobuf_empty_pb.Empty | undefined;
  setColor(value?: google_protobuf_empty_pb.Empty): void;

  getDataCase(): InputRequest.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InputRequest): InputRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InputRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputRequest;
  static deserializeBinaryFromReader(message: InputRequest, reader: jspb.BinaryReader): InputRequest;
}

export namespace InputRequest {
  export type AsObject = {
    expire?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    touch?: google_protobuf_empty_pb.Empty.AsObject,
    enter?: google_protobuf_empty_pb.Empty.AsObject,
    anykey?: google_protobuf_empty_pb.Empty.AsObject,
    pb_boolean?: google_protobuf_empty_pb.Empty.AsObject,
    str?: google_protobuf_empty_pb.Empty.AsObject,
    strMaxLen: number,
    strSelect?: StringArray.AsObject,
    pb_int?: google_protobuf_empty_pb.Empty.AsObject,
    intMaxLen: number,
    pb_float?: google_protobuf_empty_pb.Empty.AsObject,
    floatMaxLen: number,
    date?: google_protobuf_empty_pb.Empty.AsObject,
    datetime?: google_protobuf_empty_pb.Empty.AsObject,
    time?: google_protobuf_empty_pb.Empty.AsObject,
    color?: google_protobuf_empty_pb.Empty.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    TOUCH = 10,
    ENTER = 11,
    ANYKEY = 12,
    BOOLEAN = 13,
    STR = 20,
    STR_MAX_LEN = 21,
    STR_SELECT = 22,
    INT = 30,
    INT_MAX_LEN = 31,
    FLOAT = 40,
    FLOAT_MAX_LEN = 41,
    DATE = 50,
    DATETIME = 51,
    TIME = 52,
    COLOR = 60,
  }
}

export class InputResponse extends jspb.Message {
  hasEmpty(): boolean;
  clearEmpty(): void;
  getEmpty(): google_protobuf_empty_pb.Empty | undefined;
  setEmpty(value?: google_protobuf_empty_pb.Empty): void;

  hasBoolean(): boolean;
  clearBoolean(): void;
  getBoolean(): boolean;
  setBoolean(value: boolean): void;

  hasStr(): boolean;
  clearStr(): void;
  getStr(): string;
  setStr(value: string): void;

  hasInt(): boolean;
  clearInt(): void;
  getInt(): number;
  setInt(value: number): void;

  hasFloat(): boolean;
  clearFloat(): void;
  getFloat(): number;
  setFloat(value: number): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDatetime(): boolean;
  clearDatetime(): void;
  getDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDatetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_duration_pb.Duration | undefined;
  setTime(value?: google_protobuf_duration_pb.Duration): void;

  hasColor(): boolean;
  clearColor(): void;
  getColor(): number;
  setColor(value: number): void;

  getDataCase(): InputResponse.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InputResponse): InputResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InputResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputResponse;
  static deserializeBinaryFromReader(message: InputResponse, reader: jspb.BinaryReader): InputResponse;
}

export namespace InputResponse {
  export type AsObject = {
    empty?: google_protobuf_empty_pb.Empty.AsObject,
    pb_boolean: boolean,
    str: string,
    pb_int: number,
    pb_float: number,
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    datetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    time?: google_protobuf_duration_pb.Duration.AsObject,
    color: number,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    EMPTY = 10,
    BOOLEAN = 20,
    STR = 21,
    INT = 22,
    FLOAT = 23,
    DATE = 30,
    DATETIME = 31,
    TIME = 32,
    COLOR = 40,
  }
}

export class ConsolePrintButtonData extends jspb.Message {
  hasValue(): boolean;
  clearValue(): void;
  getValue(): InputResponse | undefined;
  setValue(value?: InputResponse): void;

  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsolePrintButtonData.AsObject;
  static toObject(includeInstance: boolean, msg: ConsolePrintButtonData): ConsolePrintButtonData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsolePrintButtonData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsolePrintButtonData;
  static deserializeBinaryFromReader(message: ConsolePrintButtonData, reader: jspb.BinaryReader): ConsolePrintButtonData;
}

export namespace ConsolePrintButtonData {
  export type AsObject = {
    value?: InputResponse.AsObject,
    text: string,
  }
}

export class ConsolePrintData extends jspb.Message {
  hasPrint(): boolean;
  clearPrint(): void;
  getPrint(): string;
  setPrint(value: string): void;

  hasPrintLine(): boolean;
  clearPrintLine(): void;
  getPrintLine(): string;
  setPrintLine(value: string): void;

  hasPrintButton(): boolean;
  clearPrintButton(): void;
  getPrintButton(): ConsolePrintButtonData | undefined;
  setPrintButton(value?: ConsolePrintButtonData): void;

  hasNewLine(): boolean;
  clearNewLine(): void;
  getNewLine(): google_protobuf_empty_pb.Empty | undefined;
  setNewLine(value?: google_protobuf_empty_pb.Empty): void;

  hasDeleteLine(): boolean;
  clearDeleteLine(): void;
  getDeleteLine(): number;
  setDeleteLine(value: number): void;

  hasClearLine(): boolean;
  clearClearLine(): void;
  getClearLine(): google_protobuf_empty_pb.Empty | undefined;
  setClearLine(value?: google_protobuf_empty_pb.Empty): void;

  getDataCase(): ConsolePrintData.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsolePrintData.AsObject;
  static toObject(includeInstance: boolean, msg: ConsolePrintData): ConsolePrintData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsolePrintData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsolePrintData;
  static deserializeBinaryFromReader(message: ConsolePrintData, reader: jspb.BinaryReader): ConsolePrintData;
}

export namespace ConsolePrintData {
  export type AsObject = {
    print: string,
    printLine: string,
    printButton?: ConsolePrintButtonData.AsObject,
    newLine?: google_protobuf_empty_pb.Empty.AsObject,
    deleteLine: number,
    clearLine?: google_protobuf_empty_pb.Empty.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    PRINT = 10,
    PRINT_LINE = 11,
    PRINT_BUTTON = 12,
    NEW_LINE = 20,
    DELETE_LINE = 30,
    CLEAR_LINE = 31,
  }
}

export class Font extends jspb.Message {
  getFontFamily(): string;
  setFontFamily(value: string): void;

  getFontSize(): number;
  setFontSize(value: number): void;

  getFontStyle(): number;
  setFontStyle(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Font.AsObject;
  static toObject(includeInstance: boolean, msg: Font): Font.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Font, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Font;
  static deserializeBinaryFromReader(message: Font, reader: jspb.BinaryReader): Font;
}

export namespace Font {
  export type AsObject = {
    fontFamily: string,
    fontSize: number,
    fontStyle: number,
  }
}

export class ConsoleSettingItem extends jspb.Message {
  hasTextColor(): boolean;
  clearTextColor(): void;
  getTextColor(): number;
  setTextColor(value: number): void;

  hasBackColor(): boolean;
  clearBackColor(): void;
  getBackColor(): number;
  setBackColor(value: number): void;

  hasHighlightColor(): boolean;
  clearHighlightColor(): void;
  getHighlightColor(): number;
  setHighlightColor(value: number): void;

  hasFont(): boolean;
  clearFont(): void;
  getFont(): Font | undefined;
  setFont(value?: Font): void;

  hasTextAlign(): boolean;
  clearTextAlign(): void;
  getTextAlign(): TextAlign;
  setTextAlign(value: TextAlign): void;

  getDataCase(): ConsoleSettingItem.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsoleSettingItem.AsObject;
  static toObject(includeInstance: boolean, msg: ConsoleSettingItem): ConsoleSettingItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsoleSettingItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsoleSettingItem;
  static deserializeBinaryFromReader(message: ConsoleSettingItem, reader: jspb.BinaryReader): ConsoleSettingItem;
}

export namespace ConsoleSettingItem {
  export type AsObject = {
    textColor: number,
    backColor: number,
    highlightColor: number,
    font?: Font.AsObject,
    textAlign: TextAlign,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    TEXT_COLOR = 10,
    BACK_COLOR = 11,
    HIGHLIGHT_COLOR = 12,
    FONT = 20,
    TEXT_ALIGN = 21,
  }
}

export class ConsoleRequest extends jspb.Message {
  hasLoadState(): boolean;
  clearLoadState(): void;
  getLoadState(): string;
  setLoadState(value: string): void;

  hasShareState(): boolean;
  clearShareState(): void;
  getShareState(): string;
  setShareState(value: string): void;

  hasShareStateOverwrite(): boolean;
  clearShareStateOverwrite(): void;
  getShareStateOverwrite(): string;
  setShareStateOverwrite(value: string): void;

  hasDeleteState(): boolean;
  clearDeleteState(): void;
  getDeleteState(): string;
  setDeleteState(value: string): void;

  hasGetState(): boolean;
  clearGetState(): void;
  getGetState(): number;
  setGetState(value: number): void;

  getDataCase(): ConsoleRequest.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConsoleRequest): ConsoleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsoleRequest;
  static deserializeBinaryFromReader(message: ConsoleRequest, reader: jspb.BinaryReader): ConsoleRequest;
}

export namespace ConsoleRequest {
  export type AsObject = {
    loadState: string,
    shareState: string,
    shareStateOverwrite: string,
    deleteState: string,
    getState: number,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    LOAD_STATE = 10,
    SHARE_STATE = 11,
    SHARE_STATE_OVERWRITE = 12,
    DELETE_STATE = 13,
    GET_STATE = 20,
  }
}

export class ConsoleResponse extends jspb.Message {
  getTag(): number;
  setTag(value: number): void;

  hasOkInput(): boolean;
  clearOkInput(): void;
  getOkInput(): InputResponse | undefined;
  setOkInput(value?: InputResponse): void;

  hasErr(): boolean;
  clearErr(): void;
  getErr(): ErrorResponse | undefined;
  setErr(value?: ErrorResponse): void;

  getDataCase(): ConsoleResponse.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsoleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConsoleResponse): ConsoleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsoleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsoleResponse;
  static deserializeBinaryFromReader(message: ConsoleResponse, reader: jspb.BinaryReader): ConsoleResponse;
}

export namespace ConsoleResponse {
  export type AsObject = {
    tag: number,
    okInput?: InputResponse.AsObject,
    err?: ErrorResponse.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    OK_INPUT = 10,
    ERR = 255,
  }
}

export class ConsoleMessage extends jspb.Message {
  hasReq(): boolean;
  clearReq(): void;
  getReq(): ConsoleRequest | undefined;
  setReq(value?: ConsoleRequest): void;

  hasRes(): boolean;
  clearRes(): void;
  getRes(): ConsoleResponse | undefined;
  setRes(value?: ConsoleResponse): void;

  getDataCase(): ConsoleMessage.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsoleMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ConsoleMessage): ConsoleMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsoleMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsoleMessage;
  static deserializeBinaryFromReader(message: ConsoleMessage, reader: jspb.BinaryReader): ConsoleMessage;
}

export namespace ConsoleMessage {
  export type AsObject = {
    req?: ConsoleRequest.AsObject,
    res?: ConsoleResponse.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    REQ = 10,
    RES = 11,
  }
}

export class ProgramCommand extends jspb.Message {
  hasPrint(): boolean;
  clearPrint(): void;
  getPrint(): ConsolePrintData | undefined;
  setPrint(value?: ConsolePrintData): void;

  hasUpdateSetting(): boolean;
  clearUpdateSetting(): void;
  getUpdateSetting(): ConsoleSettingItem | undefined;
  setUpdateSetting(value?: ConsoleSettingItem): void;

  getDataCase(): ProgramCommand.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProgramCommand.AsObject;
  static toObject(includeInstance: boolean, msg: ProgramCommand): ProgramCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProgramCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProgramCommand;
  static deserializeBinaryFromReader(message: ProgramCommand, reader: jspb.BinaryReader): ProgramCommand;
}

export namespace ProgramCommand {
  export type AsObject = {
    print?: ConsolePrintData.AsObject,
    updateSetting?: ConsoleSettingItem.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    PRINT = 10,
    UPDATE_SETTING = 11,
  }
}

export class ProgramCommandArray extends jspb.Message {
  clearCommandsList(): void;
  getCommandsList(): Array<ProgramCommand>;
  setCommandsList(value: Array<ProgramCommand>): void;
  addCommands(value?: ProgramCommand, index?: number): ProgramCommand;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProgramCommandArray.AsObject;
  static toObject(includeInstance: boolean, msg: ProgramCommandArray): ProgramCommandArray.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProgramCommandArray, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProgramCommandArray;
  static deserializeBinaryFromReader(message: ProgramCommandArray, reader: jspb.BinaryReader): ProgramCommandArray;
}

export namespace ProgramCommandArray {
  export type AsObject = {
    commandsList: Array<ProgramCommand.AsObject>,
  }
}

export class ProgramRequest extends jspb.Message {
  getTag(): number;
  setTag(value: number): void;

  hasInput(): boolean;
  clearInput(): void;
  getInput(): InputRequest | undefined;
  setInput(value?: InputRequest): void;

  getDataCase(): ProgramRequest.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProgramRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProgramRequest): ProgramRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProgramRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProgramRequest;
  static deserializeBinaryFromReader(message: ProgramRequest, reader: jspb.BinaryReader): ProgramRequest;
}

export namespace ProgramRequest {
  export type AsObject = {
    tag: number,
    input?: InputRequest.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    INPUT = 10,
  }
}

export class ProgramResponse extends jspb.Message {
  hasOkLoadState(): boolean;
  clearOkLoadState(): void;
  getOkLoadState(): google_protobuf_empty_pb.Empty | undefined;
  setOkLoadState(value?: google_protobuf_empty_pb.Empty): void;

  hasOkShareState(): boolean;
  clearOkShareState(): void;
  getOkShareState(): string;
  setOkShareState(value: string): void;

  hasOkGetState(): boolean;
  clearOkGetState(): void;
  getOkGetState(): ProgramCommandArray | undefined;
  setOkGetState(value?: ProgramCommandArray): void;

  hasErr(): boolean;
  clearErr(): void;
  getErr(): ErrorResponse | undefined;
  setErr(value?: ErrorResponse): void;

  getDataCase(): ProgramResponse.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProgramResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProgramResponse): ProgramResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProgramResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProgramResponse;
  static deserializeBinaryFromReader(message: ProgramResponse, reader: jspb.BinaryReader): ProgramResponse;
}

export namespace ProgramResponse {
  export type AsObject = {
    okLoadState?: google_protobuf_empty_pb.Empty.AsObject,
    okShareState: string,
    okGetState?: ProgramCommandArray.AsObject,
    err?: ErrorResponse.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    OK_LOAD_STATE = 10,
    OK_SHARE_STATE = 11,
    OK_GET_STATE = 12,
    ERR = 255,
  }
}

export class ProgramMessage extends jspb.Message {
  hasReq(): boolean;
  clearReq(): void;
  getReq(): ProgramRequest | undefined;
  setReq(value?: ProgramRequest): void;

  hasRes(): boolean;
  clearRes(): void;
  getRes(): ProgramResponse | undefined;
  setRes(value?: ProgramResponse): void;

  hasAcceptRes(): boolean;
  clearAcceptRes(): void;
  getAcceptRes(): number;
  setAcceptRes(value: number): void;

  getDataCase(): ProgramMessage.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProgramMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ProgramMessage): ProgramMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProgramMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProgramMessage;
  static deserializeBinaryFromReader(message: ProgramMessage, reader: jspb.BinaryReader): ProgramMessage;
}

export namespace ProgramMessage {
  export type AsObject = {
    req?: ProgramRequest.AsObject,
    res?: ProgramResponse.AsObject,
    acceptRes: number,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    REQ = 10,
    RES = 11,
    ACCEPT_RES = 12,
  }
}

export enum FontStyle {
  REGULAR = 0,
  ITALIC = 1,
  BOLD = 2,
  UNDERLINE = 4,
}

export enum TextAlign {
  LEFT = 0,
  RIGHT = 1,
  CENTER = 2,
}

