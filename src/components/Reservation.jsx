import { useState } from 'react';
import { reservationData } from '../data';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../variants';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import { FaUsers, FaCalendar, FaClock } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import '../timepicker.css';

const Reservation = () => {
  const { title, subtitle, modelImg, btnText } = reservationData;
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState('10:00');

  return (
    <section className=' z-30 pb-20 pt-[350px] lg:pt-[400px] h-[1020px] lg:h-[860px]'>
      <div className='container mx-auto'>
        {/* text */}
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          className='text-center'
        >
          <motion.h2
            variants={fadeIn('up', 'tween', 0.2, 1.6)}
            className='h2 capitalize'
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 'tween', 0.4, 1.6)}
            className='mb-8 text-dark'
          >
            {subtitle}
          </motion.p>
          <motion.div
            variants={fadeIn('up', 'tween', 0.6, 1.6)}
            className='flex justify-center mb-8'
          >
            <img src={modelImg} alt='model' />
          </motion.div>
        </motion.div>
        {/* form */}
        <motion.form
          variants={fadeIn('up', 'tween', 0.7, 1.6)}
          initial='hidden'
          whileInView='show'
        >
          <div className='flex flex-col lg:flex-row gap-y-4 items-center justify-between mb-8'>
            {/* datepicker */}
            <div className=''>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaCalendar />
                <div>Choose Date</div>
              </div>
              <DatePicker
                className='input'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            {/* timepicker */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaClock />
                <div>Choose Time</div>
              </div>
              <TimePicker
                className='input'
                clearIcon={false}
                clockIcon={false}
                onChange={setValue}
                value={value}
              />
            </div>
            {/* personnumber */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaUsers />
                <div>How Many people?</div>
              </div>
              <input className='input' type='text' placeholder='1' />
            </div>
          </div>
          {/* btn */}
          <div className='max-w-[316px] mx-auto flex justify-center'>
            <button className='btn capitalize w-full lg:w-auto'>
              {btnText}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Reservation;
