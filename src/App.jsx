import { useState } from "react";
import Home from "./components/Home";
import Chat from "./components/Chat";

const App = () => {
  const [chatId, setChatId] = useState(null);

  return (
    <Home setChatId={setChatId}>
      <Chat chatId={chatId} />
    </Home>
  );
};

export default App;
