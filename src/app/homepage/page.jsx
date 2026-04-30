import Banner from '@/Component/homepage/banner';
import Marque from '@/Component/homepage/marque';
import React from 'react';

const HomePage = () => {
    return (
        <div className='contain max-w-400 mx-auto bg-slate-300'>
        
            <Banner/>
            <Marque></Marque>
        </div>
    );
};

export default HomePage;