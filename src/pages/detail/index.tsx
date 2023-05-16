import { useParams } from 'react-router-dom'

const DetailFood = () => {
  const { foodId } = useParams()
  return (
    <div>
      <h1>Detail Food</h1>
      <p>Food ID: {foodId}</p>
    </div>
  )
}

export default DetailFood
