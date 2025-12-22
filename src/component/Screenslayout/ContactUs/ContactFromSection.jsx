import IntroBlock from '@/component/layout/IntroBlock/IntroBlock';
import { Input } from '@/component/ui/Input'
import Select from '@/component/ui/Select'
import { Textarea } from '@/component/ui/TextArea';
import { Clock5, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react'
import { useForm } from 'react-hook-form';
import Map from "@/assets/Banners/Map.png"

const ContactFromSection = () => {

    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors },
    } = useForm({
        mode: "onSubmit",
    });


    return (
        <>
            <section className='grid grid-cols-2 px-16 pt-7 pb-28 dark:bg-brandDark '>
                <div className='flex flex-col gap-10 py-4'>

                    <IntroBlock
                        title={<>
                            Have questions or  <br />
                        </>}
                        highlight="Need Assistance?"
                        description="Browse through a curated selection of properties tailored
                        to your needs. Find your dream home, investment, or rental today."
                        align="left"
                    />

                    <div className="w-full flex flex-col gap-3">
                        <p className="text-[16px] text-brandDark dark:text-brandLight font-para font-semibold text-brandDark">
                            You can also Contact Us via
                        </p>

                        <div className="flex flex-wrap gap-10">

                            {/* Email */}
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full border flex items-center justify-center">
                                    <Mail size={16} className=" text-brandDark dark:text-brandLight " />
                                </div>
                                <span className="text-sm font-medium font-para  text-brandDark dark:text-brandLight">
                                    info@gmail.com
                                </span>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full border flex items-center justify-center">
                                    <Phone size={16} className=" text-brandDark dark:text-brandLight" />
                                </div>
                                <span className="text-sm font-medium font-para  text-brandDark dark:text-brandLight">
                                    +1 123456789
                                </span>
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-wrap gap-8'>
                        <div className="flex flex-col gap-2 w-[40%]">
                            <div className='flex items-center gap-2 text-[16px] font-para font-semibold  text-brandDark dark:text-brandLight' >
                                <MapPin strokeWidth={2} size={20} className=" text-brandDark dark:text-brandLight" />
                                Location
                            </div>
                            <span className="text-[15px] font-[400]  font-para  text-brandDark dark:text-brandLight">
                                4567 Elm Street, Suite 301, Greenfield, TX, 78901
                            </span>
                        </div>
                        <div className="flex flex-col gap-2 w-[50%]">
                            <div className='flex items-center gap-2 text-[16px] font-para font-semibold  text-brandDark dark:text-brandLight' >
                                <Clock5 strokeWidth={2} size={20} className=" text-brandDark dark:text-brandLight" />
                                Business Hours
                            </div>
                            <span className="text-[15px] font-[400] w-[100%] font-para  text-brandDark dark:text-brandLight">
                                Monday - Friday, <br /> 9:00 AM - 6:00 PM
                            </span>
                        </div>
                    </div>



                </div>
                <div className='flex justify-end      '>
                    <form className="w-[85%] py-10 px-10 rounded-[8px] bg-[#e8e8e8a0] dark:bg-[#121212] space-y-3">
                        {/* First & Last Name */}
                        <Input
                            label="Full Name"
                            name="firstName"
                            placeholder="Enter First Name"
                            register={register}
                        />

                        {/* Email */}
                        <Input
                            label="Email"
                            name="email"
                            placeholder="info@gmail.com"
                            register={register}
                            type="email"
                        />
                        <div className='grid grid-cols-2 gap-3'>
                            {/* Phone */}
                            <Input
                                label="Phone Number"
                                name="phoneNumber"
                                placeholder="+1 123456789"
                                type="tel"
                                register={register}

                            />

                            <Input
                                label="Subject"
                                name="subject"
                                placeholder="Enter the subject"
                                register={register}
                            />
                        </div>

                        <Textarea
                            label="Message"
                            name="message"
                            placeholder="Write your message..."
                            register={register}
                        />


                        {/* SUBMIT */}
                        <button
                            type="submit"
                            className="mt-2 w-full h-12 rounded-lg font-para font-semibold transition
              bg-brandGreen text-white hover:bg-brandDark2
              disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {!"loading" ? "Submiting..." : "Submit"}
                        </button>
                    </form>
                </div>


            </section>


        </>
    )
}

export default ContactFromSection