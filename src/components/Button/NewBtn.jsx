import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";

export default function NewBtn() {
  const location = useLocation();

  const iconName =
    location.pathname === "/"
      ? "material-symbols:add"
      : "material-symbols:arrow-back";

  return (
    <Link to={location.pathname === "/" ? "/notes/new" : "/"}>
      <div className="btn btn-outline btn-lg border-neutral btn-circle text-2xl">
        <Icon icon={iconName} />
      </div>
    </Link>
  );
}
