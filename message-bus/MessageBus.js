export class MessageBus {
  constructor() {
    if (!MessageBus.instance) {
      console.log("Creating new instance");
      this.channel = null;
      this.listeners = [];

      try {
        this.channel = new BroadcastChannel("widget-channel");
      } catch (error) {
        console.error(error);
      }

      MessageBus.instance = this;
    }
    return MessageBus.instance;
  }

  send(message) {
    if (this.channel) {
      this.channel.postMessage(message);
    }
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  unsubscribe(listener) {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  receive() {
    if (this.channel) {
      this.channel.onmessage = (message) =>
        this.listeners.forEach((listener) => listener(message));
    }
  }
}

export class MessageAPI {
  constructor() {
    this.messageBus = new MessageBus();
    this.messageBus.receive();
  }

  send(message) {
    this.messageBus.send(message);
  }

  subscribe(listener) {
    this.messageBus.subscribe(listener);
  }

  unsubscribe(listener) {
    this.messageBus.unsubscribe(listener);
  }
}

const messageAPI = new MessageAPI();

export const send = messageAPI.send.bind(messageAPI);
export const subscribe = messageAPI.subscribe.bind(messageAPI);
export const unsubscribe = messageAPI.unsubscribe.bind(messageAPI);
