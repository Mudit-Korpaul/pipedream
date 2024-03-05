export default {
  key: "chatbot-action",
  name: "Chatbot Action",
  description: "Triggers when Chatbot Action is called",
  version: "0.3.0",
  type: "source",
  props: {
    hey: {
      type: "boolean",
      optional: true,
    },
    Instructions: {
      type: "alert",
      alertType: "info",
      content: `
      - Go to the "Dashboard" section in Chatwith.
      - Select the form where you want the trigger to occur.
      - Click on "Integrations" section.
      - Find "Webhooks" integration and click on "connect" to activate it.
      - In the webhook settings, paste the URL shown after you click "Create Source" 👇
      - Click "Submit" in Chatwith.`,
    },
    httpInterface: {
      type: "$.interface.http",
      customResponse: false,
    },
  },
  async run(event) {
    this.$emit(event.body);
  },
};
