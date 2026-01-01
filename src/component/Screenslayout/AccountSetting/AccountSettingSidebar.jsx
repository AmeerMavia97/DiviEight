import CompleteProfileCard from "@/component/Cards/ProfileComplete";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ active, setActive, completion }) {
  const navigate = useNavigate()
  const item = (key) =>
    `px-4 py-3 rounded-lg cursor-pointer text-sm font-medium
     ${active === key
      ? "bg-[#afafaf3b] text-brandGreen"
      : "text-gray-600 hover:bg-gray-100"
    }`;


  return (
    <div className="">


      <CompleteProfileCard></CompleteProfileCard>


     
      <div className="space-y-2 mt-14">
        <div
          className={item("account") }
          onClick={() => setActive("account")}
        >
          <h1 className="font-head font-medium text-[17px]">Account Information</h1>
        </div>

        <div
          className={item("preferences")}
          onClick={() => setActive("preferences")}
        >
          <h1 className="font-head font-medium text-[17px]">Investment Preferences</h1>
          
        </div>
         <div
          className={item("changesPassword")}
          onClick={()=>{navigate('/change-password')}}
        >
          <h1 className="font-head font-medium text-[17px]">Investment Preferences</h1>
          
        </div>
      </div>
    </div>
  );
}
