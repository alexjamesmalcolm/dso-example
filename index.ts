import waitForDb from "./wait-for-db.ts";
import createDatabase from "./create-db.ts";

/*
console.log("Finished importing dso");

const createDatabase = () =>
  dso
    .connect({
      hostname: "dso-mysql",
      username: "root",
      password: "password"
    })
    .then(client => {
      console.log("Connected to DB");
      console.log(JSON.stringify(client));
      client
        .execute("CREATE DATABASE IF NOT EXISTS dev;")
        .then(console.log)
    })

waitForDb().then(
  () => createDatabase()
)

let t = 20;

const intervalId = setInterval(() => {
    if (t === 0) {
        createDatabase();
    } else if (t > 0) {
        console.log(t);
    } else {
        clearInterval(intervalId)
    }
    t--;
}, 1000)

// connect();
// fetch("http://dso-adminer:8080").then(response => response.status).then(console.log);

*/

const hostname = "dso-mysql";
const user = "root";
const password = "password";

const main = async () => {
  await waitForDb({ hostname });
  await createDatabase({ hostname, db: "test", password, username: user });
};

main();
