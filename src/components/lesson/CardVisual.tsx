/** The small card picture shown in the lesson hero. Colours come from the curriculum data. */
export default function CardVisual({
  topLabel,
  symbol,
  bottomLabel,
  color,
}: {
  topLabel: string;
  symbol: string;
  bottomLabel: string;
  color: string;
}) {
  return (
    <div className="lesson-card-visual" style={{ background: color }} aria-hidden="true">
      <span className="top">{topLabel}</span>
      <b>{symbol}</b>
      <span className="bottom">{bottomLabel}</span>
    </div>
  );
}