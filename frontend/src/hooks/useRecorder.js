import { useRef, useState } from "react";
import { speechToText } from "../services/speechService";

export default function useRecorder(onText) {
  const [isRecording, setIsRecording] = useState(false);

  const recorderRef = useRef(null);
  const chunksRef = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });

    recorderRef.current = new MediaRecorder(stream);

    chunksRef.current = [];

    recorderRef.current.ondataavailable = (e) => {
      chunksRef.current.push(e.data);
    };

    recorderRef.current.onstop = async () => {
      const blob = new Blob(chunksRef.current, {
        type: "audio/webm",
      });

      try {
        const text = await speechToText(blob);

        onText(text);
      } catch (err) {
        console.error(err);

        alert("Speech Recognition Failed");
      }
    };

    recorderRef.current.start();

    setIsRecording(true);
  };

  const stopRecording = () => {
    recorderRef.current.stop();

    setIsRecording(false);
  };

  return {
    isRecording,
    startRecording,
    stopRecording,
  };
}
