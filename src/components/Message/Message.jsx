import "./Message.scss";

function Message({ content, classname }) {
  return <div className={classname}>{content}</div>;
}

export default Message;
