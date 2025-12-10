import { useEffect, useState } from "react";
import Spinloader from "@/component/Loader/Spinloader";

 function Preloader({ children }) {

  const [loading, setLoading] = useState(true);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHideLoader(true); 
      setTimeout(() => setLoading(false), 1000); 
    }, 1500);
  }, []);



  return (
    <>
      {/* ==== Preloader ==== */}
      {!loading && null}
      <Spinloader hide={hideLoader} />

      {/* ==== Page Content ==== */}
      <div
        className={`
          transition-opacity duration-700
          ${hideLoader ? "opacity-100" : "opacity-0"}
        `}
      >
        {children}
      </div>
    </>
  );
}

export default Preloader