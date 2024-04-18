import s from './Footer.module.css'

export function Footer() {
    return (
        <footer className={s.footer}>
            <div className="container">
                <div className={s.footer__underline}></div>
                <p className={s.footer__text}>2022 © Made with love by me</p>
            </div>
        </footer>
    );
}