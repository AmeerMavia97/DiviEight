import AppPromotionBlock from '@/component/AppPromotionBlock/AppPromotionBlock'
import AboutSection from '@/component/Screenslayout/Home/AboutSection'
import HeroSection from '@/component/Screenslayout/Home/HeroSection'
import PropertyListings from '@/component/Screenslayout/Home/PropertyListings'
import SmartMoveSection from '@/component/Screenslayout/Home/SmartMoveSection'
import StakeholderBenefits from '@/component/Screenslayout/Home/StakeholderBenefits'
import WhyUsSection from '@/component/Screenslayout/Home/WhyUsSection'
import WorkflowSteps from '@/component/Screenslayout/Home/WorkflowSteps'
import React from 'react'

const Home = () => {
  return (
    <>
    <section>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <StakeholderBenefits></StakeholderBenefits>
      <PropertyListings></PropertyListings>
      <WhyUsSection></WhyUsSection>
      <AppPromotionBlock></AppPromotionBlock>
      <WorkflowSteps></WorkflowSteps>
      {/* <FaqBlock></FaqBlock> */}
      <SmartMoveSection></SmartMoveSection>
    </section>
    </>
  )
}

export default Home