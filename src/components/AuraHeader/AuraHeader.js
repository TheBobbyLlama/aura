import { TextField } from "@mui/material"; // TODO - Replace with custom component later!

import headerLogo from "../../assets/images/svg/aura-logo-header-icon.svg";

function AuraHeader({ children, onSearch }) {
  return (
    <header className="aura-header">
      <img className="aura-header__logo" src={headerLogo} alt="Aura" />
      {onSearch && (
        <TextField
          className="aura-header__search"
          variant="filled"
          placeholder="Search..."
        />
      )}
      <div className="aura-header__toolbar">{children}</div>
    </header>
  );
}

export default AuraHeader;
