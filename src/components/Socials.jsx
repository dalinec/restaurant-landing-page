import { socialData } from '../data';

const Socials = () => {
  return (
    <div className='flex gap-x-[10px]'>
      {socialData.map((item, i) => (
        <a
          className='border border-white/20 rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm hover:text-accent hover:border-accent transition-all'
          href={item.href}
          key={i}
        >
          {item.src}
        </a>
      ))}
    </div>
  );
};

export default Socials;
