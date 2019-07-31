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
  BodyInputWrapper,
  ButtonGroup,
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
  state = {
    title: '',
    body: '',
  }

  goToHomePage = () => {
    this.props.history.push('/home')
  }

  componentDidMount () {
    const locationItems = this.props.location.pathname.split('/')
    const id = locationItems[locationItems.length - 1]
    this.props.getArticleById(id)
  }

  onChange = event => {
    const { name, value } = event.target
    this.setState(() => ({
      [name]: value,
    }))
  }

  handleButtonClick = id => () => {
    this.props.updateArticleById(id, this.state)
  }

  render () {
    const locationItems = this.props.location.pathname.split('/')
    const id = locationItems[locationItems.length - 1]

    return (
      <EditPageWrapper>
        <PageTitle>Edit article</PageTitle>
        <Separator />
        <InputGroup>
          <Span>Title:</Span>
          <InputWrapper key={this.props.article.title}>
            <Input
              defaultValue={this.props.article.title}
              name="title"
              size="large"
              placeholder="Enter title of your article"
              onChange={this.onChange}
              required />
          </InputWrapper>
        </InputGroup>
        <InputGroup>
          <Span>
            Body:
          </Span>
          <BodyInputWrapper key={this.props.article.body}>
            <TextArea
              defaultValue={this.props.article.body}
              name="body"
              autosize={{ minRows: 8, maxRows: 20 }}
              size="large"
              placeholder="Enter body of your article"
              onChange={this.onChange} />
          </BodyInputWrapper>
        </InputGroup>
        <ButtonGroup>
          <Button
            size="large"
            type="primary"
            onClick={this.handleButtonClick(id)}
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
    updateArticleById: (id, payload) => dispatch(editArticlePending(id, payload)),
  }
}

EditPage.defaultProps = {
  article: {
    title: '',
    body: '',
  },
}

EditPage.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
  getArticleById: PropTypes.func.isRequired,
  updateArticleById: PropTypes.func.isRequired,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPage))
