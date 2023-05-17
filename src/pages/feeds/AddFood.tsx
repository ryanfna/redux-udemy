import { database } from 'config/firebase.config'
import { addDoc, collection } from 'firebase/firestore'
import { useState } from 'react'
import { FoodDto } from 'types'

type Payload = Partial<FoodDto>

const initialFood: Payload = {
  name: '',
  description: '',
  price: 0,
  image: '',
  isAvailable: false
}

const AddFood = () => {
  const [food, setFood] = useState<Payload>(initialFood)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFood({ ...food, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const docRef = await addDoc(collection(database, 'foods'), food)
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Add Food</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" className="form-control" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input type="number" name="price" id="price" className="form-control" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="image">Image</label>
                <input type="text" name="image" id="image" className="form-control" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="isAvailable">Is Available</label>
                <input
                  type="checkbox"
                  name="isAvailable"
                  id="isAvailable"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Add Food
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddFood
