<template>
  <section class="menu" v-if="isMenuActive">
    <ul>
      <li><button @click="$emit('openMenu', '/menus/pokemon')">ポケモン</button></li>
      <li><button @click="$emit('openMenu', '/menus/bag')">バッグ</button></li>
      <li><button @click="$emit('openMenu', '/menus/hero')">{{ hero.getHero.name }}</button></li>
      <li><button @click="$emit('openReport')">レポート</button></li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import Hero from '~/store/modules/hero';

@Component
export default class Menu extends Vue {

  hero: Hero = getModule(Hero);

  @Prop({ type: Boolean })
  isMenuActive!: boolean;
}
</script>

<style scoped lang="scss">
.menu {
  position: absolute;
  top: 10px;
  right: 10px;
  border: 4px solid #31A4AB;
  background: #fff;
  border-radius: 12px;
  padding: 20px 28px;
  z-index: 15;

  ul {
    padding: 0;
    li {
      text-decoration: none;
      line-height: 2;
      &::marker {
        content: none;
      }
      a {
        text-decoration: none;
      }
    }
  }
}

</style>