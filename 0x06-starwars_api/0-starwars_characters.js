const fetch = require('node-fetch'); // Node.js environment

function getCharacters(movieId) {
  const baseUrl = 'https://swapi.dev/api/';
  const filmEndpoint = `films/${movieId}/`;

  return fetch(baseUrl + filmEndpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to retrieve film data');
      }
      return response.json();
    })
    .then((filmData) => {
      return filmData.characters;
    });
}

function printCharacters(movieId) {
  getCharacters(movieId)
    .then((charactersUrls) => {
      const characterPromises = charactersUrls.map((characterUrl) =>
        fetch(characterUrl).then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to retrieve character data for ${characterUrl}`);
          }
          return response.json();
        })
      );

      Promise.all(characterPromises)
        .then((characters) => {
          console.log(`Characters in Star Wars Episode ${movieId}:`);
          characters.forEach((character) => {
            console.log(character.name);
          });
        })
        .catch((error) => {
          console.error(error.message);
        });
    })
    .catch((error) => {
      console.error(error.message);
    });
}

const movieId = process.argv[2];

if (!movieId) {
  console.error('Usage: node star_wars_characters.js <Movie ID>');
  process.exit(1);
}

printCharacters(movieId);

