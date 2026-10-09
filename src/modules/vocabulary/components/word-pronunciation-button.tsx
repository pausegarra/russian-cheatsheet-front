import { useEffect, useRef, useState } from "react";
import classes from "./vocabulary.module.css";

type SpeechStatus = "ready" | "speaking" | "paused" | "unavailable";

type Props = {
  russian: string;
};

export function WordPronunciationButton({ russian }: Props) {
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [status, setStatus] = useState<SpeechStatus>("ready");

  useEffect(() => {
    return () => {
      const utterance = utteranceRef.current;
      if (!utterance || typeof window.speechSynthesis === "undefined") return;

      utteranceRef.current = null;
      window.speechSynthesis.cancel();
    };
  }, []);

  const toggleSpeech = () => {
    if (
      typeof window.speechSynthesis === "undefined" ||
      typeof SpeechSynthesisUtterance === "undefined"
    ) {
      setStatus("unavailable");
      return;
    }

    const synthesis = window.speechSynthesis;
    if (status === "speaking") {
      synthesis.pause();
      return;
    }
    if (status === "paused") {
      synthesis.resume();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(russian);
    utterance.lang = "ru-RU";
    utterance.onstart = () => {
      if (utteranceRef.current === utterance) setStatus("speaking");
    };
    utterance.onpause = () => {
      if (utteranceRef.current === utterance) setStatus("paused");
    };
    utterance.onresume = () => {
      if (utteranceRef.current === utterance) setStatus("speaking");
    };
    utterance.onend = () => {
      if (utteranceRef.current !== utterance) return;
      utteranceRef.current = null;
      setStatus("ready");
    };
    utterance.onerror = (event) => {
      if (utteranceRef.current !== utterance) return;
      utteranceRef.current = null;
      setStatus(event.error === "canceled" || event.error === "interrupted" ? "ready" : "unavailable");
    };

    utteranceRef.current = utterance;
    synthesis.cancel();
    synthesis.resume();
    setStatus("speaking");
    synthesis.speak(utterance);
  };

  const isSpeaking = status === "speaking";
  const isPaused = status === "paused";

  return (
    <>
      <button
        type="button"
        className={classes.audioPlayerButton}
        aria-label={isSpeaking ? "Pause Russian pronunciation" : isPaused ? "Resume Russian pronunciation" : "Play Russian pronunciation"}
        onClick={toggleSpeech}
      >
        {isSpeaking ? "Ⅱ Pause" : isPaused ? "▶ Resume" : "▶ Play"}
      </button>
      {status === "unavailable" && (
        <span className={classes.audioPlayerStatus} role="status">
          Russian speech is unavailable in this browser.
        </span>
      )}
    </>
  );
}
