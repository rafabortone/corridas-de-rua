import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import Swal from 'sweetalert2'

export default function Trails() {
  const {
    trailsList,
    setTrailsList,
    setModalVisible,
    setTrail,
    setGrade
  } = useContext(AppContext);

  const url = 'https://60e2ee6f9103bd0017b47673.mockapi.io/api/v1/trails/';

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          variableWidth: true,
        }
      },
      {
        breakpoint: 916,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          variableWidth: true,
          arrows: false,
        }
      }
    ]
  };

  useEffect(() => {
    
    async function getTrails() {
      const response = await fetch(url );
      const data = await response.json();
      
      if(response.status === 200) {
        setTrailsList(data);
      } else {
        console.log(response);
      }
    }

    getTrails();

  }, [setTrailsList]);

  async function handleOpenModal(trail) {
    const grade = trail.grade[0]

    const response = await fetch(url + grade.trailId + '/trails-grade/' + grade.id + '/courses');
    const data = await response.json();

    if(response.status === 200) {
      setGrade(data);
      setTrail(trail);
      setModalVisible(true);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocorreu um erro inesperado, por favor tente mais tarde',
      })
      console.log(response);
    }
      

  };

  return (
    <>
    {trailsList.length > 0 ?
      <ul className="trails__list" data-testid="trails-list">
        <Slider {...settings}>
          {trailsList.map(trail => {
            return (
              <li className="trails__item" key={trail.id}>
                <figure className="trails__item--image">
                  <img src={trail.image} alt="trail background"/>
                </figure>
                <article>
                  <h2 className="trails__item--title">
                    {trail.name}
                  </h2>
                  <p className="trails__item--description">
                    {trail.description}
                  </p>
                  <div className='trails__item--button'>
                    <button
                      onClick={() => handleOpenModal(trail)}
                    >detalhes</button>
                  </div>
                </article>
              </li>
            );
          })
          }
        </Slider>
      </ul> : <h1>Carregando trilhas....</h1>
    }
    </>
  );
}