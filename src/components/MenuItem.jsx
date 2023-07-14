function MenuItem({ image, name, price, description, index }) {
  return (
    <div className='flex flex-row lg:flex-col h-full'>
      {/* img */}
      {/* reverse order */}
      <div
        className={`w-[45%] md:w-auto ${
          index === 1 || index === 3 ? 'lg:order-1' : 'order-none'
        }`}
      >
        <img src={image} alt={name} />
      </div>
      {/* text */}
      <div className='bg-[#fff3e4] flex flex-1 flex-col justify-center px-6 lg:p-12 lg:max-h-[250px] xl:max-h-max'>
        <div className='text-center'>
          <div className='text-xl font-semibold text-dark xl:text-2xl'>
            {name}
          </div>
          <div className='my-1 text-[20px] lg:text-[40px] lg:my-6 text-accent font-semibold'>
            {price}
          </div>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
