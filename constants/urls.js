const BASE_URL = "http://localhost:5000/api";

const login = `${BASE_URL}/user/login`;
const signup = `${BASE_URL}/user/signup`;

const get_all_parking_lots_by_admin_user_id = `${BASE_URL}/admin/get_all_parking_lots_by_admin_user_id/`;

const get_all_parking_lot_addresses = `${BASE_URL}/admin/get_all_parking_lot_addresses`;

const add_parking_lot_address = `${BASE_URL}/admin/add_parking_lot_address`;

const add_parking_lot = `${BASE_URL}/admin/add_parking_lot`;

module.exports = {
  login: login,
  signup: signup,
  get_all_parking_lots_by_admin_user_id: get_all_parking_lots_by_admin_user_id,
  get_all_parking_lot_addresses: get_all_parking_lot_addresses,
  add_parking_lot_address: add_parking_lot_address,
  add_parking_lot: add_parking_lot,
};
