import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as userActions from "../../redux/actions/userActions";
function ListRecordedPage() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userListReducer);

  useEffect(() => {
    dispatch(userActions.getUserList());
  }, [dispatch]);

  return (
    <div>
      <table className="table table-sm table-striped">
        <thead className="thead-light">
          <tr>
            <th>#</th>
            <th>İsim</th>
            <th>Soyisim</th>
            <th>Kan Grubu</th>
            <th>Ülke Kodu</th>
            <th>Telefon Numarası</th>
            <th>Şehir</th>
            <th>Adres</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.lastName}</td>
              <td>{user.bloodGroup}</td>
              <td>{user.phoneCountryCode}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.city}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <a
        href="/"
        type="button"
        className="btn btn-outline-danger"
        style={{ marginLeft: 20 }}
      >
        Geri
      </a>
    </div>
  );
}

export default ListRecordedPage;
