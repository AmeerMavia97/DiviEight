import React, { useState } from 'react'
import DashboardHeader from '@/component/layout/DashboardHeader/DashboardHeader'
import { useForm } from 'react-hook-form';
import PropertyDetails from '@/component/MultiStepForm/Steps/PropertyDetails';
import FeaturesAmenities from '@/component/MultiStepForm/Steps/FeaturesAmenities';
import Pricing from '@/component/MultiStepForm/Steps/Pricing';
import Photos from '@/component/MultiStepForm/Steps/Photos';
import Review from '@/component/MultiStepForm/Steps/Review';
import Stepper from '@/component/MultiStepForm/Stepper';


const CreateListing = () => {
    const [step, setStep] = useState(0);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const steps = [
        <PropertyDetails register={register} errors={errors} />,
        <FeaturesAmenities register={register} />,
        <Pricing register={register} />,
        <Photos register={register} />,
        <Review watch={watch} />,
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

                        {steps[step]}

                        <div className="flex justify-between mt-8">
                            {step > 0 && (
                                <button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    className="btn-secondary"
                                >
                                    Back
                                </button>
                            )}

                            {step < steps.length - 1 ? (
                                <button
                                    type="button"
                                    onClick={() => setStep(step + 1)}
                                    className="btn-primary ml-auto"
                                >
                                    Next Step →
                                </button>
                            ) : (
                                <button type="submit" className="btn-primary ml-auto">
                                    Submit
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