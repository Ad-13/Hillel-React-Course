import React, { useParams } from 'react';
import { useAlbumsPhotos } from '../../shared/hooks/useAlbumsPhotos';
import CircularProgress from '@material-ui/core/CircularProgress';
import './AlbumPhotos.css';

export default function AlbumPhotos() {
  const { albumId } = useParams();
  const [albumsPhotos, isFetching] = useAlbumsPhotos(albumId);

  if (isFetching) {
    return (
      <div className="spinner-wrapper">
        <CircularProgress className="spinner" />
      </div>
    );
  }

  return (
    <>
      <div className="title">Album Photos</div>
    </>
  )
}
