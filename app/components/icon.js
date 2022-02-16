export default function Icon({ props }) {
  return (
    <i style={props.style} className={`${props.icon} ${props.className}`} />
  );
}
