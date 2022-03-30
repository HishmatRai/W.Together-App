import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"
const AddIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={71} height={71} {...props}>
    <G data-name="Group 160" transform="translate(-172 -356)">
      <Circle
        data-name="Ellipse 18"
        cx={35.5}
        cy={35.5}
        r={35.5}
        transform="translate(172 356)"
        fill="#2e2e2e"
      />
      <G fill="#e4e4e4">
        <Path
          data-name="Trac\xE9 12"
          d="M207.5 404.125a2.5 2.5 0 0 1-2.5-2.5v-20.25a2.5 2.5 0 0 1 5 0v20.25a2.5 2.5 0 0 1-2.5 2.5Z"
        />
        <Path
          data-name="Trac\xE9 13"
          d="M217.625 394h-20.25a2.5 2.5 0 0 1 0-5h20.25a2.5 2.5 0 0 1 0 5Z"
        />
      </G>
    </G>
  </Svg>
)

export default AddIcon
