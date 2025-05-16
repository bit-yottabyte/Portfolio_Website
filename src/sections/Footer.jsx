
const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2'>
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>

        <div className='flex gap-3'>
            <a href='https://github.com/bit-yottabyte'>
                <div className='social-icon'>
                    <img src='/assets/github.svg' alt='Github' className="w-1/2 h-1/2"/> 
                </div>
            </a>

            <a href='https://www.instagram.com/athavan.j/'>
                <div className='social-icon'>
                    <img src='/assets/instagram.svg' alt='Instagram' className="w-1/2 h-1/2"/>
                </div>
            </a>

            <a href='https://www.linkedin.com/in/athavan-jesunesan-3495181a2/'>
                <div className='social-icon'>
                    <img src='/assets/linkedin.svg' alt='Linkedin' className="w-1/2 h-1/2"/>
                </div>
            </a>
        </div>

        <p className='text-white-500'>© 2025 Athavan Jesunesan. All rights reserved.</p>
    </section>
  )
}

export default Footer