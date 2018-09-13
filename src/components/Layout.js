import React, { PureComponent } from 'react'
import Link from 'next/link'

export default class Layout extends PureComponent {
  render () {
    return (
      <div className='layout'>
        logo
        { this.props.children }
      </div>
    )
  }
}