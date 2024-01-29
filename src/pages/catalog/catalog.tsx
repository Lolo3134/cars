import React, { useState } from 'react';
import Card from 'shared/components/сard';

// Константы
const brands = ['Toyota', 'Honda', 'Mazda'];
const categories = ['All', 'Manual', 'Automatic'];
const seats = ['All', '2 Seats', '4 Seats', '5 Seats'];
const mpgs = ['All', '28 MPG', '30 MPG', '34 MPG'];

// Моковые данные
const items: Item[] = [
  {
    id: 1,
    image: '/images/img-1.svg',
    category: 'Manual',
    seats: '5 Seats',
    mpg: '34 MPG',
    model: 'Toyota New Yaris',
    price: '22.47',
    brand: 'Toyota',
  },
  {
    id: 2,
    image: '/images/img-2.svg',
    category: 'Automatic',
    seats: '4 Seats',
    mpg: '30 MPG',
    model: 'Honda Civic',
    price: '25.00',
    brand: 'Honda',
  },
  {
    id: 3,
    image: '/images/img-3.svg',
    category: 'Manual',
    seats: '2 Seats',
    mpg: '28 MPG',
    model: 'Mazda MX-5 Miata',
    price: '30.00',
    brand: 'Mazda',
  },

];

// Компонент фильтра
const Filter: React.FC<{ options: string[], selected: string, setSelected: (value: string) => void }> = ({ options, selected, setSelected }) => (
  <select value={selected} onChange={e => setSelected(e.target.value)}>
    {options.map(option => (
      <option key={option} value={option}>{option}</option>
    ))}
  </select>
);

// Компонент CatalogPage
const CatalogPage: React.FC = () => {
  // Состояния
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSeats, setSelectedSeats] = useState('All');
  const [selectedMpg, setSelectedMpg] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Обработчики
  const handleTagClick = (brand: string) => {
    setSelectedBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]);
  };

  // Фильтрация
  const filteredItems = items.filter(item => 
    (selectedBrands.length > 0 ? selectedBrands.includes(item.brand) : true) &&
    (selectedCategory !== 'All' ? item.category === selectedCategory : true) &&
    (selectedSeats !== 'All' ? item.seats === selectedSeats : true) &&
    (selectedMpg !== 'All' ? item.mpg === selectedMpg : true) &&
    (searchTerm !== '' ? item.model.toLowerCase().includes(searchTerm.toLowerCase()) : true)
  );

  // Рендер
  return (
    <div>
      {brands.map((brand, index) => (
        <button key={index} onClick={() => handleTagClick(brand)}>
          {brand}
        </button>
      ))}

      <Filter options={categories} selected={selectedCategory} setSelected={setSelectedCategory} />
      <Filter options={seats} selected={selectedSeats} setSelected={setSelectedSeats} />
      <Filter options={mpgs} selected={selectedMpg} setSelected={setSelectedMpg} />

      <input type="text" placeholder="Search by model" onChange={e => setSearchTerm(e.target.value)} />

      {filteredItems.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CatalogPage;