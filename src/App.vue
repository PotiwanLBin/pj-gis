
<template>
    <v-card
        height = "937px"
        dark
        
    >
        <v-navigation-drawer
            color="#FBC02D"
            permanent
            absolute
            right
            width="220"
        >
        
            <template v-slot:prepend>
                <v-list-item align="right">
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            Visualizing Air Polltion
                        </v-list-item-title>
                        
                        <v-list-item-subtitle>
                            GIS Project 
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </template>

            <v-divider></v-divider>

            
            <v-list
                rounded
                align="center"
            >
                <v-list-item-group
                    v-model="model"
                    mandatory
                    color="#4E342E"
                >
                    <v-list-item 
                        v-for="(item, i) in items"
                        :key="i"
                        link
                    >
                        <v-list-item-icon>
                            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Round">
                            <v-icon 
                                class='material-icons-round'
                                size="45">
                                {{ item.icon }}
                            </v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.title }}
                            </v-list-item-title>
                        </v-list-item-content>

                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>

<script>
    export default {
        data: () =>
        ({
            selectedItem: 1,
            items: [
                { title: 'Real-Time', icon: 'mdi-table' },
                { title: 'Audience', icon: 'mdi-map' },
            ],            
        }),
    }

</script>
