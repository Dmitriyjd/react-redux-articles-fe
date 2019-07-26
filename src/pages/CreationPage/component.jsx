import React, { PureComponent } from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
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
  goToHomePage = () => {
    this.props.history.push('/home')
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

CreationPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
}

export default CreationPage
