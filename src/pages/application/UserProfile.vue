<template>
  <div>
    <div class="form-main">
      <q-card>
        <q-card-section class="bg-amber-7">
          <div class="text-h6">
            <q-icon name="person" size="sm" />
            <span class="card-header-label">
              User Profile
            </span>
          </div>
          <!-- <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%); z-index: 100">
            <q-btn fab icon="add" color="green-5" @click="onCreatePod"/>
          </div> -->
        </q-card-section>

        <q-card-section style="padding-top: 0; padding-bottom: 0">
        </q-card-section>
          
        <q-card-section>
          <div class="row q-col-gutter-md q-mt-md">
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <q-card class="my-card q-pa-md" bordered>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />

                <q-card-section>
                  <!-- <q-btn
                    fab
                    color="primary"
                    icon="place"
                    class="absolute"
                    style="top: 0; right: 12px; transform: translateY(-50%);"
                  /> -->

                  <div class="row no-wrap items-center">
                    <div class="col text-h6 ellipsis">
                      Juan Dela Cruz
                    </div>
                    <!-- <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                      <q-icon name="place" />
                      250 ft
                    </div> -->
                  </div>

                  
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <div class="text-subtitle1">
                    Regional Officer
                  </div>
                  <!-- <div class="text-caption text-grey">
                    Small plates, salads & sandwiches in an intimate setting.
                  </div> -->
                </q-card-section>

                <q-separator />

                <q-card-actions>
                  <q-btn flat round icon="update" />
                  <q-btn flat color="primary">
                    Update
                  </q-btn>
                </q-card-actions>
              </q-card>
            </div>
            <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <q-card>
                <q-card-section class="">
                  <div class="text-h6">
                    <q-icon name="person" size="sm" />
                    <span class="card-header-label">
                      Update Details
                    </span>
                  </div>
                </q-card-section>
                <q-separator></q-separator>
                <q-card-section>
                  <div class="row q-col-gutter-md">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <q-input dense outlined v-model="user_email" label="Email"/>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <q-input
                        outlined
                        dense
                        label="Current Password"
                        v-model="oldPassword"
                        :type="showOldPassword ? 'text' : 'password'"
                        :rules="[
                          (val) =>
                            (val && val.length > 0) || 'Old Password is required',
                        ]"
                        autocomplete
                      >
                        <template v-slot:prepend>
                          <q-icon class="" name="lock"></q-icon>
                        </template>
                        <template v-slot:append>
                          <q-icon
                            :name="`visibility${showOldPassword ? '_off' : ''}`"
                            class="cursor-pointer"
                            @click="setShowOldPassword(!showOldPassword)"
                          >
                            <q-tooltip-plain
                              :message="`${
                                showOldPassword ? 'Hide' : 'Show'
                              } password`"
                            />
                          </q-icon>
                        </template>
                      </q-input>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <q-input
                        outlined
                        dense
                        label="New Password"
                        v-model="newPassword"
                        :type="showNewPassword ? 'text' : 'password'"
                        :rules="[
                          (val) =>
                            (val && val.length > 0) || 'New password is required',
                          (val) =>
                            (val && is_8_char_length(val)) ||
                            'Password must be at least 8 characters',
                          (val) =>
                            (val && has_uppercase(val)) ||
                            'Password must be at least 1 uppercase letter',
                          (val) =>
                            (val && has_lowercase(val)) ||
                            'Password must be at least 1 lowercase letter',
                          (val) =>
                            (val && has_number(val)) ||
                            'Password must be at least 1 number',
                          (val) =>
                            (val && has_special_char(val)) ||
                            'Password must be at least 1 special character',
                        ]"
                        autocomplete
                      >
                        <template v-slot:prepend>
                          <q-icon class="text-tlci-blue-1" name="lock"></q-icon>
                        </template>
                        <template v-slot:append>
                          <q-icon
                            :name="`visibility${showNewPassword ? '_off' : ''}`"
                            class="cursor-pointer"
                            @click="setShowNewPassword(!showNewPassword)"
                          >
                            <q-tooltip-plain
                              :message="`${
                                showNewPassword ? 'Hide' : 'Show'
                              } password`"
                            />
                          </q-icon>
                        </template>
                      </q-input>

                      <ul class="password-requirements">
                        <li
                          :class="`${
                            is_8_char_length(newPassword || '') ? 'pass' : 'failed'
                          }`"
                        >
                          Password must be at least 8 characters in length
                        </li>
                        <li
                          :class="`${
                            has_uppercase(newPassword || '') ? 'pass' : 'failed'
                          }`"
                        >
                          Password must contain a minimum of 1 upper case letter [A-Z]
                        </li>
                        <li
                          :class="`${
                            has_lowercase(newPassword || '') ? 'pass' : 'failed'
                          }`"
                        >
                          Password must contain a minimum of 1 lower case letter [a-z]
                        </li>
                        <li
                          :class="`${
                            has_number(newPassword || '') ? 'pass' : 'failed'
                          }`"
                        >
                          Password must contain a minimum of 1 numeric character [0-9]
                        </li>
                        <li
                          :class="`${
                            has_special_char(newPassword || '') ? 'pass' : 'failed'
                          }`"
                        >
                          Password must contain a minimum of 1 special character
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <q-input
                        outlined
                        dense
                        label="Confirm Password"
                        v-model="confirmPassword"
                        :type="showConfirmPassword ? 'text' : 'password'"
                        :rules="[
                          (val) => val === newPassword || 'Password not match',
                          (val) =>
                            (val && val.length > 0) || 'Confirm Password is required',
                        ]"
                        autocomplete
                      >
                        <template v-slot:prepend>
                          <q-icon class="text-tlci-blue-1" name="lock"></q-icon>
                        </template>
                        <template v-slot:append>
                          <q-icon
                            :name="`visibility${showConfirmPassword ? '_off' : ''}`"
                            class="cursor-pointer"
                            @click="setShowConfirmPassword(!showConfirmPassword)"
                          >
                            <q-tooltip-plain
                              :message="`${
                                showConfirmPassword ? 'Hide' : 'Show'
                              } password`"
                            />
                          </q-icon>
                        </template>
                      </q-input>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
          <div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>

export default {
    data: () => ({
      
      oldPassword: "",
      showOldPassword: false,

      newPassword: "",
      showNewPassword: false,

      confirmPassword: "",
      showConfirmPassword: false,
    }),

    computed: {
      
    },

    watch: {
      
    },
    
    methods: {
      async initApp() {
        
      }, 

      setShowOldPassword(toggle) {
        this.showOldPassword = toggle;
      },

      setShowNewPassword(toggle) {
        this.showNewPassword = toggle;
      },

      setShowConfirmPassword(toggle) {
        this.showConfirmPassword = toggle;
      },

      is_8_char_length(val) {
        return val && val.length >= 8;
      },

      has_special_char(val) {
        return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(val);
      },

      has_number(val) {
        return /[0-9]/.test(val);
      },

      has_uppercase(val) {
        return /[A-Z]/.test(val);
      },

      has_lowercase(val) {
        return /[a-z]/.test(val);
      },
    },

    mounted() {
      this.initApp();
    },
}
</script>
<style>
  .text-wrap-normal {
      white-space: normal;
      word-wrap: break-word;
    }
</style>