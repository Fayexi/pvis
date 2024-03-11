<template>
  <div>
    <div class="row justify-center">
      <div class="col-8">
        <div style="width: 100%" separator="none" class="no-cell-padding">
          <tr style="width: 100%">
            <td rowspan="2" class="tcellTop" style="width: 180px">
              <div class="small-img-container">
                <q-img
                  sizes="20px"
                  shadow-3
                  src="~assets/images/chr_logo.png"
                  spinner-color="white"
                />
              </div>
            </td>
            <td colspan="2" class="tcellTop" style="width: 695px">
              <div class="text-center text-h5">
                COMMISSION ON HUMAN RIGHTS TRAVEL ORDER
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2" class="tcellTop text-center text-h6">
              Prevention Cluster
            </td>
          </tr>
        </div>
        <div
          style="width: 100%; margin-top: 30px"
          separator="none"
          class="no-cell-padding"
        >
          <tr>
            <td class="tcell" style="width: 500px; padding: 2px">
              <strong> DATE: </strong> 20-24 November 2023
            </td>
            <td class="tcell" style="width: 500px; padding: 2px">
              <strong> TRAVEL ORDER NO.: </strong> PREV-TO-14K23-013
            </td>
          </tr>
          <tr>
            <td colspan="2" class="tcell">
              <strong> DESTINATION:</strong> Gems Hotel and Conference Center,
              Antipolo Rizal
            </td>
          </tr>
          <tr>
            <td colspan="2" class="tcell">
              <strong> DESTINATION:</strong> Gems Hotel and Conference Center,
              Antipolo Rizal
            </td>
          </tr>
          <tr>
            <td class="tcell">
              <strong> DEPARTURE DATE: </strong> 20 November 2023
            </td>
            <td class="tcell">
              <strong> RETURN DATE: </strong> 24 November 2023
            </td>
          </tr>
        </div>
        <div style="width: 100%" separator="none" class="no-cell-padding">
          <tr style="width: 100%">
            <td class="tcell text-center" style="width: 360px">
              <strong> NAME </strong>
            </td>
            <td class="tcell text-center" style="width: 250px">
              <strong> DESIGNATION </strong>
            </td>
            <td class="tcell text-center" style="width: 250px">
              <strong> OFFICE </strong>
            </td>
          </tr>
          <tr>
            <td class="tcell">ATTY. JULIE ANN B. REGALADO</td>
            <td class="tcell">OFFICER-IN-CHARGE</td>
            <td class="tcell">PREVENTION CLUSTER</td>
          </tr>
          <tr>
            <td class="tcell">ATTY. JULIE ANN B. REGALADO</td>
            <td class="tcell">OFFICER-IN-CHARGE</td>
            <td class="tcell">PREVENTION CLUSTER</td>
          </tr>
          <tr>
            <td class="tcell">ATTY. JULIE ANN B. REGALADO</td>
            <td class="tcell">OFFICER-IN-CHARGE</td>
            <td class="tcell">PREVENTION CLUSTER</td>
          </tr>
          <tr>
            <td class="tcell">ATTY. JULIE ANN B. REGALADO</td>
            <td class="tcell">OFFICER-IN-CHARGE</td>
            <td class="tcell">PREVENTION CLUSTER</td>
          </tr>
          <tr>
            <td class="tcell">ATTY. JULIE ANN B. REGALADO</td>
            <td class="tcell">OFFICER-IN-CHARGE</td>
            <td class="tcell">PREVENTION CLUSTER</td>
          </tr>
        </div>
        <div style="width: 100%" separator="none">
          <tr style="width: 100%">
            <td colspan="2" class="tcell" style="width: 1000px">
              <strong> REMARKS OR SPECIAL INSTRUCTIONS:</strong> <br />
              <div style="min-height: 40px" class="row justify-center">
                <div class="col-8"></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="tcell">
              <strong> DEPARTURE DATE: </strong> 20 November 2023
            </td>
            <td class="tcell">
              <strong> RETURN DATE: </strong> 24 November 2023
            </td>
          </tr>
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
<style>
.tcell {
  border: 1px solid black;
  padding: 5px;
}
.tcellTop {
  border: 1px solid black;
  /* height: 50px !important; */
}
.small-img-container {
  margin-left: 35px;
  padding: 5px;
  max-width: 120px; /* Adjust the width here */
}
.no-cell-padding .q-td,
.no-cell-padding .q-th {
  padding: 0; /* Remove padding from table cells */
}
</style>