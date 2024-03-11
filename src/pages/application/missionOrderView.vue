<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="row justify-center">
          <div class="col-2">
            <q-img
              shadow-3
              src="~assets/images/chr_logo.png"
              spinner-color="white"
              style="height: 200px; max-width: 200px"
            />
          </div>
        </div>
      </div>
      <div class="col-12 text-center text-amber-7">
        REPUBLIC OF THE PHILIPPINES
      </div>
      <div class="col-12 text-h6 text-center text-amber-7">
        COMMISSION ON HUMAN RIGHTS
      </div>
      <div class="col-12 text-h5 text-center text-amber-7">MiSSION ORDER</div>
      <div class="col-12 text-right" style="padding: 20px !important">
        M.O. No. __________________
      </div>
      <div class="col-12" style="padding: 20px !important">
        <div class="row justify-center">
          <div class="col-1 text-start"><strong> To :</strong></div>
          <div class="col-8">
            <table style="width: 100%">
              <tr>
                <td style="border-bottom: 2px black solid">
                  (name of the CHR Personnel)
                </td>
                <td style="border-bottom: 2px black solid">(Position)</td>
              </tr>
              <tr>
                <td style="border-bottom: 2px black solid">
                  (name of the CHR Personnel)
                </td>
                <td style="border-bottom: 2px black solid">(Position)</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div
        class="col-12"
        style="
          padding-left: 20px !important;
          padding-right: 20px !important;
          padding-top: 5px !important;
        "
      >
        <div class="row justify-center">
          <div class="col-1 text-start">
            <strong> Subject :</strong>
          </div>
          <div class="col-8">
            <strong>MONITORING OF THE HUMAN RIGHTS CONDITIONS OF PDLs</strong>
          </div>
        </div>
      </div>
      <div
        class="col-12"
        style="
          padding-left: 20px !important;
          padding-right: 20px !important;
          padding-top: 5px !important;
        "
      >
        <div class="row justify-center">
          <div class="col-1 text-start">
            <strong> Date :</strong>
          </div>
          <div class="col-8">
            <strong>(date the Mission Order is being issued)</strong>
          </div>
        </div>
      </div>
      <div class="col-12">
        <hr />
      </div>
      <div class="col-12" style="padding-top: 10px">
        <div class="row justify-center">
          <div class="col-4 text-right">
            Pursuant to the provision of Section 18, Article XIII of the
            Philippine
          </div>
        </div>
        <div class="row justify-center">
          <div class="col-5 text-left">
            <span>
              Constitution, and Section 3 of Executive Order No. 163, Series of
              1987, by the
            </span>
          </div>
        </div>
        <div class="row justify-center">
          <div class="col-6 text-left">
            &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp; President of the Philippines, you are hereby directed
            to proceed to:
          </div>
        </div>
      </div>
      <div
        class="col-12 text-center"
        style="border-bottom: 1px solid black; padding-top: 15px !important"
      >
        (place of deprivation of liberty)
      </div>
      <div class="col-12 text-center" style="padding-top: 20px">
        <div class="row justify-center">
          <div class="col-5 text-left">
            <span>
              &nbsp; &nbsp; &nbsp;on (date of visit) to monitor the human rights
              condition of the PDLs therein.
            </span>
          </div>
        </div>
      </div>
      <div class="col-12 text-center" style="padding-top: 15px">
        <div class="row justify-center">
          <div class="col-6">
            <span> Please submit report upon completion of this mission. </span>
          </div>
        </div>
      </div>
      <div class="col-12" style="padding-top: 30px">
        <div class="row justify-end">
          <div class="col-3 text-center">
            <span style="text-decoration: underline">
              (Signature over printed name)
            </span>
            <br />
            <strong> Approving Officer </strong>
          </div>
        </div>
      </div>
      <div class="col-12 text-center" style="padding-top: 40px">
        <div class="row justify-center">
          <div
            class="col-7 text-center text-amber-7"
            style="border-bottom: 1px solid"
          >
            <span> CHR ng lahat: Naglilingkod maging sino ka man </span>
          </div>
        </div>
        <div class="col-12 text-center" style="padding-top: 5px">
          <div class="row justify-center">
            <div class="col-7 text-amber-7">
              <span>
                Commonwealth Avenue, U.P. Complex, Diliman, Quezon City,
                Philippines 1101
              </span>
            </div>
          </div>
        </div>
        <div class="col-12 text-center text-amber-7" style="padding-top: 5px">
          <div class="row justify-center">
            <div class="col-8">
              <span> Tel. NOs. (02) 8294 8704 • (02) 8925 3886 </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-end">
      <div class="col-4" style="padding: 30px !important">
        <q-btn flat class="bg-green-5" size="sm" label="Approve" />&nbsp;
        <q-btn flat class="bg-red-5" size="sm" label="Decline" />&nbsp;
        <q-btn flat class="bg-blue-5" size="sm" label="Resched" />&nbsp;
        <q-btn flat class="bg-yellow-7" size="sm" label="Print" />
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const role = localStorage.getItem("role");
    return {
      role,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>