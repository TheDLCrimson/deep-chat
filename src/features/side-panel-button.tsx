import React from "react"

export const OpenSidePanelButton = () => {
  const openSidePanel = () => {
    chrome.runtime.onMessage.addListener((message) => {
      chrome.windows.getCurrent((window) =>
        chrome.sidePanel.open({ windowId: window.id })
      )
    })
  }

  return (
    <button
      onClick={openSidePanel}
      type="button"
      className="plasmo-flex plasmo-flex-row plasmo-items-center plasmo-px-4 plasmo-py-2 plasmo-text-sm plasmo-rounded-lg plasmo-transition-all plasmo-border-none
      plasmo-shadow-lg hover:plasmo-shadow-md
      active:plasmo-scale-105 plasmo-bg-slate-50 hover:plasmo-bg-slate-100 plasmo-text-slate-800 hover:plasmo-text-slate-900">
      Click here to open the side panel
    </button>
  )
}
