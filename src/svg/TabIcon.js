import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"
const TabIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <G data-name="Group 56" transform="translate(-183 -37)">
      <Circle
        data-name="Ellipse 33"
        cx={24}
        cy={24}
        r={24}
        transform="translate(183 37)"
        fill="#2e2e2e"
      />
      <G fill="#fff">
        <Path
          data-name="Path 7"
          d="M208.899 61.5a1.4 1.4 0 1 1-1.4-1.365 1.4 1.4 0 0 1 1.4 1.365Z"
        />
        <Path
          data-name="Path 8"
          d="M207.5 49A12.5 12.5 0 1 0 220 61.5 12.514 12.514 0 0 0 207.5 49Zm6.315 6.811-2.818 7.044a3.846 3.846 0 0 1-2.143 2.143l-7.043 2.817a.481.481 0 0 1-.625-.625l2.817-7.044a3.846 3.846 0 0 1 2.143-2.143l7.044-2.817a.481.481 0 0 1 .625.625Z"
        />
      </G>
    </G>
  </Svg>
)

export default TabIcon
