/**
 * Created by kisnows on 2017/2/22.
 */
import PropTypes from 'prop-types';

import React, { Component } from 'react';
import {Link} from 'react-router'
import {
  Form,
  FormCell,
  Input,
  Select,
  CheckBox,
  Cells,
  Cell,
  CellHeader,
  Icon,
  CellBody,
  CellFooter,
  Panel,
  DatePicker,
  Picker,
  Modal,
  Alert,
  VerifyButton,
  Toast,
  Button,
  Collapse
} from '../../../src'

export default class ButtonPage extends Component {
  render() {
    return(
      <section>
        <div className="page--header">
          <h1 className="page-title">Button</h1>
          <p className="page--desc">按钮</p>
        </div>
        <Button>Button Primary</Button>
        <Button role={'secondary'}>Button Secondary</Button>
        <Button disabled={true}>Button Disabled</Button>
        <Button style={'rightAngle'}>Button Primary</Button>
        <Button style={'rightAngle'} role={'secondary'}>Button Secondary</Button>
        <Button style={'rightAngle'} disabled={true}>Button Disabled</Button>
        <Button size={'small'}>Small Button</Button><Button size={'small'} disabled={true}>Small Button</Button>
      </section>
    )
  }
}
