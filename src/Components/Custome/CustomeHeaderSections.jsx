import React from 'react'
import styles from '../Movies/Movies.module.css';


export default function CustomeHeaderSections({ title, type, valType, setType }) {


    const searchType = (e) => {
        const { value } = e.target;
        const arr = [];
        {
            type === "Movie" ? valType.map((val) => {
                if (val.original_title.toLowerCase().includes(value.toLowerCase())) {
                    arr.push(val);
                }
            }) : <>
                {type === "Tv" ? valType.map((val) => {
                    if (val.original_name.toLowerCase().includes(value.toLowerCase())) {
                        arr.push(val);
                    }
                }) : <>
                    {type === "people" ? valType.map((val) => {
                        if (val.name.toLowerCase().includes(value.toLowerCase())) {
                            arr.push(val);
                        }
                    }) : <></>}</>
                }</>
        }

        setType(arr);
        console.log(valType)
    }

    return (
        <>
            <div className={`${styles.header} `}>
                <div className="title mb-4">
                    <h2 className='titleSection'>{title}</h2>
                </div>
                {(type === 'Movie' || type === 'Tv' || type === 'people') ? <>
                    <div className="search d-flex justify-content-center">
                        <div className={`${styles.inputGroup} input-group w-50`}>
                            <input type="search" className={`${styles.inputStyle} form-control w-50`} placeholder={`Search for ${type}`} aria-describedby="basic-addon2" onChange={searchType} />
                        </div>
                    </div></> : <></>}

            </div>


        </>
    )
}
