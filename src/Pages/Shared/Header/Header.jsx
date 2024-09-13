import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col gap-2 mt-8 mb-4 items-center'>
            <div>
                <img src={logo} alt="News-Logo" />
            </div>
            <h2>Journalism Without Fear or Favour</h2>
            <p><span className='font-semibold'>{moment().format("dddd")},</span>{moment().format(" MMMM D YYYY")}</p>
        </div>
    );
};

export default Header;