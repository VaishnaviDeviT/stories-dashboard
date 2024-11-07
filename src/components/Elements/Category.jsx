import React from "react";
import './Categories.css';

const categories = [
    { id: 1, name: "Category 1", imgSrc: "../assets/heart.png" },
    { id: 2, name: "Category 2", imgSrc: "../assets/veggies.png" },
    { id: 3, name: "Category 3", imgSrc: "../assets/tea.png" },
    { id: 4, name: "Category 4", imgSrc: "../assets/fever.png" },
    { id: 5, name: "Category 5", imgSrc: "../assets/cold.png" },
    { id: 6, name: "Category 6", imgSrc: "../assets/black.png" },
    { id: 7, name: "Category 7", imgSrc: "../assets/heart.png" },
    { id: 8, name: "Category 8", imgSrc: "../assets/veggies.png" },
];

const Category = () => {
    return (
        <div className="category-page">
            
            
            <div className="category-grid">
                {categories.map((category) => (
                    <div key={category.id} className="category-card">
                        <img src={category.imgSrc} alt={category.name} className="category-image" />
                        <p>{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
