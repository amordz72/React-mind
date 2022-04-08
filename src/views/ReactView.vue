<template>
  <div class="row">
    <div class="col-md-4 pt-3">
      <div class="row mb-3">
        <label class="form-label col-3">Project :</label>
        <div class="col-9">
          <input
            type="text"
            class="form-control"
            v-model="proj_name"
            aria-describedby="helpId"
            placeholder="Project"
          />
        </div>
      </div>
      <div class="row mb-3">
        <label class="form-label col-3">Table :</label>
        <div class="col-9">
          <input
            type="text"
            class="form-control"
            v-model="tbl_name"
            aria-describedby="helpId"
            placeholder="Table"
          />
        </div>
      </div>
      <div class="row mb-3">
        <label for="" class="form-label col-3">Select</label>
        <div class="col-9">
          <select class="form-control" @change="get_script" v-model="type">
            <option value="0">Select ...</option>
            <option
              :value="type.id"
              v-for="(type, index) in types"
              :key="index"
            >
              {{ type.name }}
            </option>
          </select>
        </div>
      </div>

      <button class="btn btn-success" role="button" @click="set_code">
        Make Code
      </button>
      <!-- <button class="btn btn-info" role="button">set_code</button> -->
      <button class="btn btn-primary" role="button" @click="copy">Copy</button>
      <button class="btn btn-secondary" role="button" @click="clear">
        Clear
      </button>
    </div>
    <div class="col-md-8">
      <div class="mb-3">
        <label for="" class="form-label">The Code</label>
        <textarea
          class="form-control text-dark fw-bold"
          :class="{ rtl: dir.rtl }"
          v-model="code"
          rows="20"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueAxios from "vue-axios";

import Main from "../components/Main.vue";
import SideBar from "../components/SideBar.vue";
import data from "../json/types.json";
export default {
  components: {
    Main,
    SideBar,
  },
  data() {
    return {
      proj_name: localStorage.getItem("proj_name") || "app_",
      tbl_name: "",
      code: "",
      types: [],
      type: 0,
      dir: {
        ltr: false,
        rtl: false,
        center: false,
      },
    };
  },
  methods: {
    loadData() {
      this.types = [];
      this.types = data;
    },

    get_script() {
      this.code = ``;
      const filteredResult = this.types.find((e) => e.id == this.type);

      this.code = filteredResult.code.replaceAll("^", this.proj_name);
    },

    set_code() {
      let str = this.code.trim();
      str = str.replaceAll("\n", "\\n");
      str = str.replaceAll('"', '\\"');

      this.code = str;
    },
    clear() {
      this.type = 0;
      this.code = "";
    },
    copy() {
      navigator.clipboard.writeText(this.code);
      this.$notify({
      title: "تم_النسخ",
        text: "تم",
   // Class that will be assigned to the notification
     //   type: "warn",
    
     
      });
    },
    Script2() {},
  },
  mounted() {
    this.loadData();
  },
};
</script>
 
<style>
.rtl {
  text-align: right;
}
.ltr {
  text-align: left;
}
.center {
  text-align: center;
}
</style>