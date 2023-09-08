import "./TwoColumnLayout.css";

const TwoColumnLayout = () => {
  return (
    <div className="wrapper">
      <div className="two-column-layout">
        <div className="left-column">{"Learnig CSS"}</div>
        <div className="right-column">{"Learning React"}</div>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
