<template>
  <div class="row mb-4">
    <div class="col">
      {{ type }}
      <b-form-group id="input-group-6" label="Start Gift Card 1" label-for="input-6">
        <b-form-input type="time" v-model="rangeDown"></b-form-input>
      </b-form-group>
    </div>
    <div class="col">
      <b-form-group id="input-group-7" label="End Gift Card 2" label-for="input-7">
        <b-form-input type="time" v-model="rangeTop"></b-form-input>
      </b-form-group>
    </div>
    <div class="col">
      <b-form-checkbox
        id="checkbox-1"
        v-model="given"
        name="checkbox-1"
        value="accepted"
        unchecked-value="not_accepted"
      >The price is given</b-form-checkbox>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["setGiftCards", "setTopPrices"])
  },
  props: {
    giftProperties: {
      type: Object
    },
    indexGift: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: ""
    }
  },

  computed: {
    ...mapGetters(["giftCards", "topPrices"]),
    rangeDown: {
      get() {
        return this.giftProperties.rangeDown;
      },
      set(value) {
        switch (this.type) {
          case "card":
            this.giftCards[this.indexGift].rangeDown = value;
            this.setGiftCards(this.giftCards);
            break;
          case "top":
            this.topPrices[this.indexGift].rangeDown = value;
            this.setTopPrices(this.topPrices);
            break;
          default:
            return;
        }
      }
    },
    rangeTop: {
      get() {
        return this.giftProperties.rangeTop;
      },
      set(value) {
        switch (this.type) {
          case "card":
            this.giftCards[this.indexGift].rangeTop = value;
            this.setGiftCards(this.giftCards);
            break;
          case "top":
            this.topPrices[this.indexGift].rangeTop = value;
            this.setTopPrices(this.topPrices);
            break;
          default:
            return;
        }
      }
    },
    given: {
      get() {
        if (this.giftProperties.given) {
          return "accepted";
        }
        return "not_accepted";
      },
      set(value) {
        if (value === "accepted") {
          switch (this.type) {
            case "card":
              this.giftCards[this.indexGift].given = true;
              this.setGiftCards(this.giftCards);
              break;
            case "top":
              this.topPrices[this.indexGift].given = true;
              this.setTopPrices(this.topPrices);
              break;
            default:
              return;
          }
        } else {
          switch (this.type) {
            case "card":
              this.giftCards[this.indexGift].given = false;
              this.setGiftCards(this.giftCards);
              break;
            case "top":
              this.topPrices[this.indexGift].given = false;
              this.setTopPrices(this.topPrices);
              break;
            default:
              return;
          }
        }
      }
    }
  }
};
</script>

<style>
</style>