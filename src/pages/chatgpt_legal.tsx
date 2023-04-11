import { useEffect } from "react";

const RedirectPage = () => {
  useEffect(() => {
    window.location.href =
      "https://github.com/TimeSurgeLabs/summarizer-chatgpt/blob/main/LICENSE";
  }, []);

  return null;
};

export default RedirectPage;
