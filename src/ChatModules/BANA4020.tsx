import { DeepChat } from "deep-chat-react"
import { useContext, useState } from "react"

import { ChatContext } from "~Context/ChatContext"
import { InitTabContext } from "~Context/InitTabContext"

const BANA4020 = () => {
  const { initialTabInfo } = useContext(InitTabContext)

  const { messages, savedChats, handleSaveChat, handleLoadChat } =
    useContext(ChatContext)

  return (
    <div className="App">
      <h1>
        Deep Chat for BANA4020 Computational Machine Learning for Business
        Analytics
      </h1>
      <button onClick={handleSaveChat}>Save Chat</button>
      {savedChats.map((_, index) => (
        <button key={index} onClick={() => handleLoadChat(index)}>
          {initialTabInfo.title} #{index + 1}
        </button>
      ))}
      <DeepChat
        id="chat-element"
        demo={true}
        style={{
          borderRadius: "10px",
          width: "80vw",
          height: "calc(100vh - 70px)",
          fontSize: "1.37rem",
          paddingTop: "10px"
        }}
        messageStyles={{
          default: { shared: { innerContainer: { fontSize: "1rem" } } }
        }}
        inputAreaStyle={{ fontSize: "1rem" }}
        textInput={{ placeholder: { text: "Welcome to the demo!" } }}
        initialMessages={messages}
      />
    </div>
  )
}

export default BANA4020
