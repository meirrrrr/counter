import { useState } from "react";
import HeaderButton from "../button/HeaderButtons";

export default function NavBar({ handleClick }) {
  return (
    <nav>
      <ul>
        <li>
          <HeaderButton onClick={() => handleClick("about")}>
            About
          </HeaderButton>
        </li>
        <li>
          <HeaderButton onClick={() => handleClick("counter")}>
            Counter
          </HeaderButton>
        </li>
        <li>
          <HeaderButton onClick={() => handleClick("cafes")}>
            Cafes
          </HeaderButton>
        </li>
        <li>
          <HeaderButton onClick={() => handleClick("masjids")}>
            Masjids
          </HeaderButton>
        </li>
      </ul>
    </nav>
  );
}
