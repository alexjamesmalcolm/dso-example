FROM maxmcd/deno:slim-v0.32.0
WORKDIR /project
COPY ./ ./
RUN deno fetch ./src/deps.ts
ENTRYPOINT [ "deno", "run", "-c", "tsconfig.json", "--allow-write", "--allow-net", "./src/index.ts" ]
