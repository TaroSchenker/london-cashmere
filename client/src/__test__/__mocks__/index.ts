/* eslint-disable @typescript-eslint/no-var-requires */
// src/mocks/index.js
if (typeof global.process === "undefined") {
  const { worker } = require("./browser");
  worker.start();
} else {
  const { server } = require("./node");
  server.listen();
}

export {};
