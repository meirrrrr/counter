import headerLogo from "..//img/header-logo.svg";

export default function HeaderLogo() {
  return (
    <div className="header-title">
      <img src={headerLogo} alt="logo" width="50px" />
      <h1>title</h1>
    </div>
  );
}
