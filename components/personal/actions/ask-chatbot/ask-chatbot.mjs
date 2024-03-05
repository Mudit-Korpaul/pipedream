import axios from "axios";

export default {
  name: "Ask Chatbot",
  version: "0.1.0",
  key: "ask-chatbot",
  description: "Ask a query to chatbot.",
  props: {
    apikey: {
      type: "string",
      label: "API Key from Chatwith",
      description: "Go to the Account section in Chatwith dashboard.\n \nScroll down to API Key and copy paste the API Key here ;)",
    },
    bot_id: {
      type: "string",
      label: "Chatbot ID",
      description: "UUID of the Chatbot to query.",
    },
    message: {
      type: "string",
      label: "Message",
      description: "Message to send the bot.",
    },
    stream: {
      type: "boolean",
      label: "Stream",
      optional: true,
    },
    conv_id: {
      type: "string",
      label: "Conversation ID",
      description: "Conversation ID, if any.",
      optional: true,
    },
  },
  type: "action",
  methods: {},

  async run() {
    const url = `https://api.chatwith.tools/v1/chatbot/${this.bot_id}/chat`;
    const headers = {
      "Authorization": `Bearer ${this.apikey}`,
      "Content-Type": "application/json",
    };
    const body = {
      message: this.message,
      conversationId: this.conv_id,
      stream: this.stream,
    };

    const response = await axios.post(url, body, {
      headers: headers,
    });
    return response.data;
  },
};
