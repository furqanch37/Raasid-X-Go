'use client';
import React from 'react';
import './NutiritionDetails.css';

export default function NutritionDetails({ product }) {
  const { ingredients = [], packaging, serving, nutritions = {} } = product;

  const nutritionData = Object.entries(nutritions).map(([key, value]) => ({
    parameter: key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
    uom: value.UOM,
    result: value.Results,
  }));

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
        <p className="product-packaging">{packaging}</p>

        <h3 className="product-section-title">SERVINGS:</h3>
        <p className="product-serving">{serving}</p>
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
