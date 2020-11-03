import React from 'react';
import PropTypes from 'prop-types';

function Food({name, image, rating}) {
// function Food(props) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={image} 
      alt={name}
      width = "30%" 
      height="30%"/>
  </div>
  // return <h1>I like {props.fav}</h1>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg",
    rating: 5.0
  },
  {
    id: 2,
    name: "galbi",
    image: "https://www.seriouseats.com/2019/07/20190619-korean-bbq-kalbi-beef-short-ribs-vicky-wasik-21-1500x1125.jpg",
    rating: 3.4
  },
  {
    id: 3,
    name: "rice bowl",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2019/01/05/8cf7a3c0e113de435fa189b1d3e6984c1.jpg",
    rating: 4.2
  },
  {
    id: 4,
    name: "pork cutlet",
    image: "https://m.jnmall.kr/web/product/big/20200622/10657e1efb69a7bc468339e9b752427b.jpg",
    rating: 2.7
  },
  {
    id: 5,
    name: "kimbap",
    image: "https://i.ytimg.com/vi/2jNgxtUEIEc/maxresdefault.jpg",
    rating: 4.7
  }
];

function renderFood(dish) {
  return <Food
    key={dish.id}
    name={dish.name}
    image={dish.image}
    rating={dish.rating}/>
}

function FoodApp() {
  return (
    <div className="App">
      {foodILike.map(renderFood)}
    </div>
  );
}

export default FoodApp;
