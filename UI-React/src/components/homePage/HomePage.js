import React from "react";
import { useSelector } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import Alertify from "../../utils/Alert";

function HomePage() {
  const addedUserStatus = useSelector((state) => state.addUserReducer);
  return (
    <div className="container">
      <a
        href="/adduser"
        type="button"
        className="btn btn-secondary btn-lg btn-block"
      >
        Kullanıcı kaydetmek için tıklayınız
      </a>
      <a
        href="/listuser"
        type="button"
        className="btn btn-secondary btn-lg btn-block"
      >
        Kayıtlı kullanıcıları görmek için tıklayınız
      </a>
      {addedUserStatus && (
        <ToastProvider>
          <Alertify content={"Kullanıcı başarıyla eklendi"} appearance ={true} />
        </ToastProvider>
      )}
    </div>
  );
}

export default HomePage;
