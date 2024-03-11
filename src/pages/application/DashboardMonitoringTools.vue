<template>
    <div>
      <div class="form-main">
        <q-card>
          <q-card-section class="bg-amber-7">
            <div class="text-h6">
              <q-icon name="dashboard" size="sm" />
              <span class="card-header-label"> Dashboard </span>
            </div>
            <!-- <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%); z-index: 100">
              <q-btn fab icon="add" color="green-5" @click="onCreatePod"/>
            </div> -->
          </q-card-section>
  
          <q-card-section style="padding-top: 0; padding-bottom: 0">
          </q-card-section>
  
          <q-card-section>
            <div class="row q-col-gutter-md">
              <div class="col-lg-6 col-md-6 col-sm-4 col-xs-12">
                <q-card class="dashboard-card bg-green-6 text-white">
                  <q-item>
                    <q-item-section avatar>
                      <q-avatar>
                        <q-icon name="event_available" size="lg" />
                      </q-avatar>
                    </q-item-section>
                    <q-item-section class="q-my-xs">
                      <q-item-label>Compliance</q-item-label>
                      <q-item-label class="text-h6 text-weight-bolder">
                        15
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-card>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-4 col-xs-12">
                <q-card class="dashboard-card bg-red-6 text-white">
                  <q-item>
                    <q-item-section avatar>
                      <q-avatar>
                        <q-icon name="event_available" size="lg" />
                      </q-avatar>
                    </q-item-section>
                    <q-item-section class="q-my-xs">
                      <q-item-label>Non-Compliance</q-item-label>
                      <q-item-label class="text-h6 text-weight-bolder">
                        3
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-card>
              </div>
              <!-- <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <q-card class="dashboard-card bg-indigo-6 text-white">
                  <q-item>
                    <q-item-section avatar>
                      <q-avatar>
                        <q-icon name="event_available" size="lg" />
                      </q-avatar>
                    </q-item-section>
                    <q-item-section class="q-my-xs">
                      <q-item-label>endorse by RD</q-item-label>
                      <q-item-label class="text-h6 text-weight-bolder">
                        10
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-card>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <q-card class="dashboard-card bg-blue-10 text-white">
                  <q-item>
                    <q-item-section avatar>
                      <q-avatar>
                        <q-icon name="event_available" size="lg" />
                      </q-avatar>
                    </q-item-section>
                    <q-item-section class="q-my-xs">
                      <q-item-label>endorse by VD</q-item-label>
                      <q-item-label class="text-h6 text-weight-bolder">
                        10
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-card>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <q-card class="dashboard-card bg-yellow-10 text-white">
                  <q-item>
                    <q-item-section avatar>
                      <q-avatar>
                        <q-icon name="event_available" size="lg" />
                      </q-avatar>
                    </q-item-section>
                    <q-item-section class="q-my-xs">
                      <q-item-label>endorse by PMO</q-item-label>
                      <q-item-label class="text-h6 text-weight-bolder">
                        10
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-card>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <q-card class="dashboard-card bg-brown-6 text-white">
                  <q-item>
                    <q-item-section avatar>
                      <q-avatar>
                        <q-icon name="event_available" size="lg" />
                      </q-avatar>
                    </q-item-section>
                    <q-item-section class="q-my-xs">
                      <q-item-label>endorse by OIC</q-item-label>
                      <q-item-label class="text-h6 text-weight-bolder">
                        10
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-card>
              </div> -->
            </div>
  
            <div>
              <div class="row q-col-gutter-md" style="margin-top: 10px">
                <div class="col-lg-6 col-md-6 col-sm-4 col-xs-12">
                  <strong> Compliance</strong>
                  <MonitoringGraph
                    style="border: 1px solid gray; border-radius: 10px"
                  ></MonitoringGraph>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-4 col-xs-12">
                  <strong> Non-Compliance </strong>
                  <MonitoringGraph
                    style="border: 1px solid gray; border-radius: 10px"
                  ></MonitoringGraph>
                </div>
                <!-- <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <strong> endorse by RD</strong>
                  <MonitoringGraph
                    style="border: 1px solid gray; border-radius: 10px"
                  ></MonitoringGraph>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <strong>endorse by VD</strong>
                  <MonitoringGraph
                    style="border: 1px solid gray; border-radius: 10px"
                  ></MonitoringGraph>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <strong>endorse by PMO</strong>
                  <MonitoringGraph
                    style="border: 1px solid gray; border-radius: 10px"
                  ></MonitoringGraph>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <strong>endorse by OIC</strong>
                  <MonitoringGraph
                    style="border: 1px solid gray; border-radius: 10px"
                  ></MonitoringGraph>
                </div> -->
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </template>
  
  <script>
  import MonitoringGraph from "src/pages/application/DashboardGraph/monitoringGraph.vue";
  export default {
    components: {
      MonitoringGraph,
    },
    data: () => ({}),
  
    computed: {},
  
    watch: {},
  
    methods: {
      async initApp() {},
    },
  
    mounted() {
      this.initApp();
    },
  };
  </script>
  <style>
  .text-wrap-normal {
    white-space: normal;
    word-wrap: break-word;
  }
  </style>