import React from "react";

import {
  MainContainer,
  Avatar,
  Sidebar,
  Search,
  ConversationList,
  Conversation,
} from "@chatscope/chat-ui-kit-react";

const emilyIco =
  "https://chatscope.io/storybook/react/static/media/emily.d34aecd9.svg";

const Home = ({ children, setChatId }) => {
  return (
    <div
      style={{
        height: "100vh",
        position: "relative",
      }}
    >
      <MainContainer responsive>
        <Sidebar position="left" scrollable={false}>
          <Search placeholder="Search..." />
          <ConversationList>
            <Conversation
              name="Group 1"
              lastSenderName="Chat 1"
              info="Yes i can do it for you"
              onClick={() => {
                setChatId("1");
              }}
            >
              <Avatar src={emilyIco} name="Chat 1" status="available" />
            </Conversation>

            <Conversation
              name="Group 2"
              lastSenderName="Joe"
              info="Yes i can do it for you"
              onClick={() => {
                setChatId("2");
              }}
            >
              <Avatar src={emilyIco} name="Joe" status="dnd" />
            </Conversation>

            <Conversation
              name="Group 3"
              lastSenderName="Emily"
              info="Yes i can do it for you"
              unreadCnt={3}
              onClick={() => {
                setChatId("3");
              }}
            >
              <Avatar src={emilyIco} name="Emily" status="available" />
            </Conversation>
          </ConversationList>
        </Sidebar>
        {children}
      </MainContainer>
    </div>
  );
};

export default Home;
