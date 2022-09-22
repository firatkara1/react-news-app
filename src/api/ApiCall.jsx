import axios from "axios";

const getNewsData = async (cat) => {
  const API_KEY = "1dbad7fsdbd87e4c52900767808711c006";
  try {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlsdsdsdsdines?country=tr&category=${cat}&apiKey=${API_KEY}`
    );
    return data;
  } catch (error) {
    alert("Lutfen Sayfayi yenileyin");
  }
};

export default getNewsData;
