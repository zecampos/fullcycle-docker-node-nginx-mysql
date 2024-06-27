FROM node:18 AS builder

RUN apt update && \
    apt install -y wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for


WORKDIR /home/node/app

COPY . .

RUN yarn 

EXPOSE 3000

CMD [ "yarn", "start" ]