import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
} from 'react-icons/fa';

import AboutImg from '../src/assets/about/plate.png';
import MenuImg1 from '../src/assets/menu/1.png';
import MenuImg2 from '../src/assets/menu/2.png';
import MenuImg3 from '../src/assets/menu/3.png';
import MenuImg4 from '../src/assets/menu/4.png';
import ModelWhiteImg from '../src/assets/model-white.png';
import ModelBlackImg from '../src/assets/model-black.png';
import SignatureImg from '../src/assets/team/signature.png';
import ChefImg from '../src/assets/team/chef.png';

export const heroData = {
  pretitle: 'Nothing brings together like',
  title: 'Bistro Cafe',
  subtitle:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
  btnText: 'Find out more',
};

export const navData = [
  { href: '/', name: 'home' },
  { href: '/', name: 'about' },
  { href: '/', name: 'menu' },
  { href: '/', name: 'team' },
  { href: '/', name: 'testimonials' },
  { href: '/', name: 'book a table' },
  { href: '/', name: 'contact' },
];

export const socialData = [
  { href: '/', src: <FaYoutube /> },
  { href: '/', src: <FaFacebookF /> },
  { href: '/', src: <FaInstagram /> },
  { href: '/', src: <FaPinterestP /> },
  { href: '/', src: <FaDiscord /> },
];

export const aboutData = {
  pretitle: 'our story',
  title: 'who we are',
  subtitle:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet consequatur, quasi minima molestiae ex exercitationem culpa quisquam architecto quaerat, iusto dolores labore, sapiente magni rem commodi aperiam ad dolorem neque ducimus. Placeat vel non quod quis pariatur a aperiam, aliquam adipisci voluptatum voluptatem sit cupiditate dolore natus beatae earum omnis.',
  btnText: 'find out more',
  image: AboutImg,
};

export const menuData = {
  title: 'delicious flavour of autumn',
  subtitle: 'view all menu for tasty meal today',
  modelImg: ModelWhiteImg,
  btnText: 'view complete menu',
  menuItems: [
    {
      image: MenuImg1,
      name: 'Chocolate Cake',
      price: '$7.99',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
    {
      image: MenuImg2,
      name: 'Veggie Burger',
      price: '$9.49',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
    {
      image: MenuImg3,
      name: 'King Burger',
      price: '$8.50',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
    {
      image: MenuImg4,
      name: 'Mexican Burger',
      price: '$9.99',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
  ],
};

export const teamData = {
  pretitle: 'our team',
  title: 'meet our chef',
  sub1: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci repudiandae enim ratione corrupti voluptatum suscipit distinctio dolor.',
  sub2: 'Sequi exercitationem quae deserunt reiciendis nesciunt perferendis atque quisquam, odit facere! Minima esse reiciendis, magnam fugiat totam maxime consequatur perspiciatis voluptas consequuntur.',
  name: 'sara peter',
  occupation: 'executive chef',
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};
