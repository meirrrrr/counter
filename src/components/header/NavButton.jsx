export default function NavButton({ children, onClick, isActive }) {
  return (
    <button className={isActive ? "button active" : "button"} onClick={onClick}>
      {children}
    </button>
  );
}
