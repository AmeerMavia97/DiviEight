export default function CompleteProfileCard() {
  const progress = 64;
  const size = 64;
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="rounded-xl bg-brandGreen px-4 py-4.5 text-white shadow-md">
      <div className="flex items-center gap-4">
        {/* Progress Circle */}
        <div className="relative h-20 w-20">
          <svg
            viewBox={`0 0 ${size} ${size}`}
            className="h-full w-full -rotate-90"
          >
            {/* Background */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="rgba(255,255,255,0.3)"
              strokeWidth={strokeWidth}
              fill="none"
            />
            {/* Progress */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="white"
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
            />
          </svg>

          {/* Percentage */}
          <span className="absolute inset-0 flex items-center justify-center text-sm font-para font-semibold">
            {progress}%
          </span>
        </div>

        {/* Text */}
        <div>
          <h3 className="text-lg font-semibold font-head">Complete profile</h3>
          <p className="text-xs font-para">
            Complete your profile to unlock all features
          </p>
        </div>
      </div>

      <button className="mt-4 w-full rounded-md bg-brandLight py-2.5 text-sm font-semibold text-brandDark font-para">
        Verify identity
      </button>
    </div>
  );
}
