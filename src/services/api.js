const apiMLB = 'https://api.mercadolibre.com/sites/MLB/';

export async function getCategories() {
  try {
    const requestCategories = await (await fetch(`${apiMLB}categories`)).json();
    return requestCategories;
  } catch (error) {
    return error;
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endPoint = `${apiMLB}search?category=${categoryId}&q=${query}`;
  try {
    const requestCategoryAndQuery = await (await fetch(endPoint)).json();
    return requestCategoryAndQuery;
  } catch (error) {
    return error;
  }
}
