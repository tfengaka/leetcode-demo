import { cn } from '@/lib/utils';

function SwirlingSpinner({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <>
      <style>
        {`@keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        
          @keyframes spin2 {
            0% {
              stroke-dasharray: 1, 800;
              stroke-dashoffset: 0;
            }
            50% {
              stroke-dasharray: 400, 400;
              stroke-dashoffset: -200px;
            }
            100% {
              stroke-dasharray: 800, 1;
              stroke-dashoffset: -800px;
            }
          }
        
          .spin2 {
            transform-origin: center;
            animation: spin2 1.5s ease-in-out infinite,
              spin 2s linear infinite;
            animation-direction: alternate;
          }`}
      </style>
      <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" className={cn('h-14 w-14', className)} {...props}>
        <circle
          className="spin2 stroke-primary"
          cx="400"
          cy="400"
          fill="none"
          r="200"
          strokeWidth="50"
          strokeDasharray="700 1400"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
}

export default SwirlingSpinner;
