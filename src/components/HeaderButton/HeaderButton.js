import "./HeaderButton.scss";

const HeaderButton = ({ icon, caption, rounded, ...rest }) => {
  return (
    <div className={rounded ? "header-button rounded" : "header-button"}>
      <img {...rest} src={icon} alt={caption} title={caption} />
    </div>
  );
};

export default HeaderButton;
