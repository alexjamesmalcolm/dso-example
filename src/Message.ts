import { BaseModel, Model, Field, FieldType } from "./deps.ts";

@Model("message")
class Message extends BaseModel {
  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id: number;

  @Field({ type: FieldType.STRING, length: 30 })
  content: string;
}

export default Message;
