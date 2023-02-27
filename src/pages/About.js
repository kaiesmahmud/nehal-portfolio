import React from 'react';
//icons
// import {MdOutlineBadge,MdBadge} from 'react-icons/md'
import {SlBadge} from 'react-icons/sl'
const About = () => {
    return (
        <div className=' m-10 lg:m-20'>
            <section  className='mx-10 lg:mx-20 my-20 p-5 flex flex-col items-center lg:flex-row lg:justify-between '>
                <div className='w-[100%] lg:max-w-[50%] flex justify-center items-center '>
                    <img src='nehal.png' alt='Kaies Mahmud Nehal' className='rounded-[50%] w-[50%] max-w-[500px] border '/>
                </div>
                <div className='mt-10 lg:m-0 text-center lg:text-start lg:max-w-[50%]'>
                    {/* <h1 className='text-2xl font-extralight mb-4'>About Myself:</h1> */}
                    <p className='text-sm md:text-base lg:text-xl opacity-70 font-extralight'>I have been working as a Digital Marketer
                    for seven years. In my previous company, I
                    was appointed as the leader of many
                    marketing projects. Last year, I also
                    successfully developed strategies that
                    increased my clients conversion rate by
                    46%. The digital marketing world was
                    introduced to me when I was in high
                    school. My brother who was also a digital
                    marketer often brought me along to his
                    office to see how they work. From that
                    moment, I kept learning about this field,
                    entered college, graduated, and started
                    working as a digital marketer at my
                    brothers company, Wardiere Inc.
                    </p>
                </div>
                
            </section>
            <section>
                <h1 className='text-3xl font-extralight text-center mb-20'>Educational Qualification</h1>
                <div className='flex flex-wrap items-center justify-center gap-8'>
                    <div className='flex  items-center border  rounded w-[500px]'>
                        <div className='text-3xl lg:text-7xl  text-center p-6 lg:p-10'>
                            {/* <MdOutlineBadge/> */}
                            <SlBadge/>
                        </div>
                        <div className='p-5'>
                            <h2 className='text-xl lg:text-2xl font-extralight'>BSc in Computer Science & Engineering</h2>
                            <h3 className='text-base lg:text-xl font-extralight opacity-50'>City University</h3>
                            <h4 className='font-light opacity-50 text-sm'>November, 2021 to November, 2024</h4>
                            <h4 className='font-bold opacity-50 text-xs lg:text-sm'>CGPA: 3.50 (out of 4.00)</h4>
                        </div>
                    </div>
                    <div className='flex  items-center border  rounded w-[500px]'>
                        <div className='text-3xl lg:text-7xl  text-center p-6 lg:p-10'>
                            {/* <MdOutlineBadge/> */}
                            <SlBadge/>
                        </div>
                        <div className='p-5'>
                            <h2 className='text-xl lg:text-2xl font-extralight'>HSC in Science</h2>
                            <h3 className='text-base lg:text-xl font-extralight opacity-50'>Savar Govt College</h3>
                            <h4 className='font-light opacity-50 text-sm'>August, 2018 to November, 2020</h4>
                            <h4 className='font-bold opacity-50 text-xs lg:text-sm'>CGPA: 4.61 (out of 5.00)</h4>
                        </div>
                    </div>
                    <div className='flex  items-center border  rounded w-[500px]'>
                        <div className='text-3xl lg:text-7xl  text-center p-6 lg:p-10'>
                            {/* <MdOutlineBadge/> */}
                            <SlBadge/>
                        </div>
                        <div className='p-5'>
                            <h2 className='text-xl lg:text-2xl font-extralight'>SSC in Science</h2>
                            <h3 className='text-base lg:text-xl font-extralight opacity-50'>Gokul Nagar High School</h3>
                            <h4 className='font-light opacity-50 text-sm'>January, 2016 to January, 2018</h4>
                            <h4 className='font-bold opacity-50 text-xs lg:text-sm'>CGPA: 4.61 (out of 5.00)</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;