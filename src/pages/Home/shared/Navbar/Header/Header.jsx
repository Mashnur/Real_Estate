import logo from '../../../../../assets/Gemini_Generated_Image_go1kobgo1kobgo1k.jpg';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p>Homes For Every Stage Of Life</p>
            <p className='text-xl'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
        </div>
    );
};

export default Header;