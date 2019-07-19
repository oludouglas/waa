/*
 * count.js
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */
import numeral from 'numeral'
import fire from '@/mixins/fire'
import inViewport from 'vue-in-viewport-mixin'
export default {
  mixins: [ inViewport, fire ],
  methods: {
    format(value) { return numeral(value).format('0.0a') },
    count_val (value) {
      if (!this.fire) return 0
      return numeral(value).format('0.00a').slice(0, -1)*1
    },
    count_opts (value, prefix='') {
      return {
        prefix: prefix,
        decimalPlaces: 1,
        suffix: numeral(value).format('0,0a').slice(-1),
      }
    },
  },
}
