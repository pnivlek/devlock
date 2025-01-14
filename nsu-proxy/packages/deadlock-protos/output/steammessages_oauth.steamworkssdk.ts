// @generated by protobuf-ts 2.9.4 with parameter use_proto_field_name
// @generated from protobuf file "steammessages_oauth.steamworkssdk.proto" (syntax proto2)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message COAuthToken_ImplicitGrantNoPrompt_Request
 */
export interface COAuthToken_ImplicitGrantNoPrompt_Request {
  /**
   * @generated from protobuf field: optional string clientid = 1;
   */
  clientid?: string;
}
/**
 * @generated from protobuf message COAuthToken_ImplicitGrantNoPrompt_Response
 */
export interface COAuthToken_ImplicitGrantNoPrompt_Response {
  /**
   * @generated from protobuf field: optional string access_token = 1;
   */
  access_token?: string;
  /**
   * @generated from protobuf field: optional string redirect_uri = 2;
   */
  redirect_uri?: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class COAuthToken_ImplicitGrantNoPrompt_Request$Type extends MessageType<COAuthToken_ImplicitGrantNoPrompt_Request> {
  constructor() {
    super("COAuthToken_ImplicitGrantNoPrompt_Request", [
      {
        no: 1,
        name: "clientid",
        kind: "scalar",
        opt: true,
        T: 9 /*ScalarType.STRING*/,
        options: {
          description: "Client ID for which to count the number of issued tokens",
        },
      },
    ]);
  }
  create(value?: PartialMessage<COAuthToken_ImplicitGrantNoPrompt_Request>): COAuthToken_ImplicitGrantNoPrompt_Request {
    const message = globalThis.Object.create(this.messagePrototype!);
    if (value !== undefined) reflectionMergePartial<COAuthToken_ImplicitGrantNoPrompt_Request>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: COAuthToken_ImplicitGrantNoPrompt_Request,
  ): COAuthToken_ImplicitGrantNoPrompt_Request {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional string clientid */ 1:
          message.clientid = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false) (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: COAuthToken_ImplicitGrantNoPrompt_Request,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* optional string clientid = 1; */
    if (message.clientid !== undefined) writer.tag(1, WireType.LengthDelimited).string(message.clientid);
    let u = options.writeUnknownFields;
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message COAuthToken_ImplicitGrantNoPrompt_Request
 */
export const COAuthToken_ImplicitGrantNoPrompt_Request = new COAuthToken_ImplicitGrantNoPrompt_Request$Type();
// @generated message type with reflection information, may provide speed optimized methods
class COAuthToken_ImplicitGrantNoPrompt_Response$Type extends MessageType<COAuthToken_ImplicitGrantNoPrompt_Response> {
  constructor() {
    super("COAuthToken_ImplicitGrantNoPrompt_Response", [
      {
        no: 1,
        name: "access_token",
        kind: "scalar",
        localName: "access_token",
        opt: true,
        T: 9 /*ScalarType.STRING*/,
        options: { description: "OAuth Token, granted on success" },
      },
      {
        no: 2,
        name: "redirect_uri",
        kind: "scalar",
        localName: "redirect_uri",
        opt: true,
        T: 9 /*ScalarType.STRING*/,
        options: {
          description: "Redirection URI provided during client registration.",
        },
      },
    ]);
  }
  create(
    value?: PartialMessage<COAuthToken_ImplicitGrantNoPrompt_Response>,
  ): COAuthToken_ImplicitGrantNoPrompt_Response {
    const message = globalThis.Object.create(this.messagePrototype!);
    if (value !== undefined) reflectionMergePartial<COAuthToken_ImplicitGrantNoPrompt_Response>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: COAuthToken_ImplicitGrantNoPrompt_Response,
  ): COAuthToken_ImplicitGrantNoPrompt_Response {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional string access_token */ 1:
          message.access_token = reader.string();
          break;
        case /* optional string redirect_uri */ 2:
          message.redirect_uri = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false) (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: COAuthToken_ImplicitGrantNoPrompt_Response,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* optional string access_token = 1; */
    if (message.access_token !== undefined) writer.tag(1, WireType.LengthDelimited).string(message.access_token);
    /* optional string redirect_uri = 2; */
    if (message.redirect_uri !== undefined) writer.tag(2, WireType.LengthDelimited).string(message.redirect_uri);
    let u = options.writeUnknownFields;
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message COAuthToken_ImplicitGrantNoPrompt_Response
 */
export const COAuthToken_ImplicitGrantNoPrompt_Response = new COAuthToken_ImplicitGrantNoPrompt_Response$Type();
/**
 * @generated ServiceType for protobuf service OAuthToken
 */
export const OAuthToken = new ServiceType(
  "OAuthToken",
  [
    {
      name: "ImplicitGrantNoPrompt",
      options: {
        method_description:
          "Grants an implicit OAuth token (grant type 'token') for the specified client ID on behalf of a user without prompting",
      },
      I: COAuthToken_ImplicitGrantNoPrompt_Request,
      O: COAuthToken_ImplicitGrantNoPrompt_Response,
    },
  ],
  { service_description: "Service containing methods to manage OAuth tokens" },
);
