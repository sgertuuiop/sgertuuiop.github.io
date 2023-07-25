import Link from "next/link";

const HomeButton = ({}) => {
  return (
    <div>
      <Link className="cr-button" href="/">
        Go home
        <div className="cr-button-icon">
          <i className="fa fa-person-walking-arrow-loop-left" />
        </div>
      </Link>
      <br />
    </div>
  );
};

export default HomeButton;
