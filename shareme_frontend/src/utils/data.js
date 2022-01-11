export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
}

// says: try to ge me a document of 'type' = to 'user', and '_id' = to 'userId'