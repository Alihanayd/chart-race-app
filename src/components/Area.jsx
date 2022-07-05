const Area = (props) => {
  return (
    <div className="app-area" style={{ height: props.data.length * 50 }}>
      {props.children}
    </div>
  );
};

export default Area;
