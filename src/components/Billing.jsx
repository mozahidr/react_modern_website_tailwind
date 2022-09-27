import React from 'react';
import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

export const Billing = () => (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* background gradient */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden" /> 
        billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Leveraging on core strengths in IT, corporate governance and service excellence, 
          Eastern Bank Limited, better known for its acronym EBL, has emerged as one of the
           most valuable financial institutions in Bangladesh. The guiding principle of EBL is 
           to meet new challenges of contemporary market place and at the same time is focused on 
           the power of personal touch and relationship banking
        </p>
        <div className='flex flex-row fle-wrap sm:mt-10 mt-6'>
            <img src={apple} alt="appStore" className="w-[128px] h-[42px] object-contain 
            mr-5 cursor-pointer" />
            <img src={google} alt="google play store" className="w-[128px] h-[42px] object-contain
             cursor-pointer" />
        </div>

      </div>


    </section>
  )

