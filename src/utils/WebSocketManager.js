import Message from "./Message";

class WebSocketManager {
  constructor(url) {
    this.socket = new WebSocket(url);
    this.callbacks = new Map();
    this.socket.addEventListener("message", this.matchEvent.bind(this));
  }

  addEventListener(messageType, callback) {
    let _arr = this.callbacks.get(messageType) || [];
    _arr.push(callback);
    this.callbacks.set(messageType, _arr);
  }

  matchEvent(event) {
    const unmarshalledMessage = new Message(JSON.parse(event.data));
    const _callbacks = this.callbacks.get(unmarshalledMessage.type);
    if (!_callbacks) {
      return;
    }

    _callbacks.forEach((callback) => {
      callback(unmarshalledMessage);
    });
  }

  send(message) {
    this.socket.send(JSON.stringify(message));
  }
}

const socketManager = new WebSocketManager("ws://localhost:8000");
export default socketManager;
