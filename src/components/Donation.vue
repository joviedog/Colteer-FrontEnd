<template>
  <div class="hello">
    <el-row id="tp">
      <el-button
        v-for="type in contributionTypes"
        :key="type.title"
        :class="{ active: activeType === type.title }"
        @click="setType(type)"
        plain
        style="width: 20%;"
      >{{ type.title }}</el-button>
    </el-row>
    <br>
    <el-row id="cs">
      <el-button
        v-for="choice in currentType.choicesList"
        :key="choice.amount"
        :class="{ active: activeAmount === choice.amount }"
        @click="activeAmount = choice.amount"
        plain
      >${{ choice.amount }}</el-button>
    </el-row>
    <h5
      v-if="activeType !== '' && activeAmount != 0 && activeType !== 'Single'"
    >Contributing {{ activeAmount }} works out as ${{ weeklyAmount }} each week.</h5>

    <PayPal :amount="activeAmount" currency="CAD" :client="credentials" env="sandbox"></PayPal>
    <StripeCheckout
      ref="subscribeRef"
      :pk="publishableKey"
      :items="itemsRecurring"
      :successUrl="successUrl"
      :cancelUrl="cancelUrl"
    >
      <template slot="checkout-button">
        <el-button @click="checkout">Donate</el-button>
      </template>
    </StripeCheckout>
  </div>
</template>

<script>
import PayPal from "vue-paypal-checkout";
import { StripeCheckout } from "vue-stripe-checkout";

export default {
  name: "Donation",
  components: {
    PayPal,
    StripeCheckout
  },
  props: {
    msg: String
  },
  data() {
    return {
      publishableKey: "pk_test_4Z1qsEZXIUeuxlDJ1MtAQHGe00NjMm4W1r",
      currentType: {},
      activeType: "",
      activeAmount: 0,
      contributionTypes: [
        {
          title: "Single",
          choicesList: [
            { amount: 25 },
            { amount: 50 },
            { amount: 100 },
            { amount: 250 },
            { amount: "Other" }
          ]
        },
        {
          title: "Monthly",
          choicesList: [
            { amount: 5 },
            { amount: 10 },
            { amount: 20 },
            { amount: "Other" }
          ]
        },
        {
          title: "Annual",
          choicesList: [
            { amount: 60 },
            { amount: 100 },
            { amount: 250 },
            { amount: 500 },
            { amount: "Other" }
          ]
        }
      ],
      successUrl: `${document.location.href}success.html`,
      cancelUrl: `${document.location.href}cancel.html`,
      home: document.location.href,
      credentials: {
        sandbox:
          "AeBzJGyBT7uoLCigogpJDNspu86L74y54VJ9KI0Vd6kP9z_C3HkBWg80q6UuIaVoHgWKPe3bexCO0bM6",
        production:
          "AeBzJGyBT7uoLCigogpJDNspu86L74y54VJ9KI0Vd6kP9z_C3HkBWg80q6UuIaVoHgWKPe3bexCO0bM6"
      },
      itemsRecurring: [
        {
          plan: "prod_HfSC1NFxt2uUuK",
          quantity: 1
        }
      ]
    };
  },
  created() {
    this.activeType = "Annual";
    this.activeAmount = 60;
    this.currentType = this.contributionTypes[2];
  },
  computed: {
    weeklyAmount: function() {
      if (this.activeType === "Monthly") {
        return parseFloat(this.activeAmount / 4.33).toFixed(2);
      } else if (this.activeType === "Annual") {
        return parseFloat(this.activeAmount / 52.1429).toFixed(2);
      }
    }
  },
  methods: {
    setType(type) {
      this.activeType = type.title;
      this.currentType = type;
    },
    checkout() {
      this.$refs.subscribeRef.redirectToCheckout();
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.active {
  color: #409EFF;
  border-color: #409EFF;
  border-style: dashed;
  border-width: 4px;
}
</style>
