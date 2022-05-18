import { useEffect, useState } from "react";
import { addNewMessage, listenMessages } from "../../services/database/chat";

import {
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  Avatar,
  MessageSeparator,
} from "@chatscope/chat-ui-kit-react";

const emilyIco =
  "https://chatscope.io/storybook/react/static/media/emily.d34aecd9.svg";

const Chat = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  const [unsubscribe, setUnsubscribe] = useState(null);

  useEffect(() => {
    listenMessages(chatId, setMessages).then((unsubscribe) => {
      setUnsubscribe(() => unsubscribe);
    });
  }, [chatId]);

  useEffect(() => {
    return () => unsubscribe?.();
  }, [unsubscribe]);

  return (
    <ChatContainer>
      <ConversationHeader>
        <Avatar src={emilyIco} name="Emily" />
        <ConversationHeader.Content userName="Emily" />
      </ConversationHeader>
      <MessageList>
        <MessageSeparator content="Saturday, 30 November 2019" />
        {messages.map(({ message, id, userId }) => (
          <Message
            key={id}
            model={{
              message,
              sender: "Emily",
              direction: userId === 1 ? "outgoing" : "incoming",
              position: "normal",
            }}
          ></Message>
        ))}
      </MessageList>
      <MessageInput
        placeholder="Type message here"
        onSend={(message) => addNewMessage(message, chatId)}
      />
    </ChatContainer>
  );
};

export default Chat;
