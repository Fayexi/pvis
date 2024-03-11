<template>
  <q-page class="flex flex-center">
    <div class="row shadow-3" style="width: 800px">
      <div
        class="col-md-5 col-lg-5 col-xs-12 col-sm-12 bg-light-blue-6 q-pa-lg text-white"
      >
        <div class="col">
          <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
            <q-img
              shadow-3
              src="~assets/images/chr_logo.png"
              spinner-color="white"
              style="height: 200px; max-width: 200px"
            />
          </div>
          <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12 q-mt-xl">
            <p class="text-h5">
              Places of Deprivation of Liberty Visitation Information System
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-7 col-lg-7 col-xs-12 col-sm-12 q-pa-lg bg-white">
        <p class="text-h5">Login</p>
        <div class="row q-col-gutter-sm q-mt-sm">
          <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
            <q-input
              bottom-slots
              v-model="username"
              label="Username"
              type="text"
              class="bg-white-inner-field"
            >
            </q-input>
          </div>
          <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
            <q-input
              bottom-slots
              v-model="password"
              label="Password"
              type="password"
              class="bg-white-inner-field"
            >
            </q-input>
          </div>
          <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
            <!-- Don't have an account yet ? <q-btn flat label="Register" class="text-primary"/> -->
          </div>
          <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12 q-mt-md">
            <q-btn
              class="full-width"
              unelevated
              rounded
              color="primary"
              label="Login"
              @click="onLoginAccount"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import router from "src/router";
import { defineComponent } from "vue";
import Swal from "sweetalert2";

export default {
  data: () => ({
    email: "",
    username: "",
    password: "",
    showPassword: false,
    rememberMe: false,
  }),

  methods: {
    setShowPassword(toggle) {
      this.showPassword = toggle;
    },

    async onLoginAccount() {
      var isLogin = false;
      if (this.username == "focal_person" && this.password == "password") {
        isLogin = true;
        localStorage.setItem("role", "FOCAL");
      } else if (
        this.username == "regional_director" &&
        this.password == "password"
      ) {
        isLogin = true;
        localStorage.setItem("role", "RD");
      } else if (
        this.username == "user_director" &&
        this.password == "password"
      ) {
        isLogin = true;
        localStorage.setItem("role", "DIRECTOR"); // to change redirection
      } else if (this.username == "user_staff" && this.password == "password") {
        isLogin = true;
        localStorage.setItem("role", "STAFF"); // to change redirection
      } else if (this.username == "user_oic" && this.password == "password") {
        isLogin = true;
        localStorage.setItem("role", "OIC");
      } else if (this.username == "user_pmo" && this.password == "password") {
        isLogin = true;
        localStorage.setItem("role", "PMO");
      } else if (this.username == "user_ed" && this.password == "password") {
        isLogin = true;
        localStorage.setItem("role", "ED");
      } else if (
        this.username == "user_chairperson" &&
        this.password == "password"
      ) {
        isLogin = true;
        localStorage.setItem("role", "CHAIRPERSON");
      } else if (
        this.username == "vt_leader" &&
        this.password == "password"
      ) {
        isLogin = true;
        localStorage.setItem("role", "VT_LEADER");
      } else if (
        this.username == "chief_investigator" &&
        this.password == "password"
      ) {
        isLogin = true;
        localStorage.setItem("role", "CI");
      } else if (
        this.username == "division_chief" &&
        this.password == "password"
      ) {
        isLogin = true;
        localStorage.setItem("role", "DC");
      } else if (
        this.username == "prevention_oic" &&
        this.password == "password"
      ) {
        isLogin = true;
        localStorage.setItem("role", "OIC_PC");
      }

      console.log(isLogin);
      if (isLogin) {
        this.$router.push({
          path: "/app/dashboard-main",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid Credentials.",
          confirmButtonText: "OK",
          allowOutsideClick: false,
        });
      }
    },

    onValidationError() {
      //
    },
  },

  mounted() {
    localStorage.removeItem("role");
  },
};
</script>

<style lang="scss">
</style>