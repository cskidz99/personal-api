module.exports = user;

var user = {
  name: "Cameron",
  location: "Provo",
  occupations: ["Burgeoning developer"],
  hobbies: [
    {
      name: "rock climbing",
      type: "outdoor"
    },
    {
      name: "running",
      type: "outdoor"
    },
    {
      name: "armchair philosophy",
      type: "intellectual"
    }
  ],
  family: [
    {
      name: null,
      relation: null,
      gender: null
    },
    {
      name: null,
      relation: null,
      gender: null
    },{
      name: null,
      relation: null,
      gender: null
    }
  ],
  restaurants: [
    {
      name: "Tucanos",
      type: "Brazilian bbq",
      rating: 8
    },
    {
      name: null,
      type: null,
      rating: null
    },
    {
      name: null,
      type: null,
      rating: null
    }
  ]
}
