import "./style.css";

const ThirdComponent = () => {
  return <div>Third components</div>;
};

const SecondComponent = () => {
  return (
    <>
      <div>Second components</div>
      <div>Pham Tấn Hào</div>
      <div className="child">Địa chỉ: Khánh Hòa</div>
    </>
  );
};
export { SecondComponent, ThirdComponent };
