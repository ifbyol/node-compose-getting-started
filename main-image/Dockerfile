ARG BASE_IMAGE

FROM ${BASE_IMAGE} as base-image

FROM ubuntu:latest

WORKDIR /usr/src/app

COPY --from=base-image /app/* ./

CMD ["/bin/bash", "/usr/src/app/simple-script.sh"]

