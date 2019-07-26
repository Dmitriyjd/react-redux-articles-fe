import styled from 'styled-components'

export const CreationPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 40px;
  min-width: 330px;
  font-size: 20px;
`

export const PageTitle = styled.span`
  padding-left: 10px;
  font-size: 30px;
`

export const Separator = styled.hr`
  height: 1px;
  width: 100%;
  margin: 10px 0;
  background-color: rgba(33,37,41,4)
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 10px;
`

export const ButtonGroup = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  width: 150px;
`

export const Span = styled.span`
  font-size: 20px;
  margin-bottom: 5px;
`

export const InputWrapper = styled.div`
  padding: 5px;
  width: 250px;
  min-width: 210px;
`

export const BodyInputWrapper = styled.div`
  padding: 5px;
  width: 50%;
  min-width: 270px;
`
