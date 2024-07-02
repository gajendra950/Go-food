import React from "react";

export default function Carousal() {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"style ={{objectFit:"contain !important"}}>
      
      <div className="carousel-inner" id ='carousel'>
        <div className="carousel-caption" style ={{zIndex:"10"}}>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success text-white bg-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="carousel-item active">
          <img
            src="https://img.freepik.com/free-photo/grilled-gourmet-burger-with-cheese-tomato-onion-french-fries-generated-by-artificial-intelligence_25030-63181.jpg"
            className="d-block w-100" style={{filter:"brightness(30%)"}}
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://media.istockphoto.com/id/1133151212/photo/japanese-dumplings-gyoza-with-pork-meat-and-vegetables.jpg?s=612x612&w=0&k=20&c=vC6GTUDGK6dD5_QHvY1V7fVUdPx-z4TG73DUACR_L5s="
            className="d-block w-100"style={{filter:"brightness(30%)"}}
            alt="Momos"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_640.jpg"
            className="d-block w-100"style={{filter:"brightness(30%)"}}
            alt="Pizza"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
