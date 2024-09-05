import React from 'react';
import ProductItem from './ProductItem';
import './Products.css';

const Products = () => {
  const products = [
    {
      title: 'Redmi Note 12S 5G',
      image: 'https://i02.appmifile.com/686_operatorx_operatorx_opx/23/02/2024/a13c444dfc0b5db4ecae1e9d0ba10326.png',
      features: [
        '6.0" Full HD+ Display',
        'Tri Camera Setup',
        '5000mAh Battery',
        'Fast Charging Support',
        '128GB Internal Storage',
        '8GB RAM',
      ],
      price: 'Rs.30000',
    },
    {
      title: 'Redmi Note 12 Pro+ 5G',
      image: 'https://m.media-amazon.com/images/I/61VTwVvavNL.jpg',
      features: [
        '6.5" Full HD+ Display',
        'Quad Camera Setup',
        '4000mAh Battery',
        'Fast Charging Support',
        '64GB Internal Storage',
        '4GB RAM',
      ],
      price: 'Rs.25000',
    },
    {
      title: 'Redmi Note 12 5G',
      image: 'https://i.gadgets360cdn.com/large/mi_cc9_pro_main_1572944102058.jpg',
      features: [
        '5.9" Full HD+ Display',
        'Penta Camera Setup',
        '4000mAh Battery',
        'Fast Charging Support',
        '32+32GB Internal Storage',
        '6GB RAM',
      ],
      price: 'Rs.20000',
    },
    {
      title: 'Redmi Note 11S 5G',
      image: 'https://i02.appmifile.com/373_operatorx_operatorx_opx/10/05/2023/657e399a69e188fb194c3804f33fb67d!500x500.png',
      features: [
        '6.1" Full HD+ Display',
        'Tri Camera Setup',
        '5000mAh Battery',
        '150w Charging Support',
        '128GB Internal Storage',
        '8GB RAM',
      ],
      price: 'Rs.28000',
    },
    {
      title: 'Redmi Note 11 Pro 5G',
      image: 'https://i.ebayimg.com/images/g/50EAAOSwjjxj9k2L/s-l1600.png',
      features: [
        '6.2" Full HD+ Display',
        'Tri Camera Setup',
        '6000mAh Battery',
        'Fast Charging Support',
        '64GB Internal Storage',
        '8GB RAM',
      ],
      price: 'Rs.27000',
    },
    {
      title: 'Redmi Note 11',
      image: 'https://m.media-amazon.com/images/I/51VTCbe-hDL.jpg',
      features: [
        '6.0" Full HD+ Display',
        'Quad Camera Setup',
        '5000mAh Battery',
        'Fast Charging Support',
        '128GB Internal Storage',
        '4GB RAM',
      ],
      price: 'Rs.24000',
    },
  ];

  return (
    <section id="products" className="products-section">
      <h1 className="products-heading">Our Products</h1>
      {products.map((product, index) => (
        <ProductItem
          key={index}
          title={product.title}
          image={product.image}
          features={product.features}
          price={product.price}
        />
      ))}
    </section>
  );
};

export default Products;
