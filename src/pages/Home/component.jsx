import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { columns } from './tableConfig'
import { Table } from 'antd'

import { HomePageWrapper } from './styles'

class Home extends PureComponent {
  render () {
    return (
      <HomePageWrapper>
        <Table
          columns={columns}
          dataSource={this.props.articles} />
      </HomePageWrapper>
    )
  }
}

Home.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      Body: PropTypes.string,
    }),
  ).isRequired,
}

export default Home
