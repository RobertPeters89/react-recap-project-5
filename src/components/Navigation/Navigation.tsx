import { Spotlight, HeartPlus, Paintbrush } from "lucide-react";
import { NavLink } from "react-router";

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/" end>
        Spotlight <Spotlight />
      </NavLink>
      <NavLink to="/art-pieces">
        Art Pieces <Paintbrush />
      </NavLink>
      <NavLink to="/favorites">
        Favorites <HeartPlus />
      </NavLink>
    </nav>
  );
}
