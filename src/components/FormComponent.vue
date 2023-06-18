<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <b-form @submit.prevent="onSubmit">
            <h1>Totals</h1>

            <div class="row">
              <div class="col-md-6">
                <b-form-group id="input-group-1" label="Total Replay" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="selectedTotalReplay"
                    placeholder="Replay"
                    required
                    type="number"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-6">
                <b-form-group id="input-group-2" label="Total Special Price" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="selectedTotalSpecialPrice"
                    placeholder="Special Price"
                    required
                    type="number"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <b-form-group id="input-group-3" label="Total Special Surprise" label-for="input-3">
                  <b-form-input
                    id="input-3"
                    v-model="selectedTotalSpecialSuprise"
                    placeholder="Special Surpise"
                    required
                    type="number"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-6">
                <b-form-group id="input-group-4" label="Total Top Price" label-for="input-4">
                  <b-form-input
                    id="input-4"
                    v-model="selectedTotalTopPrice"
                    placeholder="Top Price"
                    required
                    type="number"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <b-form-group id="input-group-5" label="Total Gift Card" label-for="input-5">
                  <b-form-input
                    id="input-5"
                    v-model="selectedTotalGiftCard"
                    placeholder="Replay"
                    required
                    type="number"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-6">
                <b-form-group id="input-group-21" label="Total Spin" label-for="input-21">
                  <b-form-input
                    id="input-5"
                    v-model="selectedTotalSpin"
                    placeholder="Spin"
                    required
                    type="number"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <h1>Gift Cards</h1>
            <div>
              <GiftComponent
                v-for="(giftCard, index) in giftCards"
                :key="index"
                :giftProperties="giftCard"
                :indexGift="index"
                :type="`card`"
              />
            </div>

            <h1>Top Prices</h1>
            <div>
              <GiftComponent
                v-for="(topPrice, index) in topPrices"
                :key="index"
                :giftProperties="topPrice"
                :indexGift="index"
                :type="`top`"
              />
            </div>

            <div class="form-check d-flex justify-content-center mb-4">
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="submit" variant="secondary" @click.prevent="refresh">refresh</b-button>
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
      "topPrices"
    ]),

    selectedTotalReplay: {
      get() {
        return this.totalReplay;
      },
      set(value) {
        const val = parseInt(value);
        this.setTotalReplay(val);
      }
    },

    selectedTotalSpecialPrice: {
      get() {
        return this.totalSpecialPrice;
      },
      set(value) {
        const val = parseInt(value);
        this.setTotalSpecialPrice(val);
      }
    },
    selectedTotalSpecialSuprise: {
      get() {
        return this.totalSpecialSurprise;
      },
      set(value) {
        const val = parseInt(value);
        this.setTotalSpecialSurprise(val);
      }
    },

    selectedTotalTopPrice: {
      get() {
        return this.totalTopPrice;
      },
      set(value) {
        const val = parseInt(value);
        this.setTotalTopPrice(val);
      }
    },

    selectedTotalGiftCard: {
      get() {
        return this.totalGiftCard;
      },
      set(value) {
        const val = parseInt(value);
        this.setTotalGiftCard(val);
      }
    },

    selectedTotalSpin: {
      get() {
        return this.totalSpin;
      },
      set(value) {
        const val = parseInt(value);
        this.setTotalSpin(val);
      }
    }
  },
  methods: {
    ...mapActions([
      "setTotalReplay",
      "setTotalSpecialPrice",
      "setTotalSpecialSurprise",
      "setTotalTopPrice",
      "setTotalGiftCard",
      "setTotalSpin",

      "setGiftCards",
       "setTopPrices"
    ]),
    async getTotals() {
      const response = await service.getTotals();
      this.setTotalReplay(response.totalReplay);
      this.setTotalSpecialPrice(response.totalSpecialPrice);
      this.setTotalSpecialSurprise(response.totalSpecialSurprice);
      this.setTotalTopPrice(response.totalTopPrice);
      this.setTotalGiftCard(response.totalGitfCard);
      this.setTotalSpin(response.totalSpin);
    },

    async getWinners() {
      const giftCard = await service.getGiftCards();
      const topPrices = await service.getTopPrices();

      this.setGiftCards(giftCard);
      this.setTopPrices(topPrices)
    },

    refresh() {
      this.getTotals();
      this.getWinners();
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

      service.setNewTotal(data);
      service.setGiftCards(giftCards);
      service.setTopPrices(topPrices);


      alert("All data is update");
      /*if(selectedTotalReplay)*/
    }
  }
};
</script>