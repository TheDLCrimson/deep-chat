import { DeepChat } from "deep-chat-react"
import { useContext, useState } from "react"
import { ChatContext } from "~Context/ChatContext"

import { InitTabContext } from "~Context/InitTabContext"

const COMP4010 = () => {
  const { initialTabInfo } = useContext(InitTabContext)

  const { messages, savedChats, handleSaveChat, handleLoadChat } =
    useContext(ChatContext)

  return (
    <div className="App">
      <h1>Deep Chat</h1>
      <button onClick={handleSaveChat}>Save Chat</button>
      {savedChats.map((_, index) => (
        <button key={index} onClick={() => handleLoadChat(index)}>
          {initialTabInfo.title} #{index + 1}
        </button>
      ))}
      <DeepChat
        id="chat-element"
        demo={true}
        style={{ borderRadius: "10px" }}
        textInput={{ placeholder: { text: "Welcome to the demo!" } }}
        initialMessages={messages}
      />
    </div>
  )
}

export default COMP4010
