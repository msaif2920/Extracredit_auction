import axios from "axios";

const signin = (email, password) => {
  const body = {
    email: email,
    password: password,
  };

  axios.post("http://localhost:3000/login", body).then((resp) => {
    if (!resp) {
      console.log("ERROR");
    } else {
      window.localStorage.setItem("Bearer", resp.data.data.token);
      return resp.data.data.token;
    }
  });
};

export const signup = (email, password) => {
  const body = {
    email: email,
    password: password,
  };

  axios.post("http://localhost:3000/signup", body).then((resp) => {
    if (!resp) {
      console.log("ERROR");
    } else {
      console.log(resp.data.data.token);
      window.localStorage.setItem("Bearer", resp.data.data.token);
    }
  });
};

export const getListingByCategory = async (categoryID, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const data = await axios.get(
    `http://localhost:3000/categories/${categoryID}`,
    config
  );

  return data;
};

export const getUser = async (userId, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const data = await axios.get(`http://localhost:3000/users/${userId}`, config);

  return data;
};

export const getCategories = async (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const data = await axios.get(`http://localhost:3000/categories`, config);

  return data;
};

export const getLisitingSpeicific = async (id, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const data = await axios.get(`http://localhost:3000/listings/${id}`, config);

  return data;
};

export const postComment = async (id, token, comment) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const body = {
    description: comment,
  };
  const data = await axios.post(
    `http://localhost:3000/listings/${id}/comments`,

    body,
    config
  );

  return data;
};

export const postBid = async (id, token, amount) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const body = {
    amount: parseInt(amount),
  };
  const data = await axios.post(
    `http://localhost:3000/listings/${id}/bids`,

    body,
    config
  );

  return data;
};

export const getCategoryID = async (id, token, amount) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const body = {
    amount: parseInt(amount),
  };
  const data = await axios.post(
    `http://localhost:3000/listings/${id}/bids`,

    body,
    config
  );

  return data;
};

export const createCategories = async (description, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const body = {
    name: description,
  };
  const data = await axios.post(
    `http://localhost:3000/categories`,
    body,
    config
  );
  return data;
};

// export const postListing = async (
//   token,
//   title,
//   price,
//   description,
//   category
// ) => {
//   getCategories(token)
//     .then((resp) => {
//       console.log(resp);
//       return resp.data.data;
//     })
//     .then(async (data) => {
//       let exist = false;
//       let id = "";
//       data.forEach((el) => {
//         if (el.name === category) {
//           exist = true;
//           id = el.id;
//         }
//       });
//       if (exist) {
//         return id;
//       } else {
//         await createCategories(category, token)
//           .then((resp) => {
//             return resp.data.data.id;
//           })
//           .then((data) => {
//             return data;
//           });
//       }
//     })
//     .then(async (categoryID) => {
//       console.log(await categoryID);
//
// };

export const postListing = async (
  token,
  title,
  price,
  description,
  category
) => {
  const fecthCategories = await getCategories(token);
  let exist = false;
  let id = "";
  fecthCategories.data.data.forEach((el) => {
    if (el.name === category) {
      exist = true;
      id = el.id;
    }
  });
  if (!exist) {
    const newCategory = await createCategories(category, token);
    id = newCategory.data.data.id;
  }

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const body = {
    title: title,
    price: parseInt(price),
    description: description,
    categoryId: parseInt(id),
  };
  const data = await axios.post(
    `http://localhost:3000/listings`,

    body,
    config
  );

  return data;
};

export default signin;
