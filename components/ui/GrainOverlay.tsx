export default function GrainOverlay({ opacity = 1 }: { opacity?: number }) {
  return (
    <div
      aria-hidden="true"
      className="grain"
      style={{ opacity: 0.035 * opacity }}
    />
  );
}
