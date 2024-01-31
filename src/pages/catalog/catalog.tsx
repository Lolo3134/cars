import React, { useState } from 'react';
import Card from 'shared/components/сard';
import s from './catalog.module.scss';
import CustomSelect from 'shared/components/select';

const brands = ['Toyota', 'Honda', 'Mazda'];
const categories = ['Filter 001', 'Manual', 'Automatic'];
const seats = ['Filter 002', '2 Seats', '4 Seats', '5 Seats'];
const mpgs = ['Filter 003', '28 MPG', '30 MPG', '34 MPG'];

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

// const Filter: React.FC<{ options: string[], selected: string, setSelected: (value: string) => void }> = ({ options, selected, setSelected }) => (
//   <select value={selected} className={s.filter__item} onChange={e => setSelected(e.target.value)}>
//     {options.map(option => (
//       <option key={option} value={option}>{option}</option>
//     ))}
//   </select>
// );

const CatalogPage: React.FC = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('Filter 001');
  const [selectedSeats, setSelectedSeats] = useState('Filter 002');
  const [selectedMpg, setSelectedMpg] = useState('Filter 003');
  const [searchTerm, setSearchTerm] = useState('');
   
  const handleTagClick = (brand: string) => {
    setSelectedBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]);
  };

  const filteredItems = items.filter(item => 
    (selectedBrands.length > 0 ? selectedBrands.includes(item.brand) : true) &&
    (selectedCategory !== 'Filter 001' ? item.category === selectedCategory : true) &&
    (selectedSeats !== 'Filter 002' ? item.seats === selectedSeats : true) &&
    (selectedMpg !== 'Filter 003' ? item.mpg === selectedMpg : true) &&
    (searchTerm !== '' ? item.model.toLowerCase().includes(searchTerm.toLowerCase()) : true)
  );
  
  return (
    <div>
      <div className={s.container}>
        <div className={s.filter__title}>
          <h1>Book your perfect car</h1>
        </div>
        <div className={s.catalog__tags}>
          {brands.map((brand, index) => (
            <button
              key={index}
              style={{
                backgroundColor: selectedBrands.includes(brand) ? '#ffffff' : '',
                color: selectedBrands.includes(brand) ? '#000000' : '',
              }}
              onClick={() => handleTagClick(brand)}
            >
              {brand}
            </button>
          ))}
        </div>
        <div className={s.filter__car}>
          <CustomSelect options={categories} selected={selectedCategory} setSelected={setSelectedCategory} />
          <CustomSelect options={seats} selected={selectedSeats} setSelected={setSelectedSeats} />
          <CustomSelect options={mpgs} selected={selectedMpg} setSelected={setSelectedMpg} />
          <input type="text" placeholder="Car Search" className={s.filter__input} onChange={e => setSearchTerm(e.target.value)} />
        </div>
        <div className={s.catalog__car}>
          {filteredItems.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;