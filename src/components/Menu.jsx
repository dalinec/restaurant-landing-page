import { menuData } from '../data';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../variants';
import MenuItem from './MenuItem';

const Menu = () => {
  const { title, subtitle, modelImg, menuItems, btnText } = menuData;
  return (
    <section className='min-h-[790px]'>
      {/* background */}
      <div className='h-[780px] bg-menu absolute w-full -z-0'></div>
      {/* text */}
      <div className='relative z-10 top-72 lg:top-52'>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.1 }}
          className='container mx-auto flex flex-col items-center text-center'
        >
          <motion.h2
            variants={fadeIn('down', 'tween', 0.2, 1.6)}
            className='h2 capitalize text-white text-center max-w-[400px]'
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeIn('down', 'tween', 0.4, 1.6)}
            className='text-white/70 capitalize mb-8 '
          >
            {subtitle}
          </motion.p>
          <motion.div variants={fadeIn('down', 'tween', 0.6, 1.6)}>
            <img src={modelImg} alt='model' />
          </motion.div>
        </motion.div>
      </div>
      {/* menu gallery */}
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'tween',
          delay: 0.2,
          duration: 1.6,
          ease: 'easeOut',
        }}
        className='relative top-80 lg:top-96'
      >
        <div className='container mx-auto'>
          <div className='lg:-mt-24 min-h-[590px] z-30 mb-8 md:mb-4 xl:mb-16'>
            {/* grid */}
            <div className='grid grid-cols-1 lg:grid-cols-4 min-h-[590px]'>
              {menuItems.map((item, index) =>
                //  (
                //   <MenuItem key={index} index={index} {...item} />
                // )
                {
                  const { image, name, price, description } = item;
                  return (
                    <div
                      key={index}
                      className='flex flex-col h-full items-center'
                    >
                      {/* img */}
                      {/* reverse order */}
                      <div
                        className={`w-auto ${
                          index === 1 || index === 3
                            ? 'lg:order-1'
                            : 'order-none'
                        }`}
                      >
                        <img src={image} alt={name} />
                      </div>
                      {/* text */}
                      <div className='bg-[#fff3e4] flex flex-col justify-center px-6 lg:p-12 lg:max-h-[250px] xl:max-h-max lg:mb-0 max-w-[300px]'>
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
              )}
            </div>
          </div>
          <button className='btn mx-auto capitalize'>{btnText}</button>
        </div>
      </motion.div>
    </section>
  );
};

export default Menu;
