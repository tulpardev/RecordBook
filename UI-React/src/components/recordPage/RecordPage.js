import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import Alertify from "../../utils/Alert";
import * as userActions from "../../redux/actions/userActions";
function RecordPage() {
  const dispatch = useDispatch();
  const [addUserData, setAddUserData] = useState({
    name: "",
    lastName: "",
    bloodGroup: "",
    phoneCountryCode: "+90",
    phoneNumber: "",
    addressCity: "",
    address: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const addedUserStatus = useSelector((state) => state.addUserReducer);
  function handleChange(event) {
    const { name, value } = event.target;
    setAddUserData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  const handleSave = (event) => {
    event.preventDefault();
    setSubmitted(true);
    if (
      addUserData.name &&
      addUserData.lastName &&
      addUserData.phoneNumber &&
      addUserData.phoneCountryCode &&
      addUserData.bloodGroup &&
      addUserData.addressCity &&
      addUserData.address
    ) {
      dispatch(userActions.addUser(addUserData));
    }
  };

  return (
    <div>
      <form onSubmit={handleSave}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputName4">İsim</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={addUserData.name}
              onChange={handleChange}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              className={
                "form-control" +
                (submitted && !addUserData.name ? " is-invalid" : "")
              }
            />
            {submitted && !addUserData.name && (
              <div className="invalid-feedback">Boş alanları doldurunuz</div>
            )}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputLastName4">Soyisim</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={addUserData.lastName}
              onChange={handleChange}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              className={
                "form-control" +
                (submitted && !addUserData.lastName ? " is-invalid" : "")
              }
            />
            {submitted && !addUserData.lastName && (
              <div className="invalid-feedback">Boş alanları doldurunuz</div>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="input">Kan Grubu</label>
            <select
              id="inputBloodGroup"
              className="form-control"
              name="bloodGroup"
              defaultValue={addUserData.bloodGroup}
              onChange={handleChange}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              className={
                "form-control" +
                (submitted && !addUserData.bloodGroup ? " is-invalid" : "")
              }
            >
              {submitted && !addUserData.bloodGroup && (
                <div className="invalid-feedback">Boş alanları doldurunuz</div>
              )}
              <option>Seçiniz...</option>
              <option>A RH Pozitif</option>
              <option>0 RH Pozitif</option>
              <option>B RhD Pozitif</option>
              <option>AB RhD Pozitif</option>
              <option>A RhD Negatif</option>
              <option>0 RhD Negatif</option>
              <option>B RhD Negatif</option>
              <option>AB RhD Negatif</option>
            </select>
          </div>
          <div className="form-group col-md-1">
            <label htmlFor="input">Telefon </label>
            <select
              id="phoneCountryCode"
              className="form-control"
              name="phoneCountryCode"
              defaultValue={addUserData.phoneCountryCode}
              onChange={handleChange}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              className={
                "form-control" +
                (submitted && !addUserData.phoneCountryCode
                  ? " is-invalid"
                  : "")
              }
            >
              {submitted && !addUserData.phoneCountryCode && (
                <div className="invalid-feedback">Boş alanları doldurunuz</div>
              )}
              <option>+84</option>
              <option>+86</option>
              <option>+90</option>
              <option>+91</option>
              <option>+92</option>
              <option>+93</option>
              <option>+94</option>
              <option>+95</option>
              <option>+98</option>
              <option>+212</option>
              <option>+213</option>
              <option>+216</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="tel">Numarası</label>
            <input
              type="tel"
              className="form-control"
              id="telNumber"
              name="phoneNumber"
              value={addUserData.phoneNumber}
              onChange={handleChange}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              className={
                "form-control" +
                (submitted && !addUserData.phoneNumber ? " is-invalid" : "")
              }
            />
            {submitted && !addUserData.phoneNumber && (
              <div className="invalid-feedback">Boş alanları doldurunuz</div>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-2">
            <label htmlFor="inputCity">Şehir</label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              name="addressCity"
              value={addUserData.addressCity}
              onChange={handleChange}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              className={
                "form-control" +
                (submitted && !addUserData.addressCity ? " is-invalid" : "")
              }
            />
            {submitted && !addUserData.addressCity && (
              <div className="invalid-feedback">Boş alanları doldurunuz</div>
            )}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Adres</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            name="address"
            value={addUserData.address}
            onChange={handleChange}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            className={
              "form-control" +
              (submitted && !addUserData.address ? " is-invalid" : "")
            }
          />
          {submitted && !addUserData.address && (
            <div className="invalid-feedback">Boş alanları doldurunuz</div>
          )}
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Bilgileri Kaydet
            </label>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-outline-success">
            Bilgileri Kaydet
          </button>
          <a
            href="/"
            type="button"
            className="btn btn-outline-danger"
            style={{ marginLeft: 20 }}
          >
            Geri
          </a>
        </div>
      </form>
      {addedUserStatus && (
        <ToastProvider>
          <Alertify content={"Kullanıcı Eklenemedi"} appearance ={false} />
        </ToastProvider>
      )}
    </div>
  );
}

export default RecordPage;
