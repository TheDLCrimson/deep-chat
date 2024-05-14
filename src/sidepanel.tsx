import { ChatProvider } from "~Context/ChatContext"
import { CurrentTabProvider } from "~Context/CurrentTabContext"
import { InitTabProvider } from "~Context/InitTabContext"
import DeepChatComponent from "~features/deep-chat-component"
import TabInfoDisplay from "~features/get-tab-info"

function IndexSidePanel() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 10,
        alignItems: "center"
      }}>
      <InitTabProvider>
        <ChatProvider>
        <DeepChatComponent />
        </ChatProvider>
        <CurrentTabProvider>
          <TabInfoDisplay />
        </CurrentTabProvider>
      </InitTabProvider>
    </div>
  )
}

export default IndexSidePanel
