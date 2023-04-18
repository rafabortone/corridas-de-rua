import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function Trails() {
  const navigate = useNavigate();

  const {
    corridaList,
    setCorridaList,
    setCorrida,
  } = useContext(AppContext);


  const corridas = [
    {
      id: 1,
      nome: 'Corrida rua XV',
      data: '25/04/2023',
      distancia: '5km',
      rua: 'Rua xv de novembro 62',
      bairro: 'Centro',
      cidade: 'Curitiba',
      estado: 'PR',
      referencia: 'Boca maldita',
      imagem: 'https://live.staticflickr.com/8660/16704676381_644f5e0b39_b.jpg',
      horario: '14:00hrs',
      categoria: 'infantil',
      modalidade: 'Individual'
    },
    {
      id: 2,
      nome: 'Maratona 20km',
      data: '02/05/2023',
      distancia: '20km',
      rua: 'Rua brigadeiro franco 559',
      bairro: 'Centro',
      cidade: 'Curitiba',
      estado: 'PR',
      referencia: 'Em frente ao Atacadao',
      imagem: 'https://sportlife.com.br/wp-content/uploads/2014/07/calendario-corridas-agosto-Shutterstock_Images.jpg',
      horario: '15:00hrs',
      categoria: 'Adulto',
      modalidade: 'Individual'
    },
    {
      id: 3,
      nome: 'Maratona Jardim Botanico',
      data: '02/05/2023',
      distancia: '7km',
      rua: 'Rua jose ficticio 6557',
      bairro: 'Jardim Botanico',
      cidade: 'Curitiba',
      estado: 'PR',
      referencia: 'Jardim Botanico',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Jardim_Bot%C3%A2nico_Centro_Curitiba.jpg/1200px-Jardim_Bot%C3%A2nico_Centro_Curitiba.jpg',
      horario: '11:00hrs',
      categoria: 'Adulto',
      modalidade: 'Revezamento'
    }
  ]

  var settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 916,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  };

  useEffect(() => {

    async function getTrails() {
      setCorridaList(corridas);
    }

    getTrails();

  }, [setCorridaList]);

  async function handleOpenDetails(corrida) {

    setCorrida(corrida);

    navigate('/corrida-details', { replace: true });

  };

  return (
    <>
      {corridaList.length > 0 ?
        <ul className="trails__list" data-testid="trails-list">
          <Slider {...settings}>
            {corridaList.map(corrida => {
              return (
                <li className="trails__item" key={corrida.id}>
                  <figure className="trails__item--image">
                    <img src={corrida.imagem} alt="trail background" />
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