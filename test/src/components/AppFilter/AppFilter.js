import {ReactComponent as All} from "../../assets/all.svg";
import {ReactComponent as Football} from "../../assets/football.svg";
import {ReactComponent as Rugby} from "../../assets/rugby.svg";
import {ReactComponent as Cricket} from "../../assets/cricket.svg";

import "./AppFilter.css"


const AppFilter = ({filter, onFilterSelect}) => {

    const buttonsData = [
        {name: 'All Sports', label: 'All Sports', component: <All/>},
        {name: 'football', label: 'Football', component: <Football/>},
        {name: 'rugby', label: 'Rugby Union', component: <Rugby/>},
        {name: 'cricket', label: 'Cricket', component: <Cricket/>},
    ];

    const buttons = buttonsData.map(({name, label, component}) => {

        const active = filter === name;
        const clazz = active ? "active" : "btn"

        return (
            <button type="button"
                    key={name}
                    className={`btn ${clazz}`}
                    onClick={() => onFilterSelect(name)}>
                {component}
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;