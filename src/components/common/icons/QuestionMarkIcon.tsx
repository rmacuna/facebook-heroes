import { memo } from "react";

const BaseIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};
const MemoizedIcon = memo(BaseIcon);

export default function QuestionMarkIcon({ className }) {
  return <MemoizedIcon className={className} />;
}

QuestionMarkIcon.defaultProps = {
  className: "h-6 w-6",
};
