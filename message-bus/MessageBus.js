import { BroadcastChannel } from 'broadcast-channel';

export class MessageBus {
  constructor() {
    if (!MessageBus.instance) {
      console.log("Creating new instance");
      this.channel = new BroadcastChannel('channel-name');
      this.listeners = [];
      MessageBus.instance = this;
    }
    return MessageBus.instance;
  }

  send(message) {
    this.channel.postMessage(message);
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  receive() {
    this.channel.onmessage = (event) => {
      this.listeners.forEach(listener => listener(event.data));
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
    this.listeners = this.messageBus.listeners.filter(l => l !== listener);
  }
}

const messageAPI = new MessageAPI();

export const send = messageAPI.send.bind(messageAPI);
export const subscribe = messageAPI.subscribe.bind(messageAPI);
export const unsubscribe = messageAPI.unsubscribe.bind(messageAPI);