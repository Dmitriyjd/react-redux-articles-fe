import React, { Component } from 'react'
import { Button, Table } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import TableActionsButtons from '../TableActionButtons'

import { TableWrapper, StyledIcon } from './styles'

class ArticlesTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isMobile: false,
    }
  }

  getColumns = () => {
    const { deleteArticle } = this.props

    return [
      {
        title: 'id',
        dataIndex: '_id',
      },
      {
        title: 'Title',
        dataIndex: 'title',
      },
      {
        title: 'Body',
        dataIndex: 'body',
      },
      {
        title: 'Actions',
        render: article => (
          <TableActionsButtons
            articleId={article._id} />
        ),
      },
    ]
  };

  render () {
    const {
      articles,
      goToCreationPage,
    } = this.props
    const columns = this.getColumns()

    return (
      <TableWrapper>
        <Button
          size="large"
          type="primary"
          onClick={goToCreationPage}
        >
          Add
          <StyledIcon>
            <FontAwesomeIcon icon={faPlus} />
          </StyledIcon>
        </Button>
        <Table
          columns={columns}
          dataSource={articles}
          rowKey="_id"
          pagination={{
            defaultCurrent: 1,
            total: articles.length,
            hideOnSinglePage: true,
            pageSize: 10,
          }} />
      </TableWrapper>
    )
  }
}

ArticlesTable.defaultProps = {
  articles: [],
}

ArticlesTable.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string,
    }),
  ).isRequired,
  goToCreationPage: PropTypes.func.isRequired,
}

export default ArticlesTable
