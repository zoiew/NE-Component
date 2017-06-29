/**
 * Created by hzyuanqi1 on 2017/5/26.
 */
import React from 'react'
const PropTypes = React.PropTypes
import classname from 'classnames'
import Modal from '../Modal'
const noop = () => { }

export default class ActionSheet extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    show: PropTypes.bool,       // 显示
    clickMaskToClose: PropTypes.bool, // 是否点击遮罩关闭
    onMaskClick: PropTypes.func,  // 遮罩点击事件
    onClose: PropTypes.func, // 关闭动作面板事件
    menus: PropTypes.array,   // 内容列表
    onMenuChange: PropTypes.func, // 选项点击事件
    autoClose: PropTypes.bool,  // 点击一个选项后，是否自动关闭
    showCancel: PropTypes.bool,  // 显示底部取消
    cancelText: PropTypes.string, // 取消文本
    transitionName: PropTypes.string, // 动画的类名
    transitionTimeOut: PropTypes.number // 动画的时间
  }

  static defaultProps = {
    prefixCls: 'NEUI',
    show: false,
    onMaskClick: noop,
    clickMaskToClose: true,
    onClose: noop,
    onMenuChange: noop,
    autoClose: true,
    showCancel: false,
    cancelText: '取消',
    transitionName: 'verticalSlideBT',
    transitionTimeOut: 300,
    menus: []
  }

  constructor (props) {
    super(props)
  }

  onMenuClick = (key) => {
    const { autoClose, onMenuChange, onClose } = this.props
    autoClose && onClose()
    onMenuChange(key)
  }
  onMaskClick = (e) => {
    const {clickMaskToClose,onClose,onMaskClick} = this.props
    clickMaskToClose && onClose()
    onMaskClick(e)
  }
  render () {
    const {
      prefixCls, show, menus, className, showCancel, cancelText, onMaskClick, transitionName, transitionTimeOut, title, ...others
    } = this.props
    const cls = classname({
      [`${prefixCls}_action__sheet`]: true,
      [className]: className
    })
    return (
      <Modal show={show} transitionName={transitionName} transitionTimeOut={transitionTimeOut} onClickAway={this.onMaskClick} {...others}>
        <ul className={cls}>
          { title ? <li>{title}</li> : null}
          {menus.map((el, index) => {
            return <li key={index} onClick={() => this.onMenuClick(index)}>{el}</li>
          })}
          {showCancel &&
          <li className={`${prefixCls}_action_cancel`} key={-1} onClick={() => this.onMenuClick(-1)}>{cancelText}</li>
          }
        </ul>
      </Modal>
    )
  }
}
