import { TabProvider } from "~Context/TabContext"
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
      <TabProvider>
        <DeepChatComponent />
        <TabInfoDisplay />
      </TabProvider>
    </div>
  )
}

export default IndexSidePanel
