import { useEffect } from "react";

export default function SocialLogin() {


  const handleCallbackResponse = async (response) => {
     console.log(response);
  };

  useEffect(() => {
    if (window.google) {
      google.accounts.id.initialize({
        client_id: "YOUR_GOOGLE_CLIENT_ID",
        callback: handleCallbackResponse,
      });

      google.accounts.id.renderButton(
        document.getElementById("google-login-button"),
        {
          theme: "outline",
          size: "large",
          width: "100%",
          shape: "pill",
        }
      );
    }
  }, []);

  return (
    <div className="flex justify-center gap-2 mt-5 w-[100%]">
      <div id="google-login-button" className="w-[100%] flex justify-center"></div>
    </div>
  );
}
