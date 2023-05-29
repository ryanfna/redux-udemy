import { UserDto } from '@types'
import { FC } from 'react'
import styled from 'styled-components'

const ProfileCardContainer = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  flex-direction: column;
  background-color: white;
  min-height: 50%;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 10px;
`

const ProfileInline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ProfileInlineTitle = styled.div`
  font-size: 1rem;
  color: #991b1b;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
`

const ProfileInlineText = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #991b1b;
  margin-bottom: 1rem;
`

const ProfileCard: FC<UserDto> = ({ id, phone }) => {
  return (
    <ProfileCardContainer>
      <ProfileInline>
        <ProfileInlineTitle>ID: </ProfileInlineTitle>
        <ProfileInlineText>{id}</ProfileInlineText>
      </ProfileInline>
      <ProfileInline>
        <ProfileInlineTitle>Phone: </ProfileInlineTitle>
        <ProfileInlineText>{phone}</ProfileInlineText>
      </ProfileInline>
    </ProfileCardContainer>
  )
}

export default ProfileCard
