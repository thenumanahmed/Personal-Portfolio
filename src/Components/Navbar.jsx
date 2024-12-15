import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                {/* <a href="/" aria-label="Home"> */}
                {/* <img src={logo} className='mx-2' width={50} height={33} alt='logo' /> */}
                <h1 className='font-bold'>N-A</h1>
                {/* </a> */}
            </div>

            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com/in/numan-ahmed-987n/" target='_blank' title='Linkedins Profile' rel='noopener noreferrer' aria-label="Linkedin">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/thenumanahmed/" target='_blank' title='Github Profile' rel='noopener noreferrer' aria-label="Github">
                    <FaGithub />
                </a>
                {/* <a href="#" target='_blank' rel='noopener noreferrer' aria-label="Instagram">
                    <FaInstagram />
                </a> */}
                {/* <a href="#" target='_blank' rel='noopener noreferrer' aria-label="Twitter">
                    <FaSquareXTwitter />
                </a> */}

            </div>
        </nav>
    )
}
export default Navbar;