const URL_API_FACTS = "https://catfact.ninja/fact";
const URL_API_IMAGES = "https://cataas.com/cat/says/";

const api = {
  getFacts: async () => {
    const response = await fetch(URL_API_FACTS, {
      method: "GET",
    });
    const res = await response.json();

    return res;
  },
  getImage: async (word: string) => {
    // return 1;
    console.log(URL_API_IMAGES + word);
    const response = await fetch(URL_API_IMAGES + word, {
      method: "GET",
    });
    const res = await response;
    return res;
  },
};
export default api;
