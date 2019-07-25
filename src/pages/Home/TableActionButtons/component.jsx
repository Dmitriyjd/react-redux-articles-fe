import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import ActionButtons from './styles'

class TableActionsButtons extends PureComponent {
  handleClickEditBtn = () => {
    const { goToEditPage, articleId } = this.props

    goToEditPage(articleId)
  };

  render () {
    const { articleId, handleDeleteClick } = this.props
    return (
      <ActionButtons>
        <Button type="primary" onClick={this.handleClickEditBtn}>
          Edit
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
  goToEditPage: PropTypes.func.isRequired,
  articleId: PropTypes.number.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
}

export default TableActionsButtons
