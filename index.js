const Notification = (props) => {
  //  Write your code here.
  const { classContainer, classImage, classPara, image, divText } = props;
  return (
    <div className={`${classContainer}`}>
      <img className={`${classImage}`} src={image} />
      <p className={`${classPara}`}> {divText} </p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="notifications-container">
    <h1 className="heading">Notifications</h1>
    <div className="div-container">
      <Notification
        classContainer="info"
        classImage="image"
        classPara="text"
        image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        divText="Information Message"
      />
      <Notification
        classContainer="success"
        classImage="image"
        classPara="text"
        image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        divText="Success Message"
      />
      <Notification
        classContainer="warning"
        classImage="image"
        classPara="text"
        image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        divText="Warning Message"
      />
      <Notification
        classContainer="error"
        classImage="image"
        classPara="text"
        image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        divText="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
