import './CartItem.scss';

export function CartItem({ product }) {
  const { name, imageUrl, quantity, price } = product;

  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={name} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
}
