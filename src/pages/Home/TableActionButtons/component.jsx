import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import ActionButtons from './styles'
import { Link } from 'react-router-dom'

class TableActionsButtons extends PureComponent {
  render () {
    const { articleId, handleDeleteClick } = this.props
    return (
      <ActionButtons>
        <Button type="primary">
          <Link to={`/edit/${this.props.articleId}`}>
            Edit
          </Link>
        </Button>
        <Button
          type="danger"
          data-id={articleId}
          onClick={handleDeleteClick}
        >
          Delete
        </Button>
      </ActionButtons>
    )
  }
}

TableActionsButtons.propTypes = {
  articleId: PropTypes.number.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
}

export default TableActionsButtons
