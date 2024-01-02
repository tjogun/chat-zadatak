import "./Message.scss";

function Message({ content, classname }) {
  return (
    <div>
      <span className={classname}>{content}</span>
    </div>
  );
}

export default Message;
