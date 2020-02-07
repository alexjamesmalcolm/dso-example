import { dso } from "./deps.ts";

interface createDatabaseProps {
  hostname: string;
  username: string;
  password: string;
  db: string;
}

const createDatabase = (props: createDatabaseProps): Promise<any> =>
  dso
    .connect({
      hostname: props.hostname,
      username: props.username,
      password: props.password
    })
    .then(client => {
      client
        .execute(`CREATE DATABASE IF NOT EXISTS ${props.db};`)
        .then(console.log);
    });

export default createDatabase;
