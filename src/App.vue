<template>
  <div id="app">
    <FormComponent />
    <!-- <div class="footer">
      <div class="col-auto text-center p-5">
        <img src="/img/logo-img.png" class="img-fluid" alt="Responsive image" />
      </div>
    </div> -->
  </div>
</template>

<script>
import FormComponent from "./components/FormComponent.vue";
import { mapGetters, mapActions } from "vuex";
import service from "@/services/totals.service";

export default {
  name: "App",
  components: {
    FormComponent,
  },
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters(["timeToShowOptions"]),
  },
  mounted() {
    this.getTotals();
    this.getGiftCards();
    this.getTopPrices();
    this.getTeslaData();

  },
  methods: {
    ...mapActions([
      "updateState"
    ]),
    async getTotals() {
      const response = await service.getTotals();

      this.updateState({ mutationType: 'setTotalReplay', payload: response.totalReplay });
      this.updateState({ mutationType: 'setTotalSpecialPrice', payload: response.totalSpecialPrice });
      this.updateState({ mutationType: 'setTotalSpecialSurprise', payload: response.totalSpecialSurprice });
      this.updateState({ mutationType: 'setTotalTopPrice', payload: response.totalTopPrice });
      this.updateState({ mutationType: 'setTotalGiftCard', payload: response.totalGitfCard });
      this.updateState({ mutationType: 'setTotalSpin', payload: response.totalSpin });
    },



    async getGiftCards() {
      const response = await service.getGiftCards();
      if (response !== "error") {
        this.updateState({ mutationType: 'setGiftCards', payload: Object.values(response) });
      }
    },

    async getTopPrices() {
      const response = await service.getTopPrices();
      if (response !== "error") {
        this.updateState({ mutationType: 'setTopPrices', payload: Object.values(response) });
      }
    },

    async getTeslaData() {
      const response = await service.getTeslaWin();
      if (response !== "error") {
        this.updateState({ mutationType: 'setTeslaPrices', payload: Object.values(response) });
      }
    },
  },

  watch: {
  },
};
</script>

<style>
#app {
  height: 85%;
  margin-top: 20px;
}
</style>