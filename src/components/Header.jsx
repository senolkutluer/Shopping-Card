import CartIcon from "./CartIcon";


const Header = ({cart}) => {
  return (
    <div className="flex justify-between item-center mb-6">
      <h1 className='text-3x1 font-semibold'>
        React and Tailwind CSS Implementation
      </h1>
    <CartIcon cart={cart} />
    </div>
  );
};

export default Header;