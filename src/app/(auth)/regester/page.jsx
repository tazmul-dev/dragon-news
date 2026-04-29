'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';


const RegesterPage = () => {
    const {handleSubmit, register,  formState: { errors }} =useForm()
    
        const handalsingUpFunc = (data)=>{
          console.log(data)
    
        }
        console.log(errors)
    return (
       <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 '>
                   <div className='p-4 bg-white'>
                       <h1>Login your account</h1>
       
                       <form onSubmit={handleSubmit( handalsingUpFunc) }>
                           <fieldset className="fieldset">
                               <legend className="fieldset-legend">Name</legend>
                               <input {...register("name", { required:"Name feiled is required" })} type="text" className="input" placeholder="Type here email" />
                               
                           </fieldset>
                           {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                           <fieldset className="fieldset">
                               <legend className="fieldset-legend">Email</legend>
                               <input {...register("email", { required:"Email feiled is required" })} type="email" className="input" placeholder="Type here email" />
                               
                           </fieldset>
                           {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
       
                            <fieldset className="fieldset">
                               <legend className="fieldset-legend">password</legend>
                               <input {...register("password", { required:"password feiled is required" })} type="password" className="input" placeholder="Type here password" />
                           
                           </fieldset>
                           {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
       
                           <button className="btn w-full btn-neutral">submit</button>
                       </form>
                         <p> Dont’t Have An Account ? <Link className='text-red-400' href={"/regester"}>Register</Link></p>
                   </div>
                  
       
       
               </div>
    );
};

export default RegesterPage;