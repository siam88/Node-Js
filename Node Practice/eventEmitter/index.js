const EventEmitter = require("events");
const Logger = require("./events");

const logger = new Logger();
logger.on("action", arg => {
  console.log("action fired");
});

logger.log("hello this is an event");
