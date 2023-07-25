import React, { FC } from "react";

type props = {
    href: string;
    title: string;
}; 

const ExtButton: FC<props> = ({ href, title }) => {
    return (
        <div>
            <a className="butts" href={href} rel="me">
                {title}
                <div className="bicon">
                    <i className="bi bi-arrow-up-right-square" />
                </div>
            </a>
            <br />
        </div>
    );
};

export default ExtButton;
