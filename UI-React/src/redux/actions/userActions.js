import * as actionTypes from "./actionTypes";
import * as httpHelper from "../../utils/HttpHelper";
import { history } from "../../utils/history";

export function getUserListSuccess(users) {
  return { type: actionTypes.GET_USER_LIST, payload: users };
}

export function addUserSuccess(data) {
  return { type: actionTypes.ADD_USER_SUCCESS, payload: data };
}

export function addUserFailure(data) {
  return { type: actionTypes.ADD_USER_FAILURE, payload: data };
}

export function getUserList() {
  return function (dispatch) {
    return getUserListApi()
      .then(
        (result) => {
          if (result) {
            dispatch(getUserListSuccess(result));
          } else {
            console.log("Not get");
          }
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((error) => {
        throw error;
      });
  };
}

export function addUser(data) {
  return function (dispatch) {
    return addUserApi(data)
      .then(
        (response) => {
          if (response.ok) {
            dispatch(addUserSuccess(response));
            console.log("Kayıt Başarılı");
            history.push("/")
          } else {
            dispatch(addUserFailure(true));
            console.log("Kayıt Başarısız");
          }
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((error) => {
        throw error;
      });
  };
}

export function addUserApi(data) {
  let endPoint = "api/users/add";
  return httpHelper.httpPost(endPoint, data);
}

export function getUserListApi() {
  let endPoint = "api/users/getall";
  return httpHelper.httpGet(endPoint);
}
