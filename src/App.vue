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
  },
  methods: {
    ...mapActions([
      "setOptions",
      "setTotalReplay",
      "setTotalSpecialPrice",
      "setTotalSpecialSurprise",
      "setTotalTopPrice",
      "setTotalGiftCard",
      "setTotalSpin",

      "setGiftCards",
      "setTopPrices",
    ]),
    async getTotals() {
      const response = await service.getTotals();
      this.setTotalReplay(response.totalReplay);
      this.setTotalSpecialPrice(response.totalSpecialPrice);
      this.setTotalSpecialSurprise(response.totalSpecialSurprice);
      this.setTotalTopPrice(response.totalTopPrice);
      this.setTotalGiftCard(response.totalGitfCard);
      this.setTotalSpin(response.totalSpin)
    },

  

    async getGiftCards() {
      const response = await service.getGiftCards();
      if (response !== "error") {
        this.setGiftCards(Object.values(response));
      }
    },

    async getTopPrices() {
      const response = await service.getTopPrices();
      if (response !== "error") {
        this.setTopPrices(Object.values(response));
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