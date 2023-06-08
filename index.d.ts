
declare module "react-ribbons" {
  import { Component } from 'react'

  export interface RibbonContainerProps {
    className?: string
  }

  class RibbonContainer extends Component<RibbonContainerProps, any> { render: () => any }
  
  export interface RibbonProps {
    side: "right" | "left"
    type: "corner" | "edge"
    size: "normal" | "large"
    backgroundColor?: string
    color?: string
    fontFamily?: string
    withStripes?: boolean
  }
  
  class Ribbon extends Component<RibbonProps, any> { render: () => any }
}
