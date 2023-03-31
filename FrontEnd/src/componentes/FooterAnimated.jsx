import React from "react";
import GitHub from "../imagens/github.png"
import { Link } from "react-router-dom";
// Import CSS via MODULE
import styles from "../styles/FooterAnimated.module.css"

const FooterAnimated = () => {

    return (
        <footer className={styles}>
        <div className={styles.FooterGitHub}>
        <Link to={`https://github.com/Davinunesaz`}>
        <img src={GitHub} alt="" />
        </Link>
        <Link to={`https://github.com/Fernanda-Camarg0`}>
        <img src={GitHub} alt="" />
        </Link>
        <Link to={`https://github.com/rbzada`}>
        <img src={GitHub} alt="" />
        </Link>
        <Link to={`https://github.com/KingPd`}>
        <img src={GitHub} alt="" />
        </Link>
        <Link to={`https://github.com/Ramonmaia18`}>
        <img src={GitHub} alt="" />
        </Link>
        <Link to={`https://github.com/ThiagoAbreuBR`}>
        <img src={GitHub} alt="" />
        </Link>
        </div>
    </footer>
    )
}

export default FooterAnimated