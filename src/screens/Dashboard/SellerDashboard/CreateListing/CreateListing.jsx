import React, { useState } from 'react'
import DashboardHeader from '@/component/layout/DashboardHeader/DashboardHeader'
import { useForm } from 'react-hook-form';
import PropertyDetails from '@/component/MultiStepForm/Steps/PropertyDetails';
import FeaturesAmenities from '@/component/MultiStepForm/Steps/FeaturesAmenities';
import Pricing from '@/component/MultiStepForm/Steps/Pricing';
import Photos from '@/component/MultiStepForm/Steps/Photos';
import Review from '@/component/MultiStepForm/Steps/Review';
import Stepper from '@/component/MultiStepForm/Stepper';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';


const CreateListing = () => {
    const [step, setStep] = useState(0);

    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const steps = [
        <PropertyDetails register={register} errors={errors} />,
        <FeaturesAmenities register={register} control={control} />,
        <Pricing register={register} />,
        <Photos register={register} />,
        <Review watch={watch} register={register} />,
    ];

    const onSubmit = (data) => {
        console.log("FINAL DATA", data);
    };


    return (
        <>
            <section className='p-2'>
                <DashboardHeader title={"Create New Listing"} description='List your property for fractional ownership'></DashboardHeader>

                <div className='mt-5'>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className=" mx-auto p-6 bg-white rounded-xl shadow"
                    >
                        <Stepper currentStep={step} setStep={setStep} />

                        <div>
                            {steps[step]}
                        </div>

                        <div className="flex justify-between mt-8">
                            {step > 0 && (
                                <button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    className="px-2 mt-2 font-para text-brandLight text-center justify-center rounded-[8px] gap-2.5 pr-5.5 flex py-1.5 text-[15px] font-[450] items-center bg-brandGreen  hover:bg-brandDark transition-all cursor-pointer"
                                >
                                    <span className=" rounded-full pl-1.5 py-1.5 text-brandLight">
                                        <ArrowLeft className="size-4.5" />
                                    </span> Back
                                </button>
                            )}

                            {step < steps.length - 1 ? (

                                <button type="button"
                                    onClick={() => setStep(step + 1)} className="px-2 mt-2 font-para text-brandLight text-center justify-center rounded-[8px] gap-2.5 pl-5 flex py-1.5 text-[15px] font-[450] items-center bg-brandGreen ml-auto hover:bg-brandDark transition-all cursor-pointer">
                                    Next Step
                                    <span className=" rounded-full px-1.5 py-1.5 text-brandLight">
                                        <ArrowUpRight className="size-5" />
                                    </span>
                                </button>

                            ) : (
                                <button type="submit" className=" mt-2 font-para text-brandLight text-center justify-center rounded-[8px] gap-2.5 px-5 flex py-2 text-[15px] font-[450] items-center bg-brandGreen ml-auto hover:bg-brandDark transition-all cursor-pointer">
                                    Publish Listing
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default CreateListing