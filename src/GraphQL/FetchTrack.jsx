const FetchTrack = () => {
  "use strict";
  const spotify_graphql = require("spotify-graphql");
  const config = require("./config.json");
  spotify_graphql
    .SpotifyGraphQLClient(config)
    .query(
      `
  {
    track(id: "3W2ZcrRsInZbjWylOi6KhZ") {
      name
      artists {
        name
      }
      album {
        name
      }
    }
  }
`
    )
    .then((executionResult) => {
      if (executionResult.errors) {
        console.log("error");
        console.error(JSON.stringify(executionResult.errors));
      } else {
        console.log("success");
        console.log(JSON.stringify(executionResult.data));
      }
    });
  return <div>FetchTrack</div>;
};

export default FetchTrack;
