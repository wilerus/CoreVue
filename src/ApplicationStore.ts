import Vue from 'vue';
import Vuex from 'vuex';
import CardStore from './components/card/CardStore';
import ServicesStore from './components/services/ServicesStore';
import SocialStore from './components/social/SocialStore';
import ActivityStore from './components/activity/ActivityStore';
import TimelineStore from './components/timeline/TimelineStore';
import ProfileStore from './components/profile/ProfileStore';
import ChatStore from './components/chat/ChatStore';
import DashboardStore from './components/dashboard/DashboardStore';
import KanbanStore from './components/kanban/KanbanStore';

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    modules: {
        CardStore,
        ServicesStore,
        SocialStore,
        ActivityStore,
        TimelineStore,
        ProfileStore,
        ChatStore,
        DashboardStore,
        KanbanStore
    },
    state: {
        navigationTitle: ''
    },
    mutations: {
        updateNavigationTitle(state, newNavigationTitle) {
            state.navigationTitle = newNavigationTitle;
        }
    }
});

export default store;
