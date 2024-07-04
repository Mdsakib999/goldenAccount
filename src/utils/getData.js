export const getData = async (category) => {
  const res = await fetch("/cryptoData.json");
  const data = await res.json();
  const filterData = data.find((item) => item.category === category);
  return filterData;
};
