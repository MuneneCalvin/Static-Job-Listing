import background from '../images/bg-header-desktop.svg'
import './Header.css'

export default function Header() {
  return (
    <div id='header' >
      <img src={background} alt='' className='headerIMG' />
    </div>
  )
}
