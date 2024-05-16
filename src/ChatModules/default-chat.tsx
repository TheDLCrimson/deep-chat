import { DeepChat } from "deep-chat-react"
import { useContext, useState } from "react"

import { ChatContext } from "~Context/ChatContext"
import { CurrentTabContext } from "~Context/CurrentTabContext"
import { InitTabContext } from "~Context/InitTabContext"

const DefaultChat = () => {
  const { initialTabInfo } = useContext(InitTabContext)

  const { messages, savedChats, handleSaveChat, handleLoadChat } =
    useContext(ChatContext)

  return (
    <div className="App">
      <h1>Default Deep Chat</h1>
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

export default DefaultChat
