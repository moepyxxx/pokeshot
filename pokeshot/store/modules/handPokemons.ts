import {VuexModule, Module, MutationAction, Mutation, Action} from 'vuex-module-decorators' 
import store from "@/store/store"
import { TGender } from '~/types/gender';

export type THandPokemon =  {
  pokemon: string;
  gender: TGender;
  nickname: string;
  speciesId: number;
}

@Module({ dynamic: true, store, name: "handPokemons" })
export default class HandPokemons extends VuexModule {
  pokemons: THandPokemon[] = [];

  get firstOnHandPokemon() {
    return this.pokemons[0];
  }

  @Mutation
  addToOnHandPokemon(pokemon: THandPokemon) {
    if (this.pokemons.length >= 6) return;
    this.pokemons.push(pokemon);
  }

  @Action
  async fetchNewPokemon(pokemon: THandPokemon) {
    this.context.commit('addWheel', pokemon)
  }

}