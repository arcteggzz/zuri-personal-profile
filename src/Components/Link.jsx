import "./Link.css"

function Link(props) {
    return (
      <div className="">
        <a
          className="link"
          href = {props.idLink}
          id= {props.id}
          target="_blank"
          rel="noreferrer"
        >
          {props.nameTag}
        </a>
      </div>
    );
}

export default Link;
    