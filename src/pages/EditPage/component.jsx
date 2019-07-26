import React, { PureComponent } from 'react'
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
  render () {
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
          >
            Apply
          </Button>
          <Button
            size="large"
            type="default"
          >
            Cancel
          </Button>
        </ButtonGroup>
      </EditPageWrapper>
    )
  }
}

export default EditPage
