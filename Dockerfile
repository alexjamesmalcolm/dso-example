FROM maxmcd/deno:slim-v0.30.0
COPY ./ ./
RUN deno fetch ./deps.ts
ENTRYPOINT [ "deno", "--allow-write", "--allow-read", "--allow-net", "./index.ts" ]