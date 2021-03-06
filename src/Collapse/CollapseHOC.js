/**
 * Created by kisnows on 2017/9/4.
 */
import PropTypes from 'prop-types'

import React, { Component } from 'react'
import getDisplayName from '../_utils/getComponentName'

export default function (options) {
  return function (WrapComponent) {
    class HOC extends Component {
      constructor (props) {
        super(props)
        this.state = {
          isCollapse: this.props.data.isCollapse || true
        }
      }
      static displayName = `HOC(${getDisplayName(WrapComponent)})`
      static propTypes = {
        prefixCls: PropTypes.string,
        onChange: PropTypes.func,
        id: PropTypes.number
      }
      static defaultProps = {
        prefixCls: 'NEUI',
        isCollapse: true,
        data: {},
        ...options
      }
      handleClick = () => {
        this.toggle()
      }
      toggle = (collapse) => {
        const id = this.props.id
        const nextCollapse = collapse || !this.state.isCollapse
        this.props.onChange(id, nextCollapse)
        this.setState({
          isCollapse: nextCollapse
        })
      }

      componentWillReceiveProps (nextProps) {
        if (nextProps.data.isCollapse && nextProps.data.isCollapse !== this.state.isCollapse) {
          this.setState({
            isCollapse: nextProps.data.isCollapse
          })
        }
      }

      render () {
        return (
          <WrapComponent onSubComponentChange={this.handleClick} {...this.props} isCollapse={this.state.isCollapse} />
        )
      }
    }

    return HOC
  }
}
