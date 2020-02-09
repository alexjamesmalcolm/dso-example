import waitForDb from "./wait-for-db.ts";
import createDatabase from "./create-db.ts";
import Message from "./Message.ts";
import { dso } from "../deps.ts";

const hostname = "dso-mysql"; // If ran outside docker container then replace this with "localhost"
const username = "root";
const password = "password"; // As specified in the docker-compose.yml file
const db = "dso_example"; // This is the name of the database that will be created, it can be anything

const main = async () => {
  const MessageModel = new Message();
  dso.define(Message);
  await waitForDb({ hostname });
  await createDatabase({ hostname, db, password, username });
  await dso.connect({ hostname, db, password, username });
  await dso.sync(false);
  const insertId = await MessageModel.insert({
    content: "Hello"
  });
  console.log({ insertId });
  const messages = await MessageModel.findAll({});
  console.log({ messages });
};

main();
