import { useRef } from 'react';

export default function Console({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  if (ref.current) {
    ref.current.scrollTop = ref.current.scrollHeight;
  }

  return (
    <div
      className={`bg-gray-800 overflow-auto p-4 rounded-md whitespace-pre-wrap ${className}`}
      ref={ref}
    >
      {children}
    </div>
  );
}
