<template>
  <div>
    <nav-header></nav-header>
    <nav-bread>
      <slot>你们好哈哈</slot>
      <slot>你们好哈哈</slot>
    </nav-bread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price">
            Price
            <svg class="icon icon-arrow-short">
              <use xlink:href="#icon-arrow-short" />
            </svg>
          </a>
          <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter" v-bind:class="{'filterby-show':filterBy}">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd>
                <a href="javascript:void(0)" v-bind:class="{'cur':priceChecked=='all'}"  @click="priceChecked='all'">All</a>
              </dd>
              <dd  v-for="(item,index) in priceFilter" :key="index">
                <a href="javascript:void(0)" @click="setPriceClose(index)" v-bind:class="{'cur':priceChecked==index}">{{item.startPrice}} - {{item.endPrice}}</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="(item,index) in goodList" :key="index">
                  <div class="pic">
                    <a href="#">
                      <img v-lazy="'/static/'+item.prodcutImg" v-bind:alt="item.productName" />
                    </a>
                  </div>
                  <div class="main">
                    <div class="name">{{item.productName}}</div>
                    <div class="price">{{item.productPrice}}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-show="overLayFlag" @click="closePop"></div>
      <nav-footer></nav-footer>
    </div>
  </div>
</template>

<script>
import './../assets/css/product.css'
import './../assets/css/base.css'
import NavHeader from '@/components/NavHeader.vue'
import NavBread from '@/components/NavBread.vue'
import NavFooter from '@/components/NavFooter.vue'
import axios from 'axios'
export default {
  data () {
    return {
      goodList: [],
      priceFilter: [
        {
          startPrice: '0.00',
          endPrice: '500.00'
        },
        {
          startPrice: '500.00',
          endPrice: '1000.00'
        },
        {
          startPrice: '1000.00',
          endPrice: '2000.00'
        }
      ],
      priceChecked: 'all',
      filterBy: false,
      overLayFlag: false
    }
  },
  components: {
    NavHeader,
    NavBread,
    NavFooter
  },
  mounted () {
    this.getGoodList()
  },
  methods: {
    getGoodList () {
      axios.get('/goods').then(res => {
        console.log('数据请求good', res)
        this.goodList = res.data.result
      })
    },
    showFilterPop () {
      this.filterBy = true
      this.overLayFlag = true
    },
    setPriceClose (index) {
      this.priceChecked = index
      this.closePop()
    },
    closePop () {
      this.filterBy = false
      this.overLayFlag = false
    }
  }
}
</script>

<style scoped>
  .cur{
    color: orange;
  }
</style>
