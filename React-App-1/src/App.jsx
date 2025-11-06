import './App.css'
import { useState } from 'react';

function ProductCategoryRow({category}) {
  return (
    <tr>
      <th colSpan= '2'>
        {category}
      </th>
    </tr>
  );
}

function ProductRow({product}){
  const name = product.stocked? product.name:
  <span style= {{color: 'red'}}>
    {product.name}
  </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

  function ProductTable({products, filterText, inStockOnly}){
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
      if (
        product.name.toLowerCase().indexOf(
          filterText.toLowerCase()
        ) === -1
      ){
        return;
      }

      if (
        inStockOnly && !product.stocked){
          return;
      }

      if (product.category !== lastCategory){
        rows.push(
          <ProductCategoryRow
          category={product.category}
          key={product.category} />
        );
      }
      rows.push (
        <ProductRow
        product={product}
        key={product.name} />
      );
      lastCategory = product.category;

    });

    return (
      <div className='table-wrapper'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }

  function SearchBar({filterText, inStockOnly, onFilterChange, onInStockChange}){
    return (
      <form>
        <input type='text' 
        value={filterText}
        placeholder='Search...'
        onChange={(e) => onFilterChange(e.target.value)} />
        <label>
          <input 
          type='checkbox'
          checked = {inStockOnly}
          onChange={(e) => onInStockChange(e.target.checked)}
          />
          Only show products in stock
        </label>
      </form>
    );
  }

  function FilterableProductTable({products}){
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInstockOnly] = useState(false);

    return (
      <div className='stuff'>
        <SearchBar
        filterText = {filterText}
        inStockOnly = {inStockOnly}
        onFilterChange = {setFilterText}
        onInStockChange ={setInstockOnly} />
        <ProductTable 
        products={products} 
        filterText = {filterText}
        inStockOnly = {inStockOnly}
        />
      </div>
    );
  }

  const PRODUCTS = [
    {category:"Fruits", price: '$1', stocked: true, name: 'Apple'},
    {category: 'Fruits', price: '$3', stocked:true, name: 'DragonFruit'},
    {category:'Fruits', price: '$5', stocked: false, name: 'Passionfruit'},
    {category: 'Vegetables', price: '$10', stocked: true, name: 'Spinach'},
    {category: 'Vegetables', price: '$6', stocked:false, name: 'Pumpkin'},
    {category: 'Vegetables', price: '$2', stocked: true, name: 'Peas'},
    {category: 'Legumes', price: '$50', stocked: false, name: 'Beans'},
    {category: 'Drinks', price: '$100', stocked: true, name: 'Milkshake'},
    {category: 'Drinks', price:'$38', stocked: true, name: 'Fanta Orange'},
    {category: 'Sea Food', price: '$127', stocked: false, name: 'Lobster'}
  ];

  export default function App() {
    return <FilterableProductTable products={PRODUCTS} />;
  }
