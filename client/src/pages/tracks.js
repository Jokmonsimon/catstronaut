import React from 'react';
import QueryResult from '../components/query-result';
import { Layout } from '../components';
import { useQuery, gql } from '@apollo/client';
import TrackCard from '../containers/track-card';

// TRACKS query to retrieve all tracks
const TRACKS = gql`
  query GetTracksData {
    tracksForHome {
      id
      author {
        id
        name
        photo
      }
      title
      thumbnail
      length
      modulesCount
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
