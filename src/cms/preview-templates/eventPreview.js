import React from "react"

const IndexPagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "50vh",
      }}
    >
      <div
        style={{
          backgroundPosition: "50% 50%",
          backgroundSize: "fit",
          background: `linear-gradient(to left, gold, transparent), url(${getAsset(
            data.image
          )})`,
        }}
      ></div>
      <div
        style={{
          background: "gold",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Hello</h1>
      </div>
    </div>
  )
}

export default IndexPagePreview
