import { useEffect, useRef, useState } from "react";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

export default function useSpeechRecognition(onResult) {
  const [isListening, setIsListening] = useState(false);

  const recognitionRef = useRef(null);

  useEffect(() => {
    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      console.log("🎤 Listening started");
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      console.log("Result Event:", event);

      const transcript = event.results[0][0].transcript;

      console.log("Transcript:", transcript);

      onResult(transcript);
    };

    recognition.onerror = (event) => {
      console.log("Speech Error:", event.error);
    };

    recognition.onend = () => {
      console.log("🎤 Listening stopped");
      setIsListening(false);
    };

    recognitionRef.current = recognition;
  }, [onResult]);

  const toggleListening = () => {
    console.log("Toggle Clicked");

    console.log(recognitionRef.current);

    if (!recognitionRef.current) {
      console.log("Recognition is NULL");

      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
  };
  return {
    isListening,
    supported: true,
    toggleListening,
  };
}
