import {useState, useEffect} from "react"

import AppFilter from "../AppFilter/AppFilter";
import NewsList from "../NewsList/NewsList"

import styles from './App.module.scss';


function App() {

    const [news, setNews] = useState([]);
    const [filter, setFilter] = useState('All Sports');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./db.json');
                const data = await response.json();
                setNews(data.news);

            } catch (e) {
                console.error('error fetching data from server')
            }
        }
        fetchData();
    }, []);

    const filterItems = (news, filter) => {
        switch (filter) {
            case "football":
                return news.filter(item => item.filter === "football")
            case "cricket":
                return news.filter(item => item.filter === "cricket")
            case "rugby":
                return news.filter(item => item.filter === "rugby")
            default:
                return news
        }
    }

    const visibleDate = filterItems(news, filter)

    const onFilterSelect = (filter) => {
        setFilter(filter);
    }


    return (
        <div className={styles.App}>
            <AppFilter filter={filter} onFilterSelect={onFilterSelect}/>
            <NewsList data={visibleDate}/>
        </div>
    );
}

export default App;
