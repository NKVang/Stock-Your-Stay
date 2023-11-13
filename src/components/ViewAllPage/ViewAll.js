import React from 'react'
import './ViewAll.css'
import Products from './products'

const ViewAll = () => {
    return (
        <>
        <div className = 'buttons'>
            <div className = 'snacksButton'>
                <button>Breakfast</button>
            </div>
            <div className = 'snacksButton'>
                <button>Snacks</button>
            </div>
            <div className = 'lunchButton'>
                <button>Lunch</button>
            </div>  
            <div className = 'dinnerButton'>
                <button>Dinner</button>
            </div>
        </div>
        <div className = 'caret-dropdown'>
            <div className = 'filterText'>
                <p>Filter</p>
            </div>
            <div className = 'filter'>
            <select>
                <option>Breakfast</option>
                <option>Packages</option>
            </select>
            </div>
            <div className = 'sortText'>
                <p>Sort</p>
            </div>
            <div className = 'sort'>
                <select>
                    <option>Best Selling</option>
                    <option>Alphabetically, A-Z</option>
                    <option>Alphabetically, Z-A</option>
                    <option>Price, Low to High</option>
                    <option>Pirce, High to Low</option>
                    <option>Date, Old to New</option>
                    <option>Date, New to Old</option>
                </select>
            </div>
        </div>
        <div className = 'categoryTitle'>
            <p>Egg Station</p>
        </div>
        <div className = 'product'>
            <div className = 'container'>
                {
                    Products.map((curElm) =>
                    {
                        return(
                            <div className = 'box' key = {curElm.id}>
                                <div className = 'img_box'>
                                    <img src={curElm.img} alt = {curElm.title}></img>
                                    <div className = 'title'>
                                        <p>{curElm.title}</p>
                                    </div>
                                    <div className = 'price'>
                                        <p>{curElm.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className = 'box'>
                </div>
            </div>
        </div>
        </>
    )
}

export default ViewAll