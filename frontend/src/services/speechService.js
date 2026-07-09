import axios from "axios";

const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export async function speechToText(audioBlob) {
  const formData = new FormData();

  formData.append("file", audioBlob, "audio.webm");
  formData.append("model", "whisper-large-v3-turbo");
  formData.append("language", "en");
  formData.append("response_format", "json");

  const response = await axios.post(
    "https://api.groq.com/openai/v1/audio/transcriptions",
    formData,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return response.data.text;
}
