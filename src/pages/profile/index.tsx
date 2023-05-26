import { useSelector } from 'react-redux'
import ProfileCard from './profile-card'

const Profile = () => {
  const user = useSelector((state: any) => state.user)

  return <ProfileCard {...user} />
}

export default Profile
