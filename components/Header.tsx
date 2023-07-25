import React, { FC } from "react";
import Link from 'next/link'

type props = {
    title: string;
}; 

const Header: FC<props> = ({ title }) => {
    return (
        <div className="heads">
            <p>
                <Link href="/" className="heads hlink">
                    <img className="hdimg" alt="" width="32" height="32" src="/assets/favicon.png" /> {" "}
                    Christian Rodríguez
                </Link> {" "}
                » {" "}
                <i>{title}</i>
            </p>
        </div>
    );
};

export default Header;
