import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import ReactRouterPropTypes from 'react-router-prop-types'
import {
  getArticleByIdPending,
  editArticlePending,
} from '../../store/actions/articles'
import {
  BodyInputWrapper, ButtonGroup,
  EditPageWrapper,
  InputGroup,
  InputWrapper,
  PageTitle,
  Separator,
  Span,
} from './styles'
import { Button, Input } from 'antd'
import TextArea from 'antd/lib/input/TextArea'

class EditPage extends PureComponent {
  goToHomePage = () => {
    this.props.history.push('/home')
  }

  componentDidMount () {
    const locationItems = this.props.location.pathname.split('/')
    const id = locationItems[locationItems.length - 1]
    console.log('id', id)
    this.props.getArticleById(id)
    console.log('component', this.props.article)
  }

  render () {
    console.log('render', this.props.article)
    const locationItems = this.props.location.pathname.split('/')
    const id = locationItems[locationItems.length - 1]

    return (
      <EditPageWrapper>
        <PageTitle>Edit article</PageTitle>
        <Separator />
        <InputGroup>
          <Span>Title:</Span>
          <InputWrapper>
            <Input
              defaultValue={this.state.title}
              size="large"
              placeholder="Enter title of your article"
              required />
          </InputWrapper>
        </InputGroup>
        <InputGroup>
          <Span>
            Body:
          </Span>
          <BodyInputWrapper>
            <TextArea
              defaultValue={this.props.article.body}
              autosize={{ minRows: 8, maxRows: 20 }}
              size="large"
              placeholder="Enter body of your article" />
          </BodyInputWrapper>
        </InputGroup>
        <ButtonGroup>
          <Button
            size="large"
            type="primary"
            onClick={this.props.updateArticleById(id)}
          >
            Apply
          </Button>
          <Button
            size="large"
            type="default"
            onClick={this.goToHomePage}
          >
            Cancel
          </Button>
        </ButtonGroup>
      </EditPageWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    article: state.articles.article,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getArticleById: id => dispatch(getArticleByIdPending(id)),
    updateArticleById: id => dispatch(editArticlePending(id)),
  }
}

EditPage.defaultProps = {
  article: PropTypes.shape({
    title: '',
    body: '',
  }),
}

EditPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
  }),
  getArticleById: PropTypes.func.isRequired,
  updateArticleById: PropTypes.func.isRequired,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPage))
