import { useState } from "react";
import HeaderLogo from "./HeaderLogo";
import NavButton from "./NavButton";

export default function Header({ active, onChange }) {
  return (
    <header>
      <HeaderLogo />
      <nav>
        <ul>
          <li>
            <NavButton
              isActive={active === "about"}
              onClick={() => onChange("about")}
            >
              About
            </NavButton>
          </li>
          <li>
            <NavButton
              isActive={active === "counter"}
              onClick={() => onChange("counter")}
            >
              Counter
            </NavButton>
          </li>
          <li>
            <NavButton
              isActive={active === "cafes"}
              onClick={() => onChange("cafes")}
            >
              Cafes
            </NavButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}
