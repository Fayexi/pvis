<template>
  <q-layout view="hHh LpR fFf" class="bg-grey-1">
    <q-header
      elevated
      class="bg-light-blue-6 text-white q-py-xs"
      height-hint="58"
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
        />

        <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs">
          <q-icon :name="fabYoutube" color="red" size="28px" />
          <q-toolbar-title shrink class="text-weight-bold">
            CHR-PVIS
            <!-- <div v-for="(item, key) in linkItems" :key="key">
              {{  item?.route?.name }} ads
            </div> -->
          </q-toolbar-title>
        </q-btn>

        <q-space />

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-popup-proxy :offset="[0, 0]">
              <q-banner class="profile-context-menu">
                <div>
                  <div class="avatar-content text-center">
                    <q-avatar size="80px">
                      <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                    </q-avatar>
                  </div>
                  <div class="avatar-details text-center">
                    <p class="company-name">
                      <b> Juan Dela Cruz </b>
                    </p>
                    <p class="user-role">
                      <!-- Regional Officer -->
                      <!-- <span class="role-types">{{ userRoleTypes || "-" }}</span> -->
                    </p>
                  </div>

                  <q-separator class="q-my-md" />

                  <q-list>
                    <!-- <q-item clickable v-ripple
                          @click="viewProfile"
                        >
                          <q-item-section avatar>
                            <q-icon name="person" />
                          </q-item-section>
                          <q-item-section>View Profile</q-item-section>
                          <q-item-section avatar>
                            <q-icon color="green" name="keyboard_arrow_right" />
                          </q-item-section>
                        </q-item> -->

                    <q-item clickable v-ripple @click="onLogout">
                      <q-item-section avatar>
                        <q-icon name="power_settings_new" />
                      </q-item-section>
                      <q-item-section>Logout</q-item-section>
                      <q-item-section avatar>
                        <q-icon color="green" name="keyboard_arrow_right" />
                      </q-item-section>
                    </q-item>
                  </q-list>
                </div>
              </q-banner>
            </q-popup-proxy>
          </q-btn>
          <!-- <q-btn round flat>
                <q-avatar size="26px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>
                <q-tooltip>Account</q-tooltip>
            </q-btn> -->
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-2"
      :width="280"
    >
      <q-scroll-area class="fit">
        <q-img
          class="absolute-top bordered-bottom-tlc-blue-1"
          src="~assets/images/pvis_bg.jpg"
          style="height: 200px"
        >
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>

            <div class="account-name text-blue-grey-10 text-weight-bold">
              johndoe@email.com
            </div>
            <div
              class="account-email text-blue-grey-10 text-weight-bold text-weight-bold q-mt-xs"
            >
              JOHN DOE
            </div>
            <div class="account-email text-blue-grey-10 q-mt-xs text-italic">
              <!-- Regional Officer -->
              {{ roleName }}
            </div>
          </div>
        </q-img>
        <q-list style="margin-top: 200px">
          <div v-for="(item, key) in linkItems" :key="key">
            <q-item
              v-ripple
              clickable
              v-if="!item?.children?.length"
              @click="onNavigateRoute(item.route || {}, item.target || null)"
              :class="{ active:  item?.route?.name === currentRouteName }"
            >
              <q-item-section avatar>
                <q-icon :name="item.icon" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ item.label }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-expansion-item
              v-model="item.expand"
              :label="item.label"
              :expand="shouldExpand(item)"
              expand-icon="add"
              expanded-icon="remove"
              :icon="item.expand ? 'folder_open' : 'folder'"
              v-else
            >
              <q-item
                v-ripple
                clickable
                v-for="(i2, k2) in item.children"
                :key="k2"
                style="padding-left: 2rem"
                @click="onNavigateRoute(i2.route || {}, i2.target || null)"
                :class="{ active: i2.route.name === currentRouteName }"
              >
                <q-item-section avatar>
                  <q-icon color="black" :name="i2.icon" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ i2.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-expansion-item>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <div class="main-wrapper q-ma-md">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>
  
<script>
import { ref } from "vue";

export default {
  data: () => ({
    userRole: localStorage.getItem("role"),
    leftDrawerOpen: false,
    linkItems: [],
    roleName: "",
    roleDesc: [
      {
        name: "Focal Person",
        code: "FOCAL",
      },
      {
        name: "Regional Director",
        code: "RD",
      },
      {
        name: "Director",
        code: "DIRECTOR",
      },
      {
        name: "Staff",
        code: "STAFF",
      },
      {
        name: "OIC - Visitation Division",
        code: "OIC",
      },
      {
        name: "PMO",
        code: "PMO",
      },
      {
        name: "Executive Director",
        code: "ED",
      },
      {
        name: "Chairperson",
        code: "CHAIRPERSON",
      },
      {
        name: "Team Leader",
        code: "VT_LEADER",
      },
      {
        name: "Chief Investigator",
        code: "CI",
      },
      {
        name: "Division Chief",
        code: "DC",
      },
      {
        name: "OIC - Prevention Cluster",
        code: "OIC_PC",
      },
    ],
  }),

  computed: {
    routeName() {
      return this.$route.name || "";
    },
  },

  watch: {
    "$route.fullPath"() {
      this.initApp();
      this.currentRouteName = this.$route.name;
    },
    leftDrawerOpen(newValue) {
      this.leftDrawerModel = newValue;
    },
    leftDrawerModel(newValue) {
      this.$emit("update:leftDrawerOpen", newValue);
    },
  },

  methods: {
    shouldExpand(item) {
      return item.children.some(
        (child) => child.route.name === this.$route.name
      );
    },
    toggleLeftDrawer() {
      // leftDrawerOpen.value = !leftDrawerOpen.value;
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },

    async initApp() {
      let linkItems = [];
      // console.log("USER ROLE => ", this.userRole);

      linkItems = [
        {
          icon: "dashboard",
          label: "Dashboard",
          route: {
            name: "dashboard-main",
            path: "",
          },
          query: {
            //
          },
          // params: {
          //   form: "clean-up",
          // },
          module: "",
        },
        {
          icon: "menu_book",
          label: "Visitation Plan",
          // route: {
          //   name: "visitation-plan",
          //   path: "",
          // },
          children: [
            {
              icon: "menu_book",
              label: "Regional POD Visitation Plan",
              route: {
                name: "visitation-plan",
                path: "",
              },
              userRole: ["FOCAL", "RD", "DIRECTOR", "STAFF", "OIC"],
              module: "",
            },
            {
              icon: "account_tree",
              label: "Consolidated POD Visitation Plan",
              route: {
                name: "collated-pod-plan",
                path: "",
              },
              userRole: [ "PMO", "ED", "OIC", "CHAIRPERSON"],
              module: "",
            },
            {
              icon: "how_to_reg",
              label: "Approved POD Visitation Plan",
              route: {
                name: "approved-pod-plan",
                path: "",
              },
              userRole: [ "DIRECTOR", "STAFF", "PMO", "ED", "OIC", "CHAIRPERSON" ],
              module: "",
            },
          ],
        },
        {
          icon: "description",
          label: "Mission Order",
          route: {
            name: "mission-order",
            path: "",
          },
          query: {
            //
          },
          // params: {
          //   form: "clean-up",
          // },
          module: "",
        },
        {
          icon: "build",
          label: "Monitoring Tools",
          route: {
            name: "monitoring-tools",
            path: "",
          },
          children: [
            {
              icon: "build",
              label: "Monitoring Tools",
              route: {
                name: "monitoring-tools",
                path: "",
              },
              userRole: ["FOCAL", "RD", "DIRECTOR", "STAFF", "OIC"],
              module: "",
            },
            {
              icon: "dashboard",
              label: "Dashboard Report",
              route: {
                name: "monitoring-tools-dashboard",
                path: "",
              },
              userRole: ["FOCAL", "RD", "DIRECTOR", "STAFF", "OIC"],
              module: "",
            },
            {
              icon: "build",
              label: "Monitoring Tools Used",
              route: {
                name: "monitoring-tools-used",
                path: "",
              },
              userRole: ["FOCAL", "RD", "DIRECTOR", "STAFF", "OIC"],
              module: "",
            },
          ]
        },
        {
          icon: "summarize",
          label: "Visitation Report",
          children: [
            {
              icon: "summarize",
              label: "POD Visitation Report",
              route: {
                name: "pod-visitation-report",
                path: "",
              },
              userRole: [ "FOCAL", "VT_LEADER", "CI", "DC", "OIC_PC", "RD", "PMO", "ED", "DIRECTOR", "STAFF", "OIC" ],
              module: "",
            },
            {
              icon: "psychology",
              label: "MHF Visitation Report",
              route: {
                name: "mhf-visitation-report",
                path: "",
              },
              userRole: [ "FOCAL", "VT_LEADER", "CI", "DC", "OIC_PC", "RD", "PMO", "ED", "DIRECTOR", "STAFF", "OIC" ],
              module: "",
            },
            {
              icon: "history_edu",
              label: "Letter of Communication",
              route: {
                name: "letter-communication",
                path: "",
              },
              module: "",
            },
          ],
        },
        {
          icon: "blur_on",
          label: "Monitoring Matrix",
          route: {
            name: "monitoring-matrix",
            path: "",
          },
          query: {
            //
          },
          // params: {
          //   form: "clean-up",
          // },
          module: "",
        },
        {
          icon: "edit_note",
          label: "Form No. 9745",
          children: [
            {
              icon: "dashboard",
              label: "Dashboard",
              route: {
                name: "form-9745",
                path: "",
              },
              module: "",
            },
            {
              icon: "edit_note",
              label: "Form No. 9745",
              route: {
                name: "form-9745",
                path: "",
              },
              module: "",
            },
          ],
        },
        {
          icon: "manage_accounts",
          label: "Management",

          children: [
            {
              icon: "groups",
              label: "Group",
              route: {
                name: "group-management",
                path: "",
              },
              module: "",
            },
            {
              icon: "manage_accounts",
              label: "Role",
              route: {
                name: "role-management",
                path: "",
              },
              module: "",
            },
            {
              icon: "groups",
              label: "User",
              route: {
                name: "user-management",
                path: "",
              },
              module: "",
            },
          ],
          query: {
            //
          },
          // params: {
          //   form: "clean-up",
          // },
          module: "",
        },
        {
          icon: "manage_accounts",
          label: "System Library",

          children: [
            {
              icon: "groups",
              label: "Findings and Recommendation",
              route: {
                name: "findings-view",
                path: "",
              },
              module: "",
            },
            {
              icon: "manage_accounts",
              label: "Agency",
              route: {
                name: "agency-view",
                path: "",
              },
              module: "",
            },
            {
              icon: "groups",
              label: "Facility",
              route: {
                name: "facility-view",
                path: "",
              },
              module: "",
            },
          ],
          query: {
            //
          },
          // params: {
          //   form: "clean-up",
          // },
          module: "",
        },
        {
          icon: "content_paste_search",
          label: "Activity Logs",
          route: {
            name: "audit-logs",
            path: "",
          },
          query: {
            //
          },
          // params: {
          //   form: "clean-up",
          // },
          module: "",
        },
        {
          icon: "person",
          label: "User Profile",
          route: {
            name: "user-profile",
            path: "",
          },
          query: {
            //
          },
          // params: {
          //   form: "clean-up",
          // },
          module: "",
        },
      ];
      
      console.log('linkItems', linkItems)
      let sideBar = [];

      linkItems.forEach((items) => {
        let toAdd = {
          ...items,
        };
        if (items.children) {
          let itemChild = [];
          items.children.forEach((childInf) => {
            if (childInf.userRole) {
              if (childInf.userRole.includes(this.userRole)) {
                itemChild.push(childInf);
              }
            } else {
              itemChild.push(childInf);
            }
          });
          toAdd.children = itemChild;
        }

        sideBar.push(toAdd);
      });
      // console.log("ROUTES 1 => ", sideBar);
      // console.log("ROUTES 2 => ", linkItems);
      this.linkItems = sideBar || [];
    },

    onNavigateRoute(route = null, target = "") {
      // if (target === 'same-page') {
      //   let token = this.$q.localStorage.getItem('access-token');
      //   window.location.href = `${route}?token=${token}`
      // }
      // else {
      // console.log("asd");
      this.currentRouteName = this.$route.name;
      this.$router.push({
        name: route?.name || null,
        // params: route?.params || {},
        // query: route?.query || {},
      });
      // }
    },

    viewProfile() {
      this.$router.push({
        name: "view-profile",
      });
    },

    onLogout() {
      localStorage.removeItem("role");
      this.$router.push({
        name: "login",
      });
    },
  },

  mounted() {
    this.initApp();
    this.currentRouteName = this.$route.name;
    console.log('this.currentRouteName', this.currentRouteName);
    this.linkItems.forEach((item) => {
      if (item.children) {
        // console.log(item.children);
        const isCurrentRouteInSubMenu = item.children.some(
          (child) => child.route.name === this.$route.name
        );
        // console.log("isCurrentRouteInSubMenu", isCurrentRouteInSubMenu);
        if (isCurrentRouteInSubMenu) {
          item.expand = true; // Set expand to true if current route is in submenu
        }
      }
    });

    var role = localStorage.getItem("role");
    const result = this.roleDesc.find((item) => item.code === role);
    console.log('role', role);
    this.roleName = result.name;
  },
};
</script>
<style lang="scss">
body {
  background: rgb(231, 231, 231);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
}

.active {
  background-color: #4697c9; /* Define your desired active item background color */
  color: black; /* Define your desired active item text color */
}
</style>