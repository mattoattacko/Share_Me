// User Query //
export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
}

// reads: try to ge me a document of 'type' = to 'user', and '_id' = to 'userId'.
// The first * of the query represents every doc in the dataset.
// The second * allows it to start matching terms as soon as the user starts typing.
// "save[]" is an array of people that saved that specific pin.
export const searchQuery = (searchTerm) => {
  const query = `*[_type == "idea" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*' ]{
    image {
      asset -> {
        url
      }
    },
    _id,
    destination,
    postedBy -> {
      _id,
      userName, 
      image 
    },
    save[] {
      _key, 
      postedBy -> {
        _id,
        userName,
        image
      },
    },
  }`
  return query;
}

// Feed Query //
export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
  image {
    asset -> {
      url
    }
  },
  _id,
  destination,
  postedBy -> {
    _id,
    userName, 
    image 
  },
  save[] {
    _key, 
    postedBy -> {
      _id,
      userName,
      image
    },
  },
}`
