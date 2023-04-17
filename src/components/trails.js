import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2'

export default function Trails() {
  const navigate = useNavigate();
  const {
    trailsList,
    setTrailsList,
    setTrail,
  } = useContext(AppContext);


  const corridas = [
    {
      nome: 'Corrida rua XV',
      data: '25/04',
      distancia: '5km',
      rua: 'Rua xv de novembro 62',
      bairro: 'Centro',
      cidade: 'Curitiba',
      estado: 'PR',
      referencia: 'Boca maldita',
      imagem: 'https://live.staticflickr.com/8660/16704676381_644f5e0b39_b.jpg',
      horario:'14:00hrs'
    },
    {
      nome: 'Maratona 20km',
      data: '02/05',
      distancia: '20km',
      rua: 'Rua brigadeiro franco 559',
      bairro: 'Centro',
      cidade: 'Curitiba',
      estado: 'PR',
      referencia: 'Em frente ao Atacadao',
      imagem: 'https://sportlife.com.br/wp-content/uploads/2014/07/calendario-corridas-agosto-Shutterstock_Images.jpg',
      horario:'15:00hrs'
    },
    {
      nome: 'Maratona Jardim Botanico',
      data: '02/05',
      distancia: '7km',
      rua: 'Rua jose ficticio 6557',
      bairro: 'Jardim Botanico',
      cidade: 'Curitiba',
      estado: 'PR',
      referencia: 'Jardim Botanico',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Jardim_Bot%C3%A2nico_Centro_Curitiba.jpg/1200px-Jardim_Bot%C3%A2nico_Centro_Curitiba.jpg',
      horario:'11:00hrs'
    }
  ]

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
      setTrailsList(corridas);
    }

    getTrails();

  }, [setTrailsList]);

  async function handleOpenDetails(trail) {

    setTrail(trail);

    navigate('/corrida-details', {replace: true});
  
  };

  return (
    <>
    {trailsList.length > 0 ?
      <ul className="trails__list" data-testid="trails-list">
        <Slider {...settings}>
          {trailsList.map(corrida => {
            return (
              <li className="trails__item" key={corrida.id}>
                <figure className="trails__item--image">
                  <img src={corrida.imagem} alt="trail background"/>
                </figure>
                <article>
                  <h2 className="trails__item--title">
                    {corrida.data}
                  </h2>
                  <p className="trails__item--description">
                    {corrida.nome}
                  </p>
                  <div className='trails__item--button'>
                    <button
                      onClick={() => handleOpenDetails(corrida)}
                    >detalhes</button>
                  </div>
                </article>
              </li>
            );
          })
          }
        </Slider>
      </ul> : <h1>Carregando corridas....</h1>
    }
    </>
  );
}