import { Focus, HeartPlus, Paintbrush } from "lucide-react";
import { NavLink } from "react-router";

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/" end>
        <Focus />
        <span>Spotlight</span>
      </NavLink>
      <NavLink to="/art-pieces">
        <Paintbrush /> <span>Art Pieces</span>
      </NavLink>
      <NavLink to="/favorites">
        <HeartPlus /> <span>Favorites</span>
      </NavLink>
    </nav>
  );
}
