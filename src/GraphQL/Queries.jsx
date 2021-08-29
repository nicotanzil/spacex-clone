import { gql } from "@apollo/client";

export const LOAD_ARTIST = gql`
  query getAllSongs($name: String!) {
    artist(name: $name) {
      id
      name
      image
    }
  }
`;

export const LOAD_LAUNCHES = gql`
  query getAllLaunches {
    launches {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
    }
  }
`;
