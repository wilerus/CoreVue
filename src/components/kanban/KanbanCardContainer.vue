<template>
  <v-card>
    <v-card-title :key="title">
      <span class="title font-weight-light">{{title}}</span>
      <v-spacer></v-spacer>
      <v-btn
        flat
        icon
        small
        @click="addCard"
      >
        <v-icon>add</v-icon>
      </v-btn>
      <v-menu>
        <v-btn
          slot="activator"
          icon
          flat
          small
        >
          <v-icon>more_vert</v-icon>
        </v-btn>

        <v-list>
          <v-list-tile
            v-for="(item, i) in items"
            :key="i"
            @click="handleMenuAction(item.id)"
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-card-title>
    <draggable
      v-model="cards"
      @change="onChange"
      :options="{group:'cards'}"
      class="column-wrp"
    >
      <template v-for="card in cards">
        <card-item
          :key="card.title"
          :card="card"
        ></card-item>
      </template>
    </draggable>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import draggable from 'vuedraggable';
import CardItem from './KanbanCard.vue';
import CardsState from './KanbanStore';
import { TweenLite } from 'gsap';

export default Vue.extend({
    props: ['column', 'projectId'],
    data() {
        return {
            cards: this.column.cards,
            title: this.column.title,
            items: [
                {
                    id: 'remove',
                    title: 'Remove'
                }
            ]
        };
    },
    methods: {
        addCard() {
            this.$router.push({ name: 'KanbanCardCreation', params: { projectId: this.projectId, columnId: this.column.id } });
        },
        onChange(changes: any) {
            Object.keys(changes).forEach(change =>
                this.$store.commit(`${change}Card`, {
                    columnId: this.column.id,
                    card: changes[change].element,
                    index: changes[change].newIndex,
                    projectId: this.projectId
                })
            );
        },
        handleMenuAction(actionId: string) {
            switch (actionId) {
                case 'remove': {
                    this.$store.commit('removeColumn', { columnId: this.column.id });
                }
            }
        }
    },
    components: {
        CardItem,
        draggable
    }
});
</script>

<style>
.column-wrp {
    overflow-y: auto;
    min-height: 50px;
}
</style>
