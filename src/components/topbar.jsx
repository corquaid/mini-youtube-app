import React from "react";
import { useForm } from "react-hook-form";
import searchIcon from "../search_icon.svg";
import logo from "../YouTube_Logo_2017.svg";
import styles from "../styles/topbar.module.css";

const TopBar = ({ handleSearch }) => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        handleSearch(data.search);
        reset();
    };

    return (
        <div className={styles.topBarContainer}>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={logo} alt="logo"></img>
                <div className={styles.logoText}>
                    <a href="https://github.com/corquaid" target="_blank" rel="noreferrer">
                        @corquaid
                    </a>
                </div>
            </div>

            <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.inputContainer}>
                    <input
                        className={styles.input}
                        placeholder="Search..."
                        type="text"
                        name="searchInput"
                        {...register("search")}
                    ></input>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.button} type="submit">
                        <img className={styles.image} src={searchIcon} alt="search icon"></img>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TopBar;
