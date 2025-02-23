import React from 'react'

const Home = () => {
  return (
    <div>
     <img src="/food.jpg" class="img-fluid w-100 pt-1" alt="..."/ >
     <div class="row row-cols-1 row-cols-md-2 g-4 m-2">
  <div class="col">
    <div class="card">
      <img src="/dose.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Dosa</h5>
        <p class="card-text">Dosa is a typical South Indian dish that is made from a fermented mixture of rice and white gram.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/roticurry.jpg" class="card-img-top" alt="..."/ >
      <div class="card-body">
        <h5 class="card-title">Roti Curry</h5>
        <p class="card-text">Roti curry is a flavorful dish consisting of soft, unleavened bread (roti) paired with a rich, spiced curry made from vegetables, meat, or lentils.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/biryani.jpg" class="card-img-top" alt="..."/ >
      <div class="card-body">
        <h5 class="card-title">Biryani</h5>
        <p class="card-text">Biryani is a mixed rice dish popular in South Asia, made with rice, meat (chicken, goat, lamb, beef) or seafood (prawns or fish), and spices.Biryani is a mixed rice dish popular in South Asia, made with rice, meat (chicken, goat, lamb, beef) or seafood (prawns or fish), and spices.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/noo.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Noodles</h5>
        <p class="card-text">Noodles are long, thin strands of dough, typically made from wheat, rice, or other starches, and cooked by boiling or frying.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home
