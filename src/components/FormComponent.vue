<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <b-form @submit.prevent="onSubmit">
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

            <div class="row mb-4">
              <div class="col">
                <b-form-group id="input-group-6" label="Start Gift Card 1" label-for="input-6">
                  <b-form-input type="time" v-model="selectedGiftCardDownRangeA"></b-form-input>
                </b-form-group>
              </div>
              <div class="col">
                <b-form-group id="input-group-7" label="End Gift Card 1" label-for="input-7">
                  <b-form-input type="time" v-model="selectedGiftCardTopRangeA"></b-form-input>
                </b-form-group>
              </div>
              <div class="col">
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="selectedGiftCardRangeAStatus"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                >The price is given</b-form-checkbox>
              </div>
            </div>

            <div class="row mb-4">
              <div class="col">
                <b-form-group id="input-group-8" label="Start Gift Card 2" label-for="input-8">
                  <b-form-input type="time" v-model="selectedGiftCardDownRangeB"></b-form-input>
                </b-form-group>
              </div>
              <div class="col">
                <b-form-group id="input-group-9" label="End Gift Card 2" label-for="input-9">
                  <b-form-input type="time" v-model="selectedGiftCardTopRangeB"></b-form-input>
                </b-form-group>
              </div>
              <div class="col">
                <b-form-checkbox
                  id="checkbox-2"
                  v-model="selectedGiftCardRangeBStatus"
                  name="checkbox-2"
                  value="accepted"
                  unchecked-value="not_accepted"
                >The price is given</b-form-checkbox>
              </div>
            </div>

            <div class="row mb-4">
              <div class="col">
                <b-form-group id="input-group-10" label="Start Gift Card 3" label-for="input-10">
                  <b-form-input type="time" v-model="selectedGiftCardDownRangeC"></b-form-input>
                </b-form-group>
              </div>
              <div class="col">
                <b-form-group id="input-group-11" label="End Gift Card 3" label-for="input-11">
                  <b-form-input type="time" v-model="selectedGiftCardTopRangeC"></b-form-input>
                </b-form-group>
              </div>
              <div class="col">
                <b-form-checkbox
                  id="checkbox-3"
                  v-model="selectedGiftCardRangeCStatus"
                  name="checkbox-3"
                  value="accepted"
                  unchecked-value="not_accepted"
                >The price is given</b-form-checkbox>
              </div>
            </div>

            <div class="row mb-4">
              <div class="col">
                <b-form-group id="input-group-12" label="Start Gift Card 4" label-for="input-12">
                  <b-form-input type="time" v-model="selectedGiftCardDownRangeD"></b-form-input>
                </b-form-group>
              </div>
              <div class="col">
                <b-form-group id="input-group-13" label="End Gift Card 4" label-for="input-13">
                  <b-form-input type="time" v-model="selectedGiftCardTopRangeD"></b-form-input>
                </b-form-group>
              </div>
              <div class="col">
                <b-form-checkbox
                  id="checkbox-4"
                  v-model="selectedGiftCardRangeDStatus"
                  name="checkbox-4"
                  value="accepted"
                  unchecked-value="not_accepted"
                >The price is given</b-form-checkbox>
              </div>
            </div>

            <div class="row mb-4">
              <div class="col">
                <b-form-group id="input-group-14" label="Start Gift Card 5" label-for="input-14">
                  <b-form-input type="time" v-model="selectedGiftCardDownRangeE"></b-form-input>
                </b-form-group>
              </div>
              <div class="col">
                <b-form-group id="input-group-15" label="End Gift Card 5" label-for="input-15">
                  <b-form-input type="time" v-model="selectedGiftCardTopRangeE"></b-form-input>
                </b-form-group>
              </div>
              <div class="col">
                <b-form-checkbox
                  id="checkbox-5"
                  v-model="selectedGiftCardRangeEStatus"
                  name="checkbox-5"
                  value="accepted"
                  unchecked-value="not_accepted"
                >The price is given</b-form-checkbox>
              </div>
            </div>

            <div class="row mb-4">
              <div class="col">
                <b-form-group id="input-group-16" label="TOP Price start 1" label-for="input-16">
                  <b-form-input type="time" v-model="selectedTopPriceScheduleRangeAUp"></b-form-input>
                </b-form-group>
              </div>
              <div class="col">
                <b-form-group id="input-group-17" label="TOP Proce end 1" label-for="input-17">
                  <b-form-input type="time" v-model="selectedTopPriceScheduleRangeADown"></b-form-input>
                </b-form-group>
              </div>
              <div class="col">
                <b-form-checkbox
                  id="checkbox-6"
                  v-model="selectedTopPriceScheduleRangeAStatus"
                  name="checkbox-6"
                  value="accepted"
                  unchecked-value="not_accepted"
                >The price is given</b-form-checkbox>
              </div>
            </div>

            <div class="row mb-4">
              <div class="col">
                <b-form-group id="input-group-18" label="TOP Proce start 2" label-for="input-18">
                  <b-form-input type="time" v-model="selectedTopPriceScheduleRangeBUp"></b-form-input>
                </b-form-group>
              </div>
              <div class="col">
                <b-form-group id="input-group-19" label="TOP Proce end 2" label-for="input-19">
                  <b-form-input type="time" v-model="selectedTopPriceScheduleRangeBDown"></b-form-input>
                </b-form-group>
              </div>
              <div class="col">
                <b-form-checkbox
                  id="checkbox-7"
                  v-model="selectedTopPriceScheduleRangeBStatus"
                  name="checkbox-7"
                  value="accepted"
                  unchecked-value="not_accepted"
                >The price is given</b-form-checkbox>
              </div>
            </div>

            <div class="form-check d-flex justify-content-center mb-4">
              <b-button type="submit" variant="primary">Submit</b-button>
            </div>
          </b-form>

          <div class="form-check d-flex justify-content-center mb-4">
            <b-button type="submit" variant="secondary" @click.prevent="refresh">refresh</b-button>
          </div>
        </div>
        <div class="col-md-3" align-self-center></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import service from "@/services/totals.service";

export default {
  data() {
    return {
      value: "",
    };
  },
  mounted() {},
  computed: {
    ...mapGetters([
      "totalReplay",
      "totalSpecialPrice",
      "totalSpecialSurprise",
      "totalTopPrice",
      "totalGiftCard",
      "totalSpin",

      "giftCardScheduleRangeA",
      "giftCardScheduleRangeB",
      "giftCardScheduleRangeC",
      "giftCardScheduleRangeD",
      "giftCardScheduleRangeE",

      "topPriceScheduleRangeA",
      "topPriceScheduleRangeB",
    ]),

    //RANGES A
    selectedGiftCardTopRangeA: {
      get() {
        return this.giftCardScheduleRangeA.rangeTop;
      },
      set(value) {
        const range = this.giftCardScheduleRangeA;
        range.rangeTop = value;
        this.setGiftCardScheduleRangeA(range);
      },
    },

    selectedGiftCardDownRangeA: {
      get() {
        return this.giftCardScheduleRangeA.rangeDown;
      },
      set(value) {
        const range = this.giftCardScheduleRangeA;
        range.rangeDown = value;
        this.setGiftCardScheduleRangeA(range);
      },
    },
    selectedGiftCardRangeAStatus: {
      get() {
        if (this.giftCardScheduleRangeA.given) {
          return "accepted";
        }
        return "not_accepted";
      },
      set(value) {
        const status = this.giftCardScheduleRangeA;
        if (value === "accepted") {
          status.given = true;
          this.setGiftCardScheduleRangeA(status);
        } else {
          const given = false;
          status.given = given;
          this.setGiftCardScheduleRangeA(status);
        }
      },
    },

    //RANGES B
    selectedGiftCardTopRangeB: {
      get() {
        return this.giftCardScheduleRangeB.rangeTop;
      },
      set(value) {
        const range = this.giftCardScheduleRangeB;
        range.rangeTop = value;
        this.setGiftCardScheduleRangeB(range);
      },
    },

    selectedGiftCardDownRangeB: {
      get() {
        return this.giftCardScheduleRangeB.rangeDown;
      },
      set(value) {
        const range = this.giftCardScheduleRangeB;
        range.rangeDown = value;
        this.setGiftCardScheduleRangeB(range);
      },
    },
    selectedGiftCardRangeBStatus: {
      get() {
        if (this.giftCardScheduleRangeB.given) {
          return "accepted";
        }
        return "not_accepted";
      },
      set(value) {
        const status = this.giftCardScheduleRangeB;
        if (value === "accepted") {
          status.given = true;
          this.setGiftCardScheduleRangeB(status);
        } else {
          const given = false;
          status.given = given;
          this.setGiftCardScheduleRangeB(status);
        }
      },
    },

    //RANGES C
    selectedGiftCardTopRangeC: {
      get() {
        return this.giftCardScheduleRangeC.rangeTop;
      },
      set(value) {
        const range = this.giftCardScheduleRangeC;
        range.rangeTop = value;
        this.setGiftCardScheduleRangeC(range);
      },
    },

    selectedGiftCardDownRangeC: {
      get() {
        return this.giftCardScheduleRangeC.rangeDown;
      },
      set(value) {
        const range = this.giftCardScheduleRangeC;
        range.rangeDown = value;
        this.setGiftCardScheduleRangeC(range);
      },
    },
    selectedGiftCardRangeCStatus: {
      get() {
        if (this.giftCardScheduleRangeC.given) {
          return "accepted";
        }
        return "not_accepted";
      },
      set(value) {
        const status = this.giftCardScheduleRangeC;
        if (value === "accepted") {
          status.given = true;
          this.setGiftCardScheduleRangeC(status);
        } else {
          const given = false;
          status.given = given;
          this.setGiftCardScheduleRangeC(status);
        }
      },
    },

    //RANGES D
    selectedGiftCardTopRangeD: {
      get() {
        return this.giftCardScheduleRangeD.rangeTop;
      },
      set(value) {
        const range = this.giftCardScheduleRangeD;
        range.rangeTop = value;
        this.setGiftCardScheduleRangeD(range);
      },
    },

    selectedGiftCardDownRangeD: {
      get() {
        return this.giftCardScheduleRangeD.rangeDown;
      },
      set(value) {
        const range = this.giftCardScheduleRangeD;
        range.rangeDown = value;
        this.setGiftCardScheduleRangeD(range);
      },
    },
    selectedGiftCardRangeDStatus: {
      get() {
        if (this.giftCardScheduleRangeD.given) {
          return "accepted";
        }
        return "not_accepted";
      },
      set(value) {
        const status = this.giftCardScheduleRangeD;
        if (value === "accepted") {
          status.given = true;
          this.setGiftCardScheduleRangeD(status);
        } else {
          const given = false;
          status.given = given;
          this.setGiftCardScheduleRangeD(status);
        }
      },
    },

    //RANGES E
    selectedGiftCardTopRangeE: {
      get() {
        return this.giftCardScheduleRangeE.rangeTop;
      },
      set(value) {
        const range = this.giftCardScheduleRangeE;
        range.rangeTop = value;
        this.setGiftCardScheduleRangeE(range);
      },
    },

    selectedGiftCardDownRangeE: {
      get() {
        return this.giftCardScheduleRangeE.rangeDown;
      },
      set(value) {
        const range = this.giftCardScheduleRangeE;
        range.rangeDown = value;
        this.setGiftCardScheduleRangeE(range);
      },
    },
    selectedGiftCardRangeEStatus: {
      get() {
        if (this.giftCardScheduleRangeE.given) {
          return "accepted";
        }
        return "not_accepted";
      },
      set(value) {
        const status = this.giftCardScheduleRangeE;
        if (value === "accepted") {
          status.given = true;
          this.setGiftCardScheduleRangeE(status);
        } else {
          const given = false;
          status.given = given;
          this.setGiftCardScheduleRangeE(status);
        }
      },
    },

    //RANGES TOP A
    selectedTopPriceScheduleRangeAUp: {
      get() {
        return this.topPriceScheduleRangeA.rangeTop;
      },
      set(value) {
        const range = this.topPriceScheduleRangeA;
        range.rangeTop = value;
        this.setTopPriceScheduleRangeA(range);
      },
    },

    selectedTopPriceScheduleRangeADown: {
      get() {
        return this.topPriceScheduleRangeA.rangeDown;
      },
      set(value) {
        const range = this.topPriceScheduleRangeA;
        range.rangeDown = value;
        this.setTopPriceScheduleRangeA(range);
      },
    },
    selectedTopPriceScheduleRangeAStatus: {
      get() {
        if (this.topPriceScheduleRangeA.given) {
          return "accepted";
        }
        return "not_accepted";
      },
      set(value) {
        const status = this.topPriceScheduleRangeA;
        if (value === "accepted") {
          status.given = true;
          this.setTopPriceScheduleRangeA(status);
        } else {
          const given = false;
          status.given = given;
          this.setTopPriceScheduleRangeA(status);
        }
      },
    },

    //RANGES TOP B
    selectedTopPriceScheduleRangeBUp: {
      get() {
        return this.topPriceScheduleRangeB.rangeTop;
      },
      set(value) {
        const range = this.topPriceScheduleRangeB;
        range.rangeTop = value;
        this.setTopPriceScheduleRangeB(range);
      },
    },

    selectedTopPriceScheduleRangeBDown: {
      get() {
        return this.topPriceScheduleRangeB.rangeDown;
      },
      set(value) {
        const range = this.topPriceScheduleRangeB;
        range.rangeDown = value;
        this.setTopPriceScheduleRangeB(range);
      },
    },
    selectedTopPriceScheduleRangeBStatus: {
      get() {
        if (this.topPriceScheduleRangeB.given) {
          return "accepted";
        }
        return "not_accepted";
      },
      set(value) {
        const status = this.topPriceScheduleRangeB;
        if (value === "accepted") {
          status.given = true;
          this.setTopPriceScheduleRangeB(status);
        } else {
          const given = false;
          status.given = given;
          this.setTopPriceScheduleRangeB(status);
        }
      },
    },

    ///

    selectedTotalReplay: {
      get() {
        return this.totalReplay;
      },
      set(value) {
        const val = parseInt(value);
        this.setTotalReplay(val);
      },
    },

    selectedTotalSpecialPrice: {
      get() {
        return this.totalSpecialPrice;
      },
      set(value) {
        const val = parseInt(value);
        this.setTotalSpecialPrice(val);
      },
    },
    selectedTotalSpecialSuprise: {
      get() {
        return this.totalSpecialSurprise;
      },
      set(value) {
        const val = parseInt(value);
        this.setTotalSpecialSurprise(val);
      },
    },

    selectedTotalTopPrice: {
      get() {
        return this.totalTopPrice;
      },
      set(value) {
        const val = parseInt(value);
        this.setTotalTopPrice(val);
      },
    },

    selectedTotalGiftCard: {
      get() {
        return this.totalGiftCard;
      },
      set(value) {
        const val = parseInt(value);
        this.setTotalGiftCard(val);
      },
    },

    selectedTotalSpin: {
      get() {
        return this.totalSpin;
      },
      set(value) {
        const val = parseInt(value);
        this.setTotalSpin(val);
      },
    },
  },
  methods: {
    ...mapActions([
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

      this.setGif;
    },
    refresh() {
      this.getTotals();
      this.getScheduleRange();

      /*const schedu = {
        giftCardScheduleRangeA: {
          rangeTop: "00:00",
          rangeDown: "00:00",
          given: false,
        },
        giftCardScheduleRangeB: {
          rangeTop: "00:00",
          rangeDown: "00:00",
          given: false,
        },
        giftCardScheduleRangeC: {
          rangeTop: "00:00",
          rangeDown: "00:00",
          given: false,
        },
        giftCardScheduleRangeD: {
          rangeTop: "00:00",
          rangeDown: "00:00",
          given: false,
        },

        giftCardScheduleRangeE: {
          rangeTop: "00:00",
          rangeDown: "00:00",
          given: false,
        },

        topPriceScheduleRangeA: {
          rangeTop: "00:00",
          rangeDown: "00:00",
          given: false,
        },
        topPriceScheduleRangeB: {
          rangeTop: "00:00",
          rangeDown: "00:00",
          given: false,
        },
      };
      service.setHour(schedu);*/
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
      const schedu = {
        giftCardScheduleRangeA: {
          rangeTop: this.giftCardScheduleRangeA.rangeTop,
          rangeDown: this.giftCardScheduleRangeA.rangeDown,
          given: this.giftCardScheduleRangeA.given,
        },
        giftCardScheduleRangeB: {
          rangeTop: this.giftCardScheduleRangeB.rangeTop,
          rangeDown: this.giftCardScheduleRangeB.rangeDown,
          given: this.giftCardScheduleRangeB.given,
        },
        giftCardScheduleRangeC: {
          rangeTop: this.giftCardScheduleRangeC.rangeTop,
          rangeDown: this.giftCardScheduleRangeC.rangeDown,
          given: this.giftCardScheduleRangeC.given,
        },
        giftCardScheduleRangeD: {
          rangeTop: this.giftCardScheduleRangeD.rangeTop,
          rangeDown: this.giftCardScheduleRangeD.rangeDown,
          given: this.giftCardScheduleRangeD.given,
        },

        giftCardScheduleRangeE: {
          rangeTop: this.giftCardScheduleRangeE.rangeTop,
          rangeDown: this.giftCardScheduleRangeE.rangeDown,
          given: this.giftCardScheduleRangeE.given,
        },

        topPriceScheduleRangeA: {
          rangeTop: this.topPriceScheduleRangeA.rangeTop,
          rangeDown: this.topPriceScheduleRangeA.rangeDown,
          given: this.topPriceScheduleRangeA.given,
        },
        topPriceScheduleRangeB: {
          rangeTop: this.topPriceScheduleRangeB.rangeTop,
          rangeDown: this.topPriceScheduleRangeB.rangeDown,
          given: this.topPriceScheduleRangeB.given,
        },
      };
      service.setNewTotal(data);
      service.setHour(schedu);

      alert("All data is update");
      /*if(selectedTotalReplay)*/
    },
  },
};
</script>