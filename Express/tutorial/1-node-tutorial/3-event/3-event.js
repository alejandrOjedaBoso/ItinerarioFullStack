const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log("Data recived name: " + name + " with id:" + id);
});
customEmitter.on("response", () => {
  console.log("Some other data");
});

customEmitter.emit("response", "jhon", 34);
