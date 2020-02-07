interface waitForDbProps {
  hostname: string;
  port?: number;
  delay?: number
}

const waitForDb = (props: waitForDbProps): Promise<boolean> =>
  new Promise(resolve => {
    const interval = setInterval(() => {
      console.log("Waiting for db...");
      const success = () => {
        console.log("Successfully connected to db");
        resolve(true);
        clearInterval(interval);
      };
      Deno.dial({
        hostname: props.hostname,
        port: props.port || 3306
      })
        .then(() => success())
        .catch(() => console.log("Attempted to connect"));
    }, props.delay || 3000);
  });

export default waitForDb;
