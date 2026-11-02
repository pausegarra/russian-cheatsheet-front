import { ArrowLeftIcon } from "@phosphor-icons/react";
import { useLocation, useNavigate } from "react-router-dom";

type Props = { fallbackTo: string };
export function BackButton({ fallbackTo }: Props) {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { fromApp?: boolean } | null;
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 text-sm text-muted hover:text-sage"
      onClick={() => (state?.fromApp ? navigate(-1) : navigate(fallbackTo))}
    >
      <ArrowLeftIcon size={16} />
      Back
    </button>
  );
}
