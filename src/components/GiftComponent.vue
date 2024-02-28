<template>
  <div class="row mb-4">
    <div class="col">
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
      <b-form-checkbox id="checkbox-1" v-model="given" name="checkbox-1" value="accepted" unchecked-value="not_accepted">
        <p @click.prevent="">The price is given</p>
      </b-form-checkbox>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["updateState"]),

    updateGiftProperty(property, value) {
      let giftArray, mutationType;

      switch (this.type) {
        case "card":
          giftArray = [...this.giftCards];
          mutationType = 'setGiftCards';
          break;
        case "top":
          giftArray = [...this.topPrices];
          mutationType = 'setTopPrices';
          break;
        case "tesla":
          giftArray = [...this.teslaPrices]; 
          mutationType = 'setTeslaPrices'; 
          break;
        default:
          console.error("Tipo no reconocido:", this.type);
          return; 
      }

      giftArray[this.indexGift][property] = value;

      this.updateState({ mutationType, payload: giftArray });
    },
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
    ...mapGetters(["giftCards", "topPrices", "teslaPrices"]),
    rangeDown: {
      get() {
        return this.giftProperties.rangeDown;
      },
      set(value) {
        this.updateGiftProperty('rangeDown', value);
      }
    },
    rangeTop: {
      get() {
        return this.giftProperties.rangeTop;
      },
      set(value) {
        this.updateGiftProperty('rangeTop', value);
      }
    },
    given: {
      get() {
        return this.giftProperties.given ? "accepted" : "not_accepted";
      },
      set(value) {
        const givenStatus = value === "accepted";
        this.updateGiftProperty('given', givenStatus);
      }
    }
  }
};
</script>

<style></style>