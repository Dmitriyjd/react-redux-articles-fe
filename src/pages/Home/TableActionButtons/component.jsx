import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button } from 'antd'
import ActionButtons from './styles'
import { deleteArticlePending } from '../../../store/actions/articles'
import { Link } from 'react-router-dom'

class TableActionsButtons extends PureComponent {
  handleButtonClick = articleId => () => {
    this.props.deleteArticle(articleId)
  }

  render () {
    const { articleId } = this.props
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
          onClick={this.handleButtonClick}
        >
          Delete
        </Button>
      </ActionButtons>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteArticle: id => dispatch(deleteArticlePending(id)),
  }
}

TableActionsButtons.propTypes = {
  articleId: PropTypes.string.isRequired,
  deleteArticle: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(TableActionsButtons)
