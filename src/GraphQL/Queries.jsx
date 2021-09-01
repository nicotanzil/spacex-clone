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

export const FIND_LAUNCHES_BY_MISSION = gql`
  query findLaunchesByMission($mission_name: String!) {
    launches(find: { mission_name: $mission_name }, limit: 5) {
      id
      mission_name
      details
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

export const FETCH_DASHBOARD_DATA = gql`
  query FetchDashboardData {
    rockets {
      id
      name
      country
      description
      first_flight
      diameter {
        meters
      }
      height {
        meters
      }
      mass {
        kg
      }
      type
      stages
      success_rate_pct
      active
      boosters
      company
      cost_per_launch
    }
    ships {
      id
    }
    launches {
      id
    }
  }
`;

export const GET_ROCKET = gql`
  query GetRocket($id: ID!) {
    rocket(id: $id) {
      active
      boosters
      company
      cost_per_launch
      country
      description
      diameter {
        meters
      }
      first_flight
      height {
        meters
      }
      id
      mass {
        kg
      }
      name
      stages
      success_rate_pct
      type
      wikipedia
    }
  }
`;
