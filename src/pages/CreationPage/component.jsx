import React, { PureComponent } from 'react'
import { Button, Input } from 'antd'
import {
  CreationPageWrapper,
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
  render () {
    return (
      <CreationPageWrapper>
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
              autosize={{ minRows: 8, maxRows: 45 }}
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
          >
            Cancel
          </Button>
        </ButtonGroup>
      </CreationPageWrapper>
    )
  }
}

export default CreationPage
