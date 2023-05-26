import { UserDto } from '@types'
import { FC } from 'react'

const ProfileCard: FC<UserDto> = ({ id, phone }) => {
  return (
    <>
      <div className="card">
        <h3>{id}</h3>
        <h3>{phone}</h3>
      </div>
    </>
  )
}

export default ProfileCard
