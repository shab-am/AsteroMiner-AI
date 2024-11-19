import 'remixicon/fonts/remixicon.css'

const Hero = () => {
  return (
    <div className='relative h-[100vh] w-full bg-zinc-900 flex justify-center items-center'
      style={{ backgroundImage: `url('/assets/images/sky-stars(1).png')` }}>
        
      <div 
        className='w-[220px] h-[120px] bg-contain bg-center bg-no-repeat absolute top-[4.5rem]'
        style={{
          backgroundImage: `url('/assets/images/logo.png')`
        }}>
      </div>

      <div
        className='w-[260px] h-[260px] overflow-hidden mt-[35px] bg-contain bg-center bg-no-repeat opacity-60 relative z-100'
        style={{
          backgroundImage: `url('/assets/images/asteroid.png')`
        }}>
      </div>

      <div className="absolute bottom-8 flex flex-col items-center text-zinc-500">
        <p className="mb-1 text-lg">Scroll Down</p>
        <div className="animate-bounce">
          <i className="ri-arrow-down-double-line text-2xl text-zinc-600"></i>
        </div>
      </div>

      

    </div >
  );
};

export default Hero;