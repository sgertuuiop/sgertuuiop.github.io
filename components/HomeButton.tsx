import Link from "next/link";

const HomeButton = ({}) => {
  return (
    <div>
      <Link className="cr-button" href="/">
        Go home
        <div className="cr-button-icon">
          <i className="ti ti-home" />
        </div>
      </Link>
      <br />
    </div>
  );
};

export default HomeButton;
