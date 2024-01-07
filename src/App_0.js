import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "",
    rating: 4.5
  },
  {
    id: 2,
    name: "bbq",
    image: "",
    rating: 4.0
  },
  {
    id: 3,
    name: "bibimbap",
    image: "",
    rating: 5.0
  },
]

function Food({ name, picture, rating }) {
  return <div>
    <h1>I like { name }</h1>
    <h4>{ rating }/5.0</h4>
    <img src={picture} alt={ name } />
    </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired

}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id} 
          name={dish.name} 
          picture={dish.image}
          rating={dish.rating} 
          />
          ))}
    </div>
  )
}

export default App;
