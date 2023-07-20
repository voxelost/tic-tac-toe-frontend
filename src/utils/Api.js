import GlobalStore from "./GlobalStore";
import Message from "./Message";
import socketManager from "./WebSocketManager";

const GameServerApi = {
  registerForClientQueue: () => {
    socketManager.send(new Message({ type: "register_for_client_queue" }));
  },

  unregisterFromClientQueue: () => {
    socketManager.send(new Message({ type: "unregister_from_client_queue" }));
  },
};

const TicTacToeGameApi = {
  putChar: (x, y) => {
    socketManager.send(new Message({ type: "game_action", payload: [y, x] }));
  },
};

const Api = {
  gameServerApi: GameServerApi,
  ticTacToeGameApi: TicTacToeGameApi,

  registerCallback: (messageType, callback) => {
    socketManager.addEventListener(messageType, callback);
  },

  sendChatMessage: (message) => {
    socketManager.send(new Message({ type: "chat", payload: message }));
  },

  sendDebugMessage: (payload) => {
    socketManager.send(new Message({ type: "debug", payload: payload }));
  },
};

let serverMessageTypes = ["chat", "debug", "game_action", "game_server_meta"];
serverMessageTypes.forEach((_type) => {
  Api.registerCallback(_type, (msg) =>
    GlobalStore.set("client_id", msg.recipient_id)
  );
});

Api.registerCallback("debug", (msg) => console.log(msg.payload));

export default Api;
