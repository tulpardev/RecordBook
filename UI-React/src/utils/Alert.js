import { useEffect } from "react";
import { useToasts } from "react-toast-notifications";

const Alertify = ({ content ,appearance}) => {
  const { addToast } = useToasts();
  let setAppearance = appearance;
  useEffect(() => {
    addToast(content, {
      appearance: setAppearance === true ? "success":"error",
      autoDismiss: true,
    });
  }, [addToast, content, setAppearance]);
};

export default Alertify;
