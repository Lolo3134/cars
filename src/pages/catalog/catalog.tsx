import React, { useState } from 'react';
import Card from 'shared/components/сard';
import s from './catalog.module.scss';
import CustomSelect from 'shared/components/select';
import { Car } from 'shared/components/carCatalog/car-catalog.types';
import ContactMain from 'shared/components/contactMain';
import Footer from 'shared/components/footer';
import { useGetCarsQuery } from 'app/providers/store/api/catalog/catalog';


const brands = ['Toyota', 'Honda', 'Mazda', 'BMW', 'Audi', 'Mercedes', 'Volkswagen', 'Ford', 'Chevrolet', 'Dodge'];
const categories = ['Filter 001', 'Manual', 'Automatic'];
const seats = ['Filter 002', '2 Seets', '4 Seets', '5 Seets'];
const mpgs = ['Filter 003', '28 MPG', '30 MPG', '34 MPG'];

// const items: Car[] = [
//   {
//     id: 1,
//     image: '/images/img-1.svg',
//     category: 'Manual',
//     seats: '5 Seats',
//     mpg: '34 MPG',
//     model: 'Toyota New Yaris',
//     price: '22.47',
//     brand: 'Toyota',
//   },
//   {
//     id: 2,
//     image: '/images/img-2.svg',
//     category: 'Automatic',
//     seats: '4 Seats',
//     mpg: '30 MPG',
//     model: 'Honda Civic',
//     price: '25.00',
//     brand: 'Honda',
//   },
//   {
//     id: 3,
//     image: '/images/img-3.svg',
//     category: 'Manual',
//     seats: '2 Seats',
//     mpg: '28 MPG',
//     model: 'Mazda MX-5 Miata',
//     price: '30.00',
//     brand: 'Mazda',
//   },
//   {
//     id: 4,
//     image: '/images/img-1.svg',
//     category: 'Manual',
//     seats: '5 Seats',
//     mpg: '34 MPG',
//     model: 'Toyota New Yaris',
//     price: '22.47',
//     brand: 'Toyota',
//   },
//   {
//     id: 5,
//     image: '/images/img-2.svg',
//     category: 'Automatic',
//     seats: '4 Seats',
//     mpg: '30 MPG',
//     model: 'Honda Civic',
//     price: '25.00',
//     brand: 'Honda',
//   },
//   {
//     id: 6,
//     image: '/images/img-3.svg',
//     category: 'Manual',
//     seats: '2 Seats',
//     mpg: '28 MPG',
//     model: 'Mazda MX-5 Miata',
//     price: '30.00',
//     brand: 'Mazda',
//   },
//   {
//     id: 7,
//     image: '/images/img-1.svg',
//     category: 'Manual',
//     seats: '5 Seats',
//     mpg: '34 MPG',
//     model: 'Toyota New Yaris',
//     price: '22.47',
//     brand: 'Toyota',
//   },
//   {
//     id: 8,
//     image: '/images/img-2.svg',
//     category: 'Automatic',
//     seats: '4 Seats',
//     mpg: '30 MPG',
//     model: 'Honda Civic',
//     price: '25.00',
//     brand: 'Honda',
//   },
//   {
//     id: 9,
//     image: '/images/img-3.svg',
//     category: 'Manual',
//     seats: '2 Seats',
//     mpg: '28 MPG',
//     model: 'Mazda MX-5 Miata',
//     price: '30.00',
//     brand: 'Mazda',
//   },

// ];

const CatalogPage: React.FC = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('Filter 001');
  const [selectedSeats, setSelectedSeats] = useState('Filter 002');
  const [selectedMpg, setSelectedMpg] = useState('Filter 003');
  const [searchTerm, setSearchTerm] = useState('');

  const { data: items, error, isLoading } = useGetCarsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
   
  const handleTagClick = (brand: string) => {
    setSelectedBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]);
    console.log(items[1].specifications[1].value + ' ' + items[1].specifications[1].name)
  };

  const filteredItems = items.filter(item => 
    (selectedBrands.length > 0 ? selectedBrands.includes(item.brand as string) : true) &&
    (selectedCategory !== 'Filter 001' ? item.specifications[0].name === selectedCategory : true) &&
    (selectedSeats !== 'Filter 002' ? (item.specifications[1].value + ' ' + item.specifications[1].name).toLowerCase() === selectedSeats.toLowerCase() : true) &&
    (selectedMpg !== 'Filter 003' ? (item.specifications[2].value + ' ' + item.specifications[2].name).toLowerCase() === selectedMpg.toLowerCase() : true) &&
    (searchTerm !== '' ? (item.brand).toLowerCase().includes(searchTerm.toLowerCase()) || 
    (item.car_model).toLowerCase().includes(searchTerm.toLowerCase()) : true)
  );
  
  return (
    <>
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
      <ContactMain />
      <Footer />
    </>
  );
};

export default CatalogPage;