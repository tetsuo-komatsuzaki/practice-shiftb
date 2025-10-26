import classes from "./header.module.css"

export default function Header() {
    return (
        <>
            <header className={classes.header}>
                <a href="#" className={classes.article}>Blog</a>
                <a href="#" className={classes.article}>お問い合わせ</a>
            </header>
        </>
    )
}