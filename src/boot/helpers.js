// import moment from "moment";
import { boot } from "quasar/wrappers";
// import jwt_decode from "jwt-decode";
// import { LocalStorage, Notify } from "quasar";
// import { show, hide } from "./spinner";

let $store = null;
let $router = null;

// const serialize = (res) => {
//   const response = {
//     data: res?.data,
//     status: res?.status || 0,
//     headers: res?.headers || null,
//   };
//   return response;
// };

// const toDateFormat = (d, f = "YYYY-MM-DD") => {
//   const date_formatted = d ? moment(d).format(f) : null;
//   return date_formatted;
// };

// const currency = (amount = 0) => {
//   let number = Number(amount) || 0;
//   let currencyFormat = new Intl.NumberFormat("en-PH", {
//     style: "currency",
//     currency: "PHP",
//   }).format(number);

//   return currencyFormat;
// };

// const toNumberAmount = (value = "") => {
//   if (typeof value === "number") return value;

//   let amount = value.trim().replace(/,/gi, "");
//   if (isNaN(amount)) {
//     return 0;
//   }

//   return Number(amount);
// };

// const toMoneyFormat = (money = 0, decimal = 0) => {
//   if (isNaN(+money)) return "Passing a non-numeric value";
//   let number = money;
//   if (decimal === 2) {
//     number = Number(number).toFixed(2);
//   }
//   return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
// };

// const decodeJwtToken = (token) => {
//   let decoded = null;
//   try {
//     decoded = jwt_decode(token);
//   } catch (error) {
//     console.log("decodeJwtToken-error: ", error);
//   }
//   return decoded;
// };

const getRoutePath = (params = {}) => {
  const route = $router.resolve({
    name: params.name || "",
    params: params.params || {},
    query: params.query || {},
  });
    
  return route.fullPath || "";
}

// const rules = {
//   required: val => {
//       let condition = false;
//       if (typeof val === 'number') {
//           condition = val > 0;
//       }
//       else if (Object.prototype.toString.call(val) === '[object Object]') {
//           condition = Object.keys(val).length > 0;
//       }
//       else if (typeof val === 'string') {
//           condition = val.length > 0 && val.trim() !== ''
//       }
//       return condition || 'This field is required.'
//   },
//   max: (val, max) => {
//       let number = Number(val);
//       return number <= max || 'Max. value of ' + max
//   },
//   min: (val, min) => {
//       let number = Number(val);
//       return number >= min || 'Min. value of ' + min
//   },
//   valid_email: (val) => {
//       let email = val || "";
//       return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi.test(email) || "Invalid email format.";
//   }
// }

export default boot(({ app, store, router }) => {
  $store = store;
  $router = router;
  app.config.globalProperties.$helpers = {
    // serialize: serialize,
    // decodeJwtToken: decodeJwtToken,
    getRoutePath: getRoutePath
  };

  // app.config.globalProperties.$date = {
  //   format: toDateFormat,
  // };

  // app.config.globalProperties.$currency = {
  //   format: currency,
  //   toNumberAmount: toNumberAmount,
  //   toMoneyFormat: toMoneyFormat,
  // };

  // app.config.globalProperties.$rules = rules;
});

export {
  // serialize,
  // toDateFormat,
  // currency,
  // toNumberAmount,
  // toMoneyFormat,
  getRoutePath,
  // rules,
};
