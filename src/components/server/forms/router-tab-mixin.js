import {isEqual} from "lodash";

export const routerTabMixin = {
    data() {
        return {
            currentTab: 0,
            subTabs: {}
        }
    },
    computed: {
        currentSubTab: {
            get() {
                return this.subTabs[this.currentTab] || 0;
            },
            set(val) {
                const oldVal = this.subTabs[this.currentTab];
                this.subTabs[this.currentTab] = val;
                this.onSubTabChanged(val, oldVal);
            }
        }
    },
    watch: {
        currentTab: {
            immediate: false,
            async handler(newTab, oldTab) {
                if (newTab !== oldTab) {
                    const {query} = this.$route;
                    const queryTab = query.tab ? parseInt(query.tab) : 0;
                    const isSameTab = newTab === queryTab;

                    if (!isSameTab) {
                        this.$nextTick(() => {
                            this.currentSubTab = 0;
                            this.$router.replace({
                                path: this.$route.path,
                                query: {
                                    ...this.$route.query,
                                    tab: newTab + ''
                                }
                            }).catch(err => console.error(err.message));
                        })
                    }
                }
            }
        },
        currentSubTab: {
            immediate: false,
            handler(newSubTab, oldSubTab) {
                this.onSubTabChanged(newSubTab, oldSubTab);
            }
        },
        '$route.query': {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                if (isEqual(oldVal, newVal)) {
                    return;
                }

                const {tab, subTab} = newVal;

                const queryTab = tab !== undefined ? parseInt(tab) : 0;
                const querySubTab = subTab !== undefined ? parseInt(subTab) : 0;


                if (queryTab !== this.currentTab) {
                    this.currentTab = queryTab;
                }

                if (querySubTab !== this.currentSubTab) {
                    this.currentSubTab = querySubTab;
                }

                if (tab === undefined || subTab === undefined) {
                    this.$nextTick(() => {
                        this.$router.replace({
                            path: newVal.path,
                            query: {
                                tab: this.currentTab + '',
                                subTab: this.currentSubTab + ''
                            }
                        }).catch(err => console.error(err.message))
                    })
                }
            }
        }
    },
    methods: {
        onSubTabChanged(newSubTab, oldSubTab) {
            if (newSubTab !== oldSubTab) {
                const {query} = this.$route;
                const queryTab = query.subTab ? parseInt(query.subTab) : 0;
                const isSameTab = newSubTab === queryTab;

                if (!isSameTab) {
                    this.$nextTick(() => {
                        this.$router.replace({
                            path: this.$route.path,
                            query: {
                                ...this.$route.query,
                                subTab: newSubTab + ''
                            }
                        }).catch(err => console.error(err.message));
                    })
                }
            }
        }
    }
};
