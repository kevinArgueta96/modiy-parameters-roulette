<template>
  <div>
    <div class="container" style="padding-top: 60px;">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">

            <b-form @submit.prevent="onSubmit" >
                <b-form-group id="input-group-2" label="Total Replay" label-for="input-2">
                <b-form-input
                id="input-1"
                v-model="selectedTotalReplay"
                placeholder="Replay"
                required
                type="number"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Total Special Price" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="selectedTotalSpecialPrice"
                placeholder="Special Price"
                required
                type="number"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Total Special Surprise" label-for="input-2">
                <b-form-input
                id="input-3"
                v-model="selectedTotalSpecialSuprise"
                placeholder="Special Surpise"
                required
                type="number"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Total Top Price" label-for="input-2">
                <b-form-input
                id="input-4"
                v-model="selectedTotalTopPrice"
                placeholder="Top Price"
                required
                type="number"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Total Gift Card" label-for="input-2">
                <b-form-input
                id="input-5"
                v-model="selectedTotalGiftCard"
                placeholder="Replay"
                required
                type="number"
                ></b-form-input>
            </b-form-group>


            

            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
        </div>
        <div class="col-md-3" align-self-center></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import service from '@/services/totals.service'

export default {
  data() {
    return {
      value: "",
    };
  },
  mounted() {},
  computed: {
    ...mapGetters(["totalReplay",
      "totalSpecialPrice",
      "totalSpecialSurprise",
      "totalTopPrice",
      "totalGiftCard"
    ]),

    selectedTotalReplay: {
      get() {
        return this.totalReplay;
      },
      set(value){
        const val = parseInt(value)
        this.setTotalReplay(val)
      },
    },

    selectedTotalSpecialPrice: {
      get() {
        return this.totalSpecialPrice;
      },
      set(value){
        const val = parseInt(value)
        this.setTotalSpecialPrice(val)
      },
    },
    selectedTotalSpecialSuprise: {
      get() {
        return this.totalSpecialSurprise;
      },
      set(value){
        const val = parseInt(value)
        this.setTotalSpecialSurprise(val)
      },
    },

    selectedTotalTopPrice: {
      get() {
        return this.totalTopPrice;
      },
      set(value){
        const val = parseInt(value)
        this.setTotalTopPrice(val)
      },
    },

    selectedTotalGiftCard: {
      get() {
        return this.totalGiftCard;
      },
      set(value){
        const val = parseInt(value)
        this.setTotalGiftCard(val)
      },
    },
  },
  methods: {
    ...mapActions(["setTotalReplay","setTotalSpecialPrice","setTotalSpecialSurprise","setTotalTopPrice","setTotalGiftCard"]),
    onSubmit() {
        if(this.selectedTotalReplay<0){
            alert('Total Replay cannot be less than 0 ')
            return;
        }

        if(this.selectedTotalSpecialPrice<0){
            alert('Total Special Price cannot be less than 0 ')
            return;
        }

        if(this.selectedTotalSpecialSuprise<0){
            alert('Total Special Surprise cannot be less than 0 ')
            return;
        }

        if(this.selectedTotalTopPrice<0){
            alert('Total Top Price cannot be less than 0 ')
            return;
        }

        if(this.selectedTotalGiftCard<0){
            alert('Total Gift Card cannot be less than 0 ')
            return;
        }
        const data = {
            totalReplay: this.selectedTotalReplay,
            totalSpecialSurprice: this.selectedTotalSpecialSuprise,
            totalSpecialPrice: this.selectedTotalSpecialPrice,
            totalTopPrice: this.selectedTotalTopPrice,
            totalGitfCard: this.selectedTotalGiftCard,
        }
        service.setNewTotal(data)
        /*if(selectedTotalReplay)*/
    },
  },
};
</script>