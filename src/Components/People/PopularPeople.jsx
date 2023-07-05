import React, { useContext, useEffect, useState } from 'react'
import styles from './People.module.css';
import { moviesTvPeopleContext } from '../Context/MoviesTVPeopleContext.jsx';
import CustomeHeaderSections from '../Custome/CustomeHeaderSections.jsx';
import CustomeBodyListType from '../Custome/CustomeBodyListType.jsx';

export default function PopularPeople() {


    const { getListMoviesAndTVsAndPeopleContext } = useContext(moviesTvPeopleContext);
    const [peoples, setPeoples] = useState([]);
    const [searchItem, setSearchItem] = useState(peoples);

    async function getPeoples() {
        const res = await getListMoviesAndTVsAndPeopleContext('person', 'popular');
        setPeoples(res.results);
        setSearchItem(res.results);
    }

    useEffect(() => {
        getPeoples();
    }, []);

    return (
        <>
            <CustomeHeaderSections title="Popular People" type='people' valType={peoples} setType={setSearchItem} />
            <div className="container-fluid px-md-5">
                <div className="row">
                    {searchItem.length > 0 ? <> {searchItem.map((people) => {
                        return <CustomeBodyListType key={people.id} item={people} type="people" />
                    })}</> : <><h2 className={`${styles.title} ${styles.NoItems}`}>No Items</h2></>}

                </div>
            </div>
        </>
    )
}
