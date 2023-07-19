import styles from './CSSModule.module.css';

console.log(styles);

const CSSModule = () => {

    return(
        <div className={styles.wrapper}>
            안녕하세요 <span className="something">CSS Module</span>
        </div>
    )

};

export default CSSModule;