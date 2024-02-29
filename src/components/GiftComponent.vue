<template>
  <div class="row mb-4">
    <div class="col-md-4">
      <div class="card shadow-sm p-3 mb-5 bg-white rounded">
        <div class="card-body">
          <b-form-group id="input-group-6" label="Start Gift Card 1" label-for="input-6">
            <b-form-input type="time" v-model="rangeDown" class="form-control"></b-form-input>
          </b-form-group>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card shadow-sm p-3 mb-5 bg-white rounded">
        <div class="card-body">
          <b-form-group id="input-group-7" label="End Gift Card 2" label-for="input-7">
            <b-form-input type="time" v-model="rangeTop" class="form-control"></b-form-input>
          </b-form-group>
        </div>
      </div>
    </div>
    <div class="col-md-4 d-flex align-items-center">
      <label class="switch">
        <input type="checkbox" id="checkbox-1" :checked="given === 'accepted'"
          @change="given = $event.target.checked ? 'accepted' : 'not_accepted'">
        <span class="slider round"></span>
      </label>
      <label for="checkbox-1" class="ml-2">The price is given</label>
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

<style> .switch {
   position: relative;
   display: inline-block;
   width: 60px;
   height: 34px;
 }

 .switch input {
   opacity: 0;
   width: 0;
   height: 0;
 }

 .slider {
   position: absolute;
   cursor: pointer;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: #ccc;
   -webkit-transition: .4s;
   transition: .4s;
 }

 .slider:before {
   position: absolute;
   content: "";
   height: 26px;
   width: 26px;
   left: 4px;
   bottom: 4px;
   background-color: white;
   -webkit-transition: .4s;
   transition: .4s;
 }

 input:checked+.slider {
   background-color: #2196F3;
 }

 input:focus+.slider {
   box-shadow: 0 0 1px #2196F3;
 }

 input:checked+.slider:before {
   -webkit-transform: translateX(26px);
   -ms-transform: translateX(26px);
   transform: translateX(26px);
 }

 /* Rounded sliders */
 .slider.round {
   border-radius: 34px;
 }

 .slider.round:before {
   border-radius: 50%;
 }
</style>