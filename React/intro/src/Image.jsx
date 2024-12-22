const BadStyle = {
  objectFit: "cover",
  height: "400px",
  width: "800px",
};
const Image = () => {
  return (
    <div>
      <img
        src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/tdslyl0pptzs6vst4uq5"
        alt="badminton"
        style={BadStyle}
      />
    </div>
  );
};
export default Image;
