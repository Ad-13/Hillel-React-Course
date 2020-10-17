import React from 'react';
import { useParams } from 'react-router-dom';
import { useAlbumsPhotos } from '../../shared/hooks/useAlbumsPhotos';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AlbumPhotos.css';
import Spinner from '../common/Spinner/Spinner';

export default function AlbumPhotos() {
  const { albumId } = useParams();
  const [albumsPhotos, isFetching] = useAlbumsPhotos(albumId);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="animated-wrapper">
      <div className="title">Album Photos</div>
      <Spinner isActive={isFetching} />
      <Slider className="slider" {...settings}>
        {albumsPhotos.map(x => <img className="img" src={x.url} key={x.id} alt=""/>)}
      </Slider>
    </div>
  )
}
