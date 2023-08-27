
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Mock data for entity 
const mockSecretMessage = {
    locations: [
        {
          id: 1,
          name: "Austrailia", 
          lat: -23.344672, 
          long: 131.995434, 
        },
        {
            id: 2,
            name :"Tomsk Oblast, Russia",
          lat: 59.655312,
          long: 83.479808,
        },
        {
            id: 3,
            name :"Sudan",
          lat: 14.532039,
          long: 34.049581,
        },
        {
            id: 4,
            name :"South Dakota, United States",
          lat: 43.270427,
          long: -102.532451,
        },

        {
            id: 5,
            name :"State of Pernambuco, Brazil",
          lat: -7.959656,
          long: -40.305889,
        },
        // ... other location objects
      ],
  };
  
  
  
// Mock data for entity details
const mockEntityDetails = [
{
    id: 1,
    name: "Darth Vader",
    height: 1.03,
    mass: 120,
    gender: "Female",
    homeworld: "tatooine",
    wiki: "http://starwars.wikia.com/wiki/Anakin_Skywalker",
    image: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    born: -41,
    died: 4,
    diedLocation: "death star ii, endor system",
    species: "human",
    hairColor: "blond",
    eyeColor: "blue, yellow (dark side)",
    skinColor: "light, later pale",
    cybernetics: "Cybernetic right arm; later prosthetic arms and legs, and a life-support system",
    affiliations: [
      "501st Legion",
      "Sith",
      "Galactic Empire",
      "Imperial High Command"
    ],
    masters: [
      "Qui-Gon Jinn (informal Jedi Master)",
      "Obi-Wan Kenobi (Jedi Master)",
      "Darth Sidious (Sith Master)",
      "Yoda (Force spirit teacher)"
    ],
    apprentices: [
      "Ahsoka Tano (Padawan)",
      "Inquisitorius"
    ],
    formerAffiliations: [
      "Jedi Order",
      "Jedi High Council",
      "Galactic Republic"
    ]
  },
  {
    id: 2,
    name: "Luke Skywalker",
    height: 2.03,
    mass: 180,
    gender: "male",
    homeworld: "tatooine",
    wiki: "http://starwars.wikia.com/wiki/Anakin_Skywalker",
    image: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    born: -41,
    died: 4,
    diedLocation: "death star ii, endor system",
    species: "human",
    hairColor: "blond",
    eyeColor: "blue, yellow (dark side)",
    skinColor: "light, later pale",
    cybernetics: "Cybernetic right arm; later prosthetic arms and legs, and a life-support system",
    affiliations: [
      "501st Legion",
      "Sith",
      "Galactic Empire",
      "Imperial High Command"
    ],
    masters: [
      "Qui-Gon Jinn (informal Jedi Master)",
      "Obi-Wan Kenobi (Jedi Master)",
      "Darth Sidious (Sith Master)",
      "Yoda (Force spirit teacher)"
    ],
    apprentices: [
      "Ahsoka Tano (Padawan)",
      "Inquisitorius"
    ],
    formerAffiliations: [
      "Jedi Order",
      "Jedi High Council",
      "Galactic Republic"
    ]
  },


  {
    id: 3,
    name: "Jhon Doe",
    height: 49.03,
    mass: 440,
    gender: "male",
    homeworld: "tatooine",
    wiki: "http://starwars.wikia.com/wiki/Anakin_Skywalker",
    image: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    born: -41,
    died: 4,
    diedLocation: "death star ii, endor system",
    species: "human",
    hairColor: "blond",
    eyeColor: "blue, yellow (dark side)",
    skinColor: "light, later pale",
    cybernetics: "Cybernetic right arm; later prosthetic arms and legs, and a life-support system",
    affiliations: [
      "501st Legion",
      "Sith",
      "Galactic Empire",
      "Imperial High Command"
    ],
    masters: [
      "Qui-Gon Jinn (informal Jedi Master)",
      "Obi-Wan Kenobi (Jedi Master)",
      "Darth Sidious (Sith Master)",
      "Yoda (Force spirit teacher)"
    ],
    apprentices: [
      "Ahsoka Tano (Padawan)",
      "Inquisitorius"
    ],
    formerAffiliations: [
      "Jedi Order",
      "Jedi High Council",
      "Galactic Republic"
    ]
  },


  {
    id: 4,
    name: "Alex shaun",
    height: 90.03,
    mass: 3000,
    gender: "Female",
    homeworld: "tatooine",
    wiki: "http://starwars.wikia.com/wiki/Anakin_Skywalker",
    image: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    born: -41,
    died: 4,
    diedLocation: "death star ii, endor system",
    species: "human",
    hairColor: "blond",
    eyeColor: "blue, yellow (dark side)",
    skinColor: "light, later pale",
    cybernetics: "Cybernetic right arm; later prosthetic arms and legs, and a life-support system",
    affiliations: [
      "501st Legion",
      "Sith",
      "Galactic Empire",
      "Imperial High Command"
    ],
    masters: [
      "Qui-Gon Jinn (informal Jedi Master)",
      "Obi-Wan Kenobi (Jedi Master)",
      "Darth Sidious (Sith Master)",
      "Yoda (Force spirit teacher)"
    ],
    apprentices: [
      "Ahsoka Tano (Padawan)",
      "Inquisitorius"
    ],
    formerAffiliations: [
      "Jedi Order",
      "Jedi High Council",
      "Galactic Republic"
    ]
  },


  {
    id: 5,
    name: "Gate Hokens",
    height: 62.03,
    mass: 9800,
    gender: "male",
    homeworld: "tatooine",
    wiki: "http://starwars.wikia.com/wiki/Anakin_Skywalker",
    image: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    born: -41,
    died: 4,
    diedLocation: "death star ii, endor system",
    species: "human",
    hairColor: "blond",
    eyeColor: "blue, yellow (dark side)",
    skinColor: "light, later pale",
    cybernetics: "Cybernetic right arm; later prosthetic arms and legs, and a life-support system",
    affiliations: [
      "501st Legion",
      "Sith",
      "Galactic Empire",
      "Imperial High Command"
    ],
    masters: [
      "Qui-Gon Jinn (informal Jedi Master)",
      "Obi-Wan Kenobi (Jedi Master)",
      "Darth Sidious (Sith Master)",
      "Yoda (Force spirit teacher)"
    ],
    apprentices: [
      "Ahsoka Tano (Padawan)",
      "Inquisitorius"
    ],
    formerAffiliations: [
      "Jedi Order",
      "Jedi High Council",
      "Galactic Republic"
    ]
  },
];

  app.use(cors());

app.get('/api/secret', (req, res) => {
  res.json(mockSecretMessage);
});

app.get('/api/entities/:id', (req, res) => {
  const entityId = parseInt(req.params.id); 
  const entity = mockEntityDetails.find((item) => item.id === entityId);

  if (entity) {
    res.json(entity);
  } else {
    res.status(404).json({ error: 'Entity not found' });
  }
});


  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
