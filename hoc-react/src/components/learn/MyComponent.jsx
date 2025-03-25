const MyComponent = () => {
  const name = "Phạm Tấn Hào";
  const array = [1, 2, 3];
  return (
    <>
      <div>{JSON.stringify(array)}</div>
      <div>{name} he he</div>
      <div>Là Một Sinh Viên</div>
      <div>{console.log("Phạm Tấn Hào")}</div>
    </>
  );
};
export default MyComponent;
