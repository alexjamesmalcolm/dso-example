import {
  BaseModel,
  Defaults,
  dso,
  Field,
  FieldType,
  Join,
  Model,
  Where
} from "https://deno.land/x/dso@0.5.0/mod.ts";

console.log("Finished importing dso");

dso
  .connect({
    username: "root",
    password: "password"
  })
  .then(client => {
    console.log("Connected to DB");
  });
