const URL_API_FACTS = "https://catfact.ninja/fact";
const URL_API_IMAGES = "https://cataas.com/cat/says/";

const api = {
  getFacts: async () => {
    const response = await fetch(URL_API_FACTS, {
      method: "GET",
    });
    const res = await response.json();
    // console.log(res);
    return res;
  },
  getImage: async (word: string) => {
    const response = await fetch(URL_API_IMAGES + word, {
      method: "GET",
    });
    const res = await response;

    return res;
  },
};
export default api;
