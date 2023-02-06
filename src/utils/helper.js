//function to search a restaurent from list,here we are getting all restaurent names
export function filterData(searchText, restaurents) {
  const filterData = restaurents.filter((restaurent) =>
    restaurent?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}
