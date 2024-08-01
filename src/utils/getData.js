export const getData = async (category) => {
  const res = await fetch("/cryptoData.json");
  const data = await res.json();
  const filterData = data.find((item) => item.category === category);
  return filterData;
};
export function formatDate() {
  const now = new Date();

  // Get hours and minutes
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Format minutes to always have two digits
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  // Create the formatted date string
  const formattedDate = `Today at ${hours}:${formattedMinutes} ${ampm}`;

  return formattedDate;
}
