import React, { FC } from "react";
import Link from 'next/link'

type props = {
    href: string;
    title: string;
}; 

const Button: FC<props> = ({ href, title }) => {
    return (
        <div>
            <Link className="butts" href={href} rel="me">
                {title}
                <div className="bicon">
                    <i className="bi bi-arrow-right-square" />
                </div>
            </Link>
            <br />
        </div>
    );
};

export default Button;
