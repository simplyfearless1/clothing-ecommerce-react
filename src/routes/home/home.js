import './home.scss';
import { useState, useEffect } from 'react';
import Categories from '../../components/categories/categories';

const Home = () => {

  const [categories, setCategories] = useState([])

  let cats = [
    {
      "id": 1,
      "title": "hats",
      "img": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "img": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "img": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "img": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "img": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]

  useEffect(() => {
    setCategories(cats)
  }, [])


  return (
    <div className="Home">
      <Categories categories={ categories } />
    </div>
  )
}

export default Home;
