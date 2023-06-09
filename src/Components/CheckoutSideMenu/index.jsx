import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'
import { AppContext } from '../../Context'
import OrderCard from '../../Components/OrderCard';
import './styles.css'

const CheckoutSideMenu = () => {
  const context  = useContext(AppContext)
  console.log(context.cartProducts, "Productos menu deslizable");


  return (
    <aside 
    className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
<div className='flex justify-between items-center p-6'>
  <h2 className='font-medium text-xl'> My Order</h2>
  <div>
    <XMarkIcon 
    className='h-6 w-6 text-black-500 cursor-pointer'
    onClick={() => context.closeCheckoutSideMenu()}
    ></XMarkIcon>
  </div>

</div>
<div className='px-6'>
{
  context.cartProducts.map(product => (
    <OrderCard 
    key={product.id}
    title={product.title}
    imageUrl={product.images[0]}
    price={product.price}
    />
  ))
}
</div>

    </aside>
  )
}
export default CheckoutSideMenu