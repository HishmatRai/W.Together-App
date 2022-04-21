import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const SendIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={62} height={62} {...props}>
    <G data-name="Group 711" transform="translate(-315 -788)">
      <Circle
        data-name="Ellipse 32"
        cx={31}
        cy={31}
        r={31}
        transform="translate(315 788)"
        fill="#ef7743"
      />
      <Path
        d="M356.053 808.259a.888.888 0 0 0-.933-.2l-19.547 7.103a.888.888 0 0 0 0 1.662l7.632 3.048 5.633-5.651 1.253 1.253-5.659 5.659 3.051 7.632a.876.876 0 0 0 1.643-.027l7.113-19.546a.888.888 0 0 0-.186-.933Z"
        fill="#fff"
      />
    </G>
  </Svg>
)

export default SendIcon
