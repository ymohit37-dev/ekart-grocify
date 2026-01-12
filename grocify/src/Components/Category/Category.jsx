import React from 'react';
import Heading from '../Heading/Heading';
import FruitsCat from '../../assets/fruits-and-veggies.png';
import DairyCat from '../../assets/dairy-and-eggs.png';
import SeaFoodCat from '../../assets/meat-and-seafood.png';
import Button from '../Button/Button';

const category = [
  {
    id: 1,
    title: 'Fruits and Veggies',
    description: 'Bread for a high content of beneficial substances. Our products are all fresh and healthy.',
    Image: FruitsCat,
  },
  {
    id: 2,
    title: 'Dairy & Eggs',
    description: 'Wholesome dairy products and free range eggs. From creamy milk and yogurt to artisanal cheeses.',
    Image: DairyCat,
  },
  {
    id: 3,
    title: 'Meat & Seafood',
    description: 'High quality, responsibly sourced meat and seafood products. Choose from fresh cuts, marinated options, and more.',
    Image: SeaFoodCat,
  },
];

const Category = () => {
  const renderCards = category.map(card => (
    <div className='flex-1 basis-[300px] key={card.id}'>
      <div key={card.id}>
        {/* card image */}
      <div className='w-full min-h-[30vh] relative -mb-10'>
        <img src={card.Image} className='absolute bottom-0' alt={card.title} />
      </div>

      {/* card content */}
      <div className='bg-zinc-100 pt-17 p-8 rounded-xl '>
        <h3 className='text-zinc-800 text-3xl font-bold'>{card.title}</h3>
        <p className='text-zinc-600 mt-3 mb-9'>{card.description}</p>
        <Button content="See All" />
      </div>
    </div>


    </div>
  ));

  return (
    <section> 
      <div  className='py-20 max-w-[1400px] mx-auto px-10 '>
        <Heading highlight="Shop" heading="by Category" />
        <div className='flex gap-10 md:mt-15 mt-10 flex-wrap' >
          {renderCards}
        </div>
      </div>
    </section>
  );
};

export default Category;
