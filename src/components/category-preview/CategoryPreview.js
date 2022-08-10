import './CategoryPreview.scss';
import { ProductCard } from '../product-card/ProductCard';
import { Link, useNavigate } from 'react-router-dom';

export function CategoryPreview({ title, products }) {
  const navigate = useNavigate();

  const goToCategoryProducts = () => navigate(`./${title}`);

  return (
    <div className='category-preview-container'>
      <h2>
        <Link to={title} className='title' onClick={goToCategoryProducts}>
          {title}
        </Link>
      </h2>
      <div className='preview'>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
