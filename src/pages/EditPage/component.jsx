import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import ReactRouterPropTypes from 'react-router-prop-types'
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
    this.props.getArticleById(id)
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
          <InputWrapper>
            <Input
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

EditPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
  }),
  getArticleById: PropTypes.func.isRequired,
  updateArticleById: PropTypes.func.isRequired,
}

export default withRouter(EditPage)
