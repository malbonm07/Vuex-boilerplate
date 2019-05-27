<template>
  <div class="hello">
    <button @click="selectLang('es')">es</button>
    <button @click="selectLang('en')">en</button>
    <h1>{{$t('hello')}}</h1>
     <country-flag country='es' size='big'/>
    <country-flag country='us' size='big'/>
    <country-flag country='fr' size='small'/>
    <country-flag country='per'/>
    <i class="fab fa-twitter"></i>
    <div class="caja">
    <v-lazy-image
      src="https://cdn-images-1.medium.com/max/800/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
      src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
      alt="Periscope"
    ></v-lazy-image>
    </div>
  </div>
</template>

<script>
import CountryFlag from 'vue-country-flag'


export default {
  name: 'HelloWorld',
  components: {
    CountryFlag
  },
  methods: {
    selectLang(lang) {
      this.$i18n.locale = lang
    }
  },
  created() {
    console.log(this)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
.caja {
  margin-top: 1000px;
}
// .v-lazy-image {
//   filter: blur(40px);
//   transition: filter 0.7s;
// }
// .v-lazy-image-loaded {
//   filter: blur(0);
// }
</style>
