FROM maxmcd/deno:slim-v0.30.0
WORKDIR /backend
ADD ./ ./
ENTRYPOINT [ "deno", "--allow-write", "./index.ts" ]