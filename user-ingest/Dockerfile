FROM rust:bookworm as builder

WORKDIR /app

COPY . .

RUN cargo build --release

FROM debian:bookworm-slim

RUN apt-get update && \
    apt-get install -y curl openssl libssl-dev ca-certificates && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/target/release/user-ingest /usr/local/bin/user-ingest

EXPOSE 8080

CMD ["user-ingest"]
