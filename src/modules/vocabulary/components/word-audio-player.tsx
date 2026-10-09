import { useEffect, useRef, useState } from "react";
import classes from "./vocabulary.module.css";

type AudioStatus = "checking" | "ready" | "playing" | "unavailable";

type Props = {
  audioUrl: string;
};

export function WordAudioPlayer({ audioUrl }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [status, setStatus] = useState<AudioStatus>("checking");

  useEffect(() => {
    const audio = new Audio(audioUrl);
    audio.preload = "auto";
    audioRef.current = audio;

    const handleCanPlay = () => setStatus(audio.paused ? "ready" : "playing");
    const handlePlay = () => setStatus("playing");
    const handlePause = () => {
      if (!audio.ended) setStatus("ready");
    };
    const handleEnded = () => setStatus("ready");
    const handleError = () => setStatus("unavailable");

    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);
    audio.load();

    return () => {
      audio.pause();
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
      audio.removeAttribute("src");
      audio.load();
      if (audioRef.current === audio) audioRef.current = null;
    };
  }, [audioUrl]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio || status === "checking" || status === "unavailable") return;

    if (!audio.paused) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
    } catch {
      setStatus("unavailable");
    }
  };

  if (status === "checking") {
    return <span className={classes.audioPlayerStatus} role="status">Checking audio...</span>;
  }

  if (status === "unavailable") {
    return <span className={classes.audioPlayerStatus} role="status">Audio no disponible</span>;
  }

  const isPlaying = status === "playing";

  return (
    <button
      type="button"
      className={classes.audioPlayerButton}
      aria-label={isPlaying ? "Pause pronunciation" : "Play pronunciation"}
      onClick={() => void togglePlayback()}
    >
      {isPlaying ? "Ⅱ Pause" : "▶ Play"}
    </button>
  );
}
