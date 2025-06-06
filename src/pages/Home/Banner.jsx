import { motion } from 'framer-motion';
import team1 from '../../assets/team/team1.jpg';
import team2 from '../../assets/team/team2.jpg';

const imageStyle =
  'w-full max-w-[200px] sm:max-w-xs md:max-w-sm rounded-t-4xl rounded-r-4xl border-s-8 border-b-8 border-blue-500 shadow-2xl';

const Banner = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="hero bg-base-200 min-h-screen px-4 md:px-8 lg:px-16 py-8"
    >
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center gap-8 lg:gap-16">
        {/* Image Column */}
        <div className="flex-1 flex flex-col gap-6 items-center justify-center">
          <motion.img
            src={team1}
            alt="Team member 1"
            className={imageStyle}
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src={team2}
            alt="Team member 2"
            className={imageStyle}
            animate={{ x: [0, 20, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
              delay: 1,
            }}
            whileHover={{ scale: 1.05 }}
          />
        </div>

        {/* Text Column */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'backOut' }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug"
          >
            Find Your Next{' '}
            <motion.span
              animate={{
                color: ['#ff5733', '#33ff46', '#3359ff', '#ff5733'],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            >
              Remote
            </motion.span>{' '}
            Opportunity
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, delay: 0.5 }}
            className="text-sm sm:text-base md:text-lg text-gray-600"
          >
            Discover top remote jobs from leading companies across the globe.
            Whether you're a developer, designer, or digital marketer — we've
            got the perfect role for you. Work from anywhere, grow your career,
            and enjoy the flexibility you deserve.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default Banner;
