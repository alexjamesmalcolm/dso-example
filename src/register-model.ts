import { BaseModel, dso } from "../deps.ts";

const registerModel = <T extends BaseModel>(type: new () => T): T =>
  dso.define(type);

export default registerModel;
