class Message {
  constructor({
    type,
    id = null,
    recipient_id = null,
    origin = null,
    event_manager_origin = null,
    payload = null,
  }) {
    this.id = id;
    this.recipient_id = recipient_id;
    this.type = type;
    this.origin = origin;
    this.event_manager_origin = event_manager_origin;
    this.payload = payload;
  }
}

export default Message;
