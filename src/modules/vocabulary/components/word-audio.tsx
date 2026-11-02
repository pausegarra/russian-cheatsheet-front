import { useEffect, useRef, useState } from "react";
import { PauseIcon, SpeakerHighIcon } from "@phosphor-icons/react";

interface WordAudioProps {
  russianAccented?: string | null;
  audioUrl?: string | null;
}

type AudioStatus = "idle" | "loading" | "playing" | "error";

export function WordAudio({ russianAccented, audioUrl }: WordAudioProps) {
  const storedUrl = audioUrl?.trim() ? audioUrl : null;
  const primaryUrl = russianAccented && !/^\p{White_Space}*$/u.test(russianAccented)
    ? `https://api.openrussian.org/read/ru/${encodeURIComponent(russianAccented)}`
    : storedUrl;
  const fallbackUrl = storedUrl !== primaryUrl ? storedUrl : null;

  if (!primaryUrl) return <UnavailableAudio />;

  return (
    <AudioPlayer
      key={JSON.stringify([primaryUrl, fallbackUrl])}
      primaryUrl={primaryUrl}
      fallbackUrl={fallbackUrl}
    />
  );
}

function AudioPlayer({
  primaryUrl,
  fallbackUrl,
}: {
  primaryUrl: string;
  fallbackUrl: string | null;
}) {
  const [status, setStatus] = useState<AudioStatus>("idle");
  const togglePlayback = useRef<(() => void) | null>(null);

  useEffect(() => {
    const audio = new Audio(primaryUrl);
    audio.preload = "none";
    let disposed = false;
    let failed = false;
    let wantsPlayback = false;
    let usingFallback = false;
    let request = 0;

    const play = () => {
      const currentRequest = ++request;
      wantsPlayback = true;
      setStatus("loading");
      audio.play().catch((error: unknown) => {
        if (disposed || currentRequest !== request) return;
        if (error instanceof DOMException && error.name === "AbortError") {
          wantsPlayback = false;
          setStatus("idle");
          return;
        }
        fail();
      });
    };

    const fail = () => {
      if (disposed || failed) return;
      ++request;
      audio.pause();
      if (!usingFallback && fallbackUrl) {
        usingFallback = true;
        audio.src = fallbackUrl;
        audio.load();
        if (wantsPlayback) play();
      } else {
        failed = true;
        wantsPlayback = false;
        setStatus("error");
      }
    };

    const onPlaying = () => {
      if (!disposed && !failed && wantsPlayback && !audio.paused) setStatus("playing");
    };
    const onWaiting = () => {
      if (!disposed && !failed && wantsPlayback) setStatus("loading");
    };
    const onPause = () => {
      if (!disposed && !failed && !wantsPlayback) setStatus("idle");
    };
    const onEnded = () => {
      if (disposed || failed) return;
      ++request;
      wantsPlayback = false;
      setStatus("idle");
    };
    const onError = () => {
      if (audio.error) fail();
    };

    audio.addEventListener("playing", onPlaying);
    audio.addEventListener("waiting", onWaiting);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);
    togglePlayback.current = () => {
      if (wantsPlayback) {
        ++request;
        wantsPlayback = false;
        audio.pause();
        setStatus("idle");
      } else {
        play();
      }
    };

    return () => {
      disposed = true;
      ++request;
      togglePlayback.current = null;
      audio.removeEventListener("playing", onPlaying);
      audio.removeEventListener("waiting", onWaiting);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
    };
  }, [primaryUrl, fallbackUrl]);

  if (status === "error") return <UnavailableAudio />;

  const playing = status === "playing";
  const loading = status === "loading";
  return (
    <button
      type="button"
      className="button shrink-0 active:scale-[0.98]"
      aria-label={
        loading ? "Loading audio" : playing ? "Pause pronunciation" : "Play pronunciation"
      }
      aria-busy={loading}
      disabled={loading}
      onClick={() => togglePlayback.current?.()}
    >
      {loading ? (
        <span aria-hidden="true" className="size-5 animate-pulse rounded-sm bg-sage/50" />
      ) : playing ? (
        <PauseIcon size={20} aria-hidden="true" />
      ) : (
        <SpeakerHighIcon size={20} aria-hidden="true" />
      )}
      {loading ? "Loading…" : playing ? "Pause" : "Listen"}
    </button>
  );
}

function UnavailableAudio() {
  return (
    <span role="status" className="text-sm text-faint">
      Audio unavailable
    </span>
  );
}
