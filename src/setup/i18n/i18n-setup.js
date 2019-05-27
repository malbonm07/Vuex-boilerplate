import Vue from 'vue'
import VueI18n from 'vue-i18n'
import languages from '@/setup/i18n/languages'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en',
  messages: languages
})