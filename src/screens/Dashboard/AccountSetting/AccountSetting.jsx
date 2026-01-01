import { useForm } from "react-hook-form";
import { useState } from "react";
import Sidebar from "@/component/Screenslayout/AccountSetting/AccountSettingSidebar";
import AccountInfoSection from "@/component/Screenslayout/AccountSetting/AccountInfoForm";
import InvestmentPreferencesSection from "@/component/Screenslayout/AccountSetting/InvestmentPreferencesForm";
import DashboardHeader from "@/component/layout/DashboardHeader/DashboardHeader";
import PersonalInfo from "@/component/Screenslayout/AccountSetting/PersonalInfo";
import ProfileImageSection from "@/component/Screenslayout/AccountSetting/ProfileImageSection";


export default function AccountSettings() {
  const [activeSection, setActiveSection] = useState("account");

  const form = useForm({
    defaultValues: {
      name: "Monir UX Designer",
      email: "moniruzzaman0917@gmail.com",
      phone: "+088 01876206538",
      risk: "",
      investmentType: "",
    },
  });

  const { handleSubmit, watch } = form;

  // ✅ profile completion logic
  const completion =
    watch("risk") && watch("investmentType") ? 100 : 60;

  const onSubmit = (data) => {
    console.log("Send to API:", data);
    // ONE API CALL HERE
  };

  return (

    <>
      <section className='pl-2.5 py-2 pr-1'>
        <DashboardHeader title={"Account Setting"} description={"Update your personal details and contact information"}></DashboardHeader>

        <div className="flex mt-6 justify-between gap-6">

          <div className="w-[65%]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=""
            >
              <ProfileImageSection></ProfileImageSection>
              {activeSection === "account" && (
                <AccountInfoSection form={form} />
              )}

              {activeSection === "preferences" && (
                <InvestmentPreferencesSection form={form} />
              )}

              <div className="mt-7 text-end">
                <button className="w-max bg-brandGreen font-para font-medium text-white py-3 px-5 ml-auto rounded-lg text-[15px]">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
          <div className="w-[30%]">
            <Sidebar
              active={activeSection}
              setActive={setActiveSection}
              completion={completion}
            />
          </div>

        </div>

      </section>
    </>
  );
}
