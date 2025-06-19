'use client';
import React from 'react';
import './NutiritionDetails.css';

const ingredients = [
  "Potato", "Onion", "Tomato", "Ginger", "Garlic", "Oil",
  "Garam Masala", "Red Chili", "Turmeric", "Cumin Seeds", "Salt"
];

const nutritionData = [
  { parameter: "Total Carbohydrates", uom: "g/100g", result: "10.32" },
  { parameter: "Crude Fiber", uom: "g/100g", result: "3.5" },
  { parameter: "Crude Protein", uom: "g/100g", result: "1.83" },
  { parameter: "Total Sugar", uom: "g/100g", result: "Undertesting" },
  { parameter: "Sodium", uom: "mg/100g", result: "196.2" },
  { parameter: "Saturated Fat", uom: "g/100g", result: "0.15" },
  { parameter: "Trans Fat", uom: "g/100g", result: "ND" },
  { parameter: "Polyunsaturated Fat", uom: "g/100g", result: "0.24" },
  { parameter: "Monounsaturated Fat", uom: "g/100g", result: "0.63" },
  { parameter: "Cholesterol", uom: "mg/100g", result: "ND" },
  { parameter: "Calcium", uom: "g/100g", result: "2.66" },
  { parameter: "Iron", uom: "g/100g", result: "0.76" },
  { parameter: "Potassium", uom: "g/100g", result: "283.9" },
  { parameter: "Vitamin A", uom: "mg/100g", result: "984" },
  { parameter: "Vitamin C", uom: "mg/100g", result: "ND" }
];

export default function NutiritionDetails() {
  return (
    <div className="product-details-container">
      <div className="product-info-left">
        <h3 className="product-section-title">INGREDIENTS:</h3>
        <ol className="product-ingredient-list">
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>

        <h3 className="product-section-title">PACKAGING:</h3>
        <p className="product-packaging">Net Weight: 300g</p>

        <h3 className="product-section-title">SERVINGS:</h3>
        <p className="product-serving">2-3 Persons</p>
      </div>

      <div className="product-info-right">
        <h3 className="product-section-title">Nutrition Facts:</h3>
        <table className="product-nutrition-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>UoM</th>
              <th>Results</th>
            </tr>
          </thead>
          <tbody>
            {nutritionData.map((item, idx) => (
              <tr key={idx}>
                <td>{item.parameter}</td>
                <td>{item.uom}</td>
                <td>{item.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
