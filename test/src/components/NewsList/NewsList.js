import NewsListItem from "../NewsListItem/NewsListItem"
import styles from "./NewsList.module.scss"

const NewsList = ({ data }) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item

        return <NewsListItem
            key={id}
            {...itemProps}
        />
    })

    return (
        <div className={styles.list}>
            {elements}
        </div>
    )
}
export default NewsList