import styles from "./NewsListItem.module.scss"

const NewsListItem = ({image, icon, date, info}) => {
    return (
        <li className={styles.listItem}>
            <img src={image} alt="" className={styles.picture}/>
            <div className={styles.box}>
                <div className={styles.block}>
                    <img src={icon} alt=""/>
                    <span className={styles.date}>{date}</span>
                </div>
                <span className={styles.info}>{info}</span>
            </div>
        </li>
    )
}

export default NewsListItem