import { collection, getDocs, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const addNewMessage = (message, chatID) => {
  if (!message || !chatID) return;

  const messagesCollection = collection(db, "groups", chatID, "messages");

  addDoc(messagesCollection, {
    message,
    userId: 1,
    createdAt: new Date(),
    messageFile: null,
    messageReplies: [],
  });
};

const listenMessages = async (chatID, setMessages) => {
  if (!chatID) return;

  const messagesCollectionRef = collection(db, "groups", chatID, "messages");

  return onSnapshot(
    messagesCollectionRef,
    (snapshot) => {
      const messages = [];

      snapshot.forEach((doc) => {
        const id = doc.id;
        const message = doc.data();

        messages.push({ ...message, id });
      });
      console.log(messages);
      setMessages(
        messages.sort(
          (messageA, messageB) => messageA.createdAt - messageB.createdAt
        )
      );
    },
    (error) => console.error(error)
  );
};

export { addNewMessage, listenMessages };
