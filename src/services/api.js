const apiMLB = 'https://api.mercadolibre.com/sites/MLB/';

export async function getCategories() {
  // try {
  //   const requestCategories = await (await fetch(`${apiMLB}categories`)).json();
  //   return requestCategories;
  // } catch (error) {
  //   return error;
  // }
  return fetch(`${apiMLB}categories`)
    .then(response => response.json())
    .then(result => result);
}

// export async function getProductsFromQuery(query) {
//   const requestQuery = await fetch(`${apiMLB}search?q=${query}`);
//   const responseQuery = await requestQuery.json();

//   return responseQuery;
// }

// export async function getProductsFromCategory(categoryId) {
//   const requestCategory = await fetch(`${apiMLB}search?category=${categoryId}`);
//   const responseCategory = await requestCategory.json();

//   return responseCategory;
// }

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endPoint = `${apiMLB}search?category=${categoryId}&q=${query}`;
  try {
    const requestCategoryAndQuery = await fetch(endPoint);
    const responseCategoryAndQuery = await requestCategoryAndQuery.json();
    return responseCategoryAndQuery;
  } catch (error) {
    return error;
  }
}
