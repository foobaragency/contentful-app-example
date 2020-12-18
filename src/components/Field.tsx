import { Card } from "@contentful/forma-36-react-components"
import color from "color"
import { FieldExtensionSDK } from "contentful-ui-extensions-sdk"
import React, { useEffect, useState } from "react"

export interface FieldProps {
  sdk: FieldExtensionSDK
}

const colors = {
  slateGrey: "#0A0D15",
  steelGrey: "#A3ADC7",
  fogGrey: "#D0D5E2",
  cobaltBlue: "#005DDB",
  arcticBlue: "#009DF0",
  signalBlue: "#02D1FF",
  solidViolet: "#6600B6",
  vividViolet: "#9D21FF",
  signalPink: "#FF32D2",
  powderWhite: "#F9FAFB",
  green: "#00DC80",
  yellow: "#FFCD4C",
  red: "#FC395C",
}

export const Field = (props: FieldProps) => {
  const [value, setValue] = useState(props.sdk.field.getValue())

  useEffect(() => {
    props.sdk.window.startAutoResizer()
  }, [props.sdk.window])

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 8rem)",
        gap: "8px",
      }}
    >
      {Object.entries(colors).map(([name, hex]) => (
        <Card
          key={name}
          selected={value === name}
          onClick={() => {
            props.sdk.field.setValue(name)
            setValue(name)
          }}
          style={{
            height: "2rem",
            background: hex,
            color: color(hex).isLight() ? "black" : "white",
            fontFamily: "monospace",
          }}
        >
          <div>{name}</div>
          <code>{hex}</code>
        </Card>
      ))}
    </div>
  )
}
