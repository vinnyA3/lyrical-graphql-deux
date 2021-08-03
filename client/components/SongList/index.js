import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const QUERY = gql`
  query getSongs {
    songs {
      title
    }
  }
`;

const SongList = () => {
  const { loading, error, data } = useQuery(QUERY);

  if (error) return <p>Error!</p>;

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>SongList</h2>
      {data.songs.map(({ title }) => (
        <div>
          <h4>{title}</h4>
        </div>
      ))}
    </div>
  );
};

export default SongList;
