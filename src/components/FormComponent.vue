<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-12">
          <b-form @submit.prevent="onSubmit">
            <h1>Totals</h1>

            <div class="row">
              <div class="col-md-2">
                <b-form-group id="input-group-1" label="Total Replay" label-for="input-1">
                  <b-form-input id="input-1" v-model="selectedTotalReplay" placeholder="Replay" required
                    type="number"></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-2">
                <b-form-group id="input-group-2" label="Total Special Price" label-for="input-2">
                  <b-form-input id="input-2" v-model="selectedTotalSpecialPrice" placeholder="Special Price" required
                    type="number"></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-2">
                <b-form-group id="input-group-3" label="Total Special Surprise" label-for="input-3">
                  <b-form-input id="input-3" v-model="selectedTotalSpecialSuprise" placeholder="Special Surpise" required
                    type="number"></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-2">
                <b-form-group id="input-group-4" label="Total Top Price" label-for="input-4">
                  <b-form-input id="input-4" v-model="selectedTotalTopPrice" placeholder="Top Price" required
                    type="number"></b-form-input>
                </b-form-group>
              </div>

              <div class="col-md-2">
                <b-form-group id="input-group-5" label="Total Gift Card" label-for="input-5">
                  <b-form-input id="input-5" v-model="selectedTotalGiftCard" placeholder="Replay" required
                    type="number"></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-2">
                <b-form-group id="input-group-21" label="Total Spin" label-for="input-21">
                  <b-form-input id="input-5" v-model="selectedTotalSpin" placeholder="Spin" required
                    type="number"></b-form-input>
                </b-form-group>
              </div>
            </div>

            <h1>Gift Cards</h1>
            <div>
              <GiftComponent v-for="(giftCard, index) in giftCards" :key="index" :giftProperties="giftCard"
                :indexGift="index" :type="`card`" />
            </div>

            <h1>Top Prices</h1>
            <div>
              <GiftComponent v-for="(topPrice, index) in topPrices" :key="index" :giftProperties="topPrice"
                :indexGift="index" :type="`top`" />
            </div>

            <h1>Tesla Win</h1>
            <div>
              <GiftComponent v-for="(teslaPrice, index) in teslaPrices" :key="index" :giftProperties="teslaPrice"
                :indexGift="index" :type="`tesla`" />
            </div>

            <div class="form-check d-flex justify-content-center mb-4">
              <div class="col-md-1">
                <b-button type="submit" variant="primary">Submit</b-button>
              </div>
              <div class="col-md-1">
                <b-button type="submit" variant="secondary" @click.prevent="refresh">refresh</b-button>
              </div>
            </div>
          </b-form>
        </div>
        <div class="col-md-3" align-self-center></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import GiftComponent from "./GiftComponent.vue";
import service from "@/services/totals.service";

export default {
  components: {
    GiftComponent
  },
  data() {
    return {
      value: ""
    };
  },

  computed: {
    ...mapGetters([
      "totalReplay",
      "totalSpecialPrice",
      "totalSpecialSurprise",
      "totalTopPrice",
      "totalGiftCard",
      "totalSpin",
      "giftCards",
      "topPrices",
      "teslaPrices"
    ]),

    selectedTotalReplay: {
      get() {
        return this.totalReplay;
      },
      set(value) {
        const val = value !== "" ? parseInt(value) : 0;
        this.defineState('setTotalReplay', val)
      }
    },

    selectedTotalSpecialPrice: {
      get() {
        return this.totalSpecialPrice;
      },
      set(value) {
        const val = value !== "" ? parseInt(value) : 0;
        this.defineState('setTotalSpecialPrice', val)
      }
    },
    selectedTotalSpecialSuprise: {
      get() {
        return this.totalSpecialSurprise;
      },
      set(value) {
        const val = value !== "" ? parseInt(value) : 0;
        this.defineState('setTotalSpecialSurprise', val)

      }
    },

    selectedTotalTopPrice: {
      get() {
        return this.totalTopPrice;
      },
      set(value) {
        const val = value !== "" ? parseInt(value) : 0;
        this.defineState('setTotalTopPrice', val)
      }
    },

    selectedTotalGiftCard: {
      get() {
        return this.totalGiftCard;
      },
      set(value) {
        const val = value !== "" ? parseInt(value) : 0;
        this.defineState('setTotalGiftCard', val)
      }
    },

    selectedTotalSpin: {
      get() {
        return this.totalSpin;
      },
      set(value) {
        const val = value !== "" ? parseInt(value) : 0;
        this.defineState('setTotalSpin', val)
      }
    }
  },
  methods: {
    ...mapActions([
      "updateState"
    ]),
    async getTotals() {
      const response = await service.getTotals();
      if (response && response !== "error") {
        this.updateState({ mutationType: 'setTotalReplay', payload: response.totalReplay });
        this.updateState({ mutationType: 'setTotalSpecialPrice', payload: response.totalSpecialPrice });
        this.updateState({ mutationType: 'setTotalSpecialSurprise', payload: response.totalSpecialSurprice });
        this.updateState({ mutationType: 'setTotalTopPrice', payload: response.totalTopPrice });
        this.updateState({ mutationType: 'setTotalGiftCard', payload: response.totalGitfCard });
        this.updateState({ mutationType: 'setTotalSpin', payload: response.totalSpin });
      }
    },

    async getWinners() {
      const giftCardResponse = await service.getGiftCards();
      const topPricesResponse = await service.getTopPrices();
      if (giftCardResponse !== "error") {
        this.updateState({ mutationType: 'setGiftCards', payload: giftCardResponse });
      }
      if (topPricesResponse !== "error") {
        this.updateState({ mutationType: 'setTopPrices', payload: topPricesResponse });
      }
    },

    async getTeslaData() {
      const response = await service.getTeslaWin();
      if (response !== "error") {
        this.updateState({ mutationType: 'setTeslaPrices', payload: Object.values(response) });
      }
    },


    refresh() {
      this.getTotals();
      this.getWinners();
      this.getTeslaData();
      alert("The data was refresh");
    },
    onSubmit() {
      if (this.selectedTotalReplay < 0) {
        alert("Total Replay cannot be less than 0 ");
        return;
      }

      if (this.selectedTotalSpecialPrice < 0) {
        alert("Total Special Price cannot be less than 0 ");
        return;
      }

      if (this.selectedTotalSpecialSuprise < 0) {
        alert("Total Special Surprise cannot be less than 0 ");
        return;
      }

      if (this.selectedTotalTopPrice < 0) {
        alert("Total Top Price cannot be less than 0 ");
        return;
      }

      if (this.selectedTotalGiftCard < 0) {
        alert("Total Gift Card cannot be less than 0 ");
        return;
      }

      if (this.selectedTotalSpin < 0) {
        alert("Total Spin cannot be less than 0 ");
        return;
      }

      const data = {
        totalReplay: this.selectedTotalReplay,
        totalSpecialSurprice: this.selectedTotalSpecialSuprise,
        totalSpecialPrice: this.selectedTotalSpecialPrice,
        totalTopPrice: this.selectedTotalTopPrice,
        totalGitfCard: this.selectedTotalGiftCard,
        totalSpin: this.totalSpin
      };

      const giftCards = this.giftCards;
      const topPrices = this.topPrices;
      const teslaPrice = this.teslaPrices;

      service.setNewTotal(data);
      service.setGiftCards(giftCards);
      service.setTopPrices(topPrices);
      service.setTeslaWinService(teslaPrice);


      alert("All data is update");
      /*if(selectedTotalReplay)*/
    },

    defineState(mutationType, payload) {
      this.updateState({
        mutationType: mutationType,
        payload: payload
      });
    }
  }
};
</script>