export default function HeaderButton({ children, onClick }) {
  return (
    <p className="header-button" onClick={onClick}>
      {children}
    </p>
  );
}
