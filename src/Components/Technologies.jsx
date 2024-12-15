
import { BiLogoPostgresql } from 'react-icons/bi';
import { DiRedis } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiExpress, SiMongodb, SiFlutter, SiFirebase } from 'react-icons/si'
import { animate, motion } from 'framer-motion';

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse'
        }
    }
})

const Technologies = () => {
    return (
        <div className='pb-24'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}

                className='my-20 text-center text-4xl'>
                Technologies
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    initial='initial'
                    title="React"
                    animate='animate'
                    variants={iconVariants(2.5)}
                >
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                    initial='initial'
                    animate='animate'
                    title="Nodejs"
                    variants={iconVariants(4)}
                    className='p-4'>
                    <FaNodeJs className='text-7xl text-green-500' />
                </motion.div>
                <motion.div
                    initial='initial'
                    title="Expressjs"
                    animate='animate'
                    variants={iconVariants(1)}
                    className="p-4"
                >
                    <SiExpress className='text-7xl text-gray-700' />
                </motion.div>

                <motion.div
                    initial='initial'
                    title="MongoDb"
                    animate='animate'
                    variants={iconVariants(2)}
                    className="p-4"
                >
                    <SiMongodb className='text-7xl text-green-600' />
                </motion.div>

                <motion.div
                    initial='initial'
                    title="Flutter"
                    animate='animate'
                    variants={iconVariants(3)}
                    className="p-4"
                >
                    <SiFlutter className='text-7xl text-sky-500' />
                </motion.div>

                <motion.div
                    initial='initial'
                    title="Firebase"
                    animate='animate'
                    variants={iconVariants(4)}
                    className="p-4"
                >
                    <SiFirebase className='text-7xl text-yellow-500' />
                </motion.div>

            </motion.div>
        </div>
    )
}

export default Technologies;