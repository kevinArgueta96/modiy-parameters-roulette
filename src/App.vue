<template>
  <div id="app">
    <FormComponent />
    <div class="footer">
      <div class="col-auto text-center p-5">
        <img src="/img/logo-img.png" class="img-fluid" alt="Responsive image" />
      </div>
    </div>
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
    this.getScheduleRange();
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
      

      "setGiftCardScheduleRangeA",
      "setGiftCardScheduleRangeB",
      "setGiftCardScheduleRangeC",
      "setGiftCardScheduleRangeD",
      "setGiftCardScheduleRangeE",

      "setTopPriceScheduleRangeA",
      "setTopPriceScheduleRangeB",
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

    async getScheduleRange() {
      const response = await service.getHour();
      this.setGiftCardScheduleRangeA(response.giftCardScheduleRangeA);
      this.setGiftCardScheduleRangeB(response.giftCardScheduleRangeB);
      this.setGiftCardScheduleRangeC(response.giftCardScheduleRangeC);
      this.setGiftCardScheduleRangeD(response.giftCardScheduleRangeD);
      this.setGiftCardScheduleRangeE(response.giftCardScheduleRangeE);

      this.setTopPriceScheduleRangeA(response.topPriceScheduleRangeA);
      this.setTopPriceScheduleRangeB(response.topPriceScheduleRangeB);
    },
  },

  watch: {
    isVisbleWinImg(value) {
      if (value) {
        setTimeout(() => {
          this.isVisbleWinImg = !this.isVisbleWinImg;
        }, this.timeToShowOptions);
      }
    },
    isVisbleLooseImg(value) {
      if (value) {
        setTimeout(() => {
          this.isVisbleLooseImg = !this.isVisbleLooseImg;
        }, this.timeToShowOptions);
      }
    },
    isVisibleConfetti(value) {
      if (value) {
        setTimeout(() => {
          this.isVisibleConfetti = !this.isVisibleConfetti;
        }, this.timeToShowOptions);
      }
    },
  },
};
</script>

<style>
#app {
  height: 85%;
  margin-top: 20px;
}
</style>