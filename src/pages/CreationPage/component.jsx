import React, { PureComponent } from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createArticlesPending } from '../../store/actions/articles'
import { Button, Input } from 'antd'
import {
  EditPageWrapper,
  PageTitle,
  Separator,
  InputGroup,
  Span,
  InputWrapper,
  ButtonGroup,
  BodyInputWrapper,
} from './styles'
import TextArea from 'antd/lib/input/TextArea'

class CreationPage extends PureComponent {
  state = {}

  onChange = event => {
    const { name, value } = event.target
    this.setState(() => ({
      [name]: value,
    }))
  }

  goToHomePage = () => {
    this.props.history.replace('/home')
  }

  handleButtonClick = () => () => {
    this.props.createArticlesPending(this.state)
  }

  render () {
    return (
      <EditPageWrapper>
        <PageTitle>Create article</PageTitle>
        <Separator />
        <InputGroup>
          <Span>Title:</Span>
          <InputWrapper>
            <Input
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
          <BodyInputWrapper>
            <TextArea
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
            onClick={this.handleButtonClick()}
          >
            Add
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

const mapDispatchToProps = dispatch => {
  return {
    createArticlesPending: payload => dispatch(createArticlesPending(payload)),
  }
}

CreationPage.propTypes = {
  createArticlesPending: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
}

export default connect(null, mapDispatchToProps)(CreationPage)
