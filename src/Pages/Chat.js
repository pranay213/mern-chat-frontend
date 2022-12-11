import React, { useEffect, useState } from "react";
import { getChat } from "../Api/api";

export const Chat = () => {
  const [chat, setChat] = useState({});

  useEffect(() => {
    (async () => {
      let res = await getChat();
      if (res) {
        setChat(res);
      }
    })();
  }, []);

  return (
    <>
      {chat && chat.length
        ? chat.map((user) => {
            return <li key={user._id}>{user.chatName}</li>;
          })
        : "No Result Found"}
    </>
  );
};
