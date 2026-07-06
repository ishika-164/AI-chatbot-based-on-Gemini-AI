import API from "../api/api";

export const sendMessageToGemini = async (message) => {
  try {
    const response = await API.post("/api/chat", {
      message,
    });

    return response.data.reply;
  } catch (error) {
    console.error(error);
    return "Sorry, something went wrong.";
  }
};
