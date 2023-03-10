import React from 'react'; 
// import img from  '../../../asset/aboute-img/image-1.jfif';
import img from  '../../../assets/aboute-img/image-1.jfif';

const AbouteSec1 = () => {
    return (
        <div className='bg-white py-20'>
          <div className='grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto gap-5'>
          <div>
            <div className='mb-5'>
                <h3 className='text-3xl font-bold mb-2'>Who We Are</h3>
                <p>Tmply dummy text of the printing and typesetting indust Lorem Ipsum has been theindustry's standard dummy text ever since simply dummy text of the printing and etypesetting industry. Lorem Ipsum has been the induststandard dummy text ever since en an unknown printer took a galley of type scrambledmaining.</p>
            </div>
            <div>
            <h3 className='text-3xl font-bold mb-2'>What We Do</h3>
                <p>Tmply dummy text of the printing and typesetting indust Lorem Ipsum has been theindustry's standard dummy text ever since simply dummy text of the printing and etypesetting industry. Lorem Ipsum has been the induststandard dummy text ever since en an unknown printer took a galley of type scrambledmaining.</p>
            </div>
           </div>
           <div className='flex justify-center items-center'>
            <div>
                <img src={img} className="w-full h-96" alt="" />
            </div>
           </div>
          </div>
        </div>
    );
};

export default AbouteSec1;