<template lang="html">
      <v-form>
        <v-row justify="space-around">
          <v-col cols="6">
            <v-text-field
              v-model="show.title"
              label="Show Name"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="show.act"
              label="act name"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols=3 >
        <v-select
          v-model="show.venue"
          label="venue"
          :items="this.venues"
          hint="click to re-use, or type to add"
        ></v-select>
      </v-col><v-col cols=3>
        <v-select
            v-model="show.genre"
            :items="genres"
            attach
            chips
            label="genre"
            multiple
            disabled
          ></v-select>
        </v-col>
          <v-col cols=3>start time</v-col><v-col cols=1>
        <v-select
          v-model="starthr"
          :items="time1"
          label="hr"
          dense
          >
        </v-select>
      </v-col><v-col cols=1>:</v-col><v-col cols=1>
        <v-select
          v-model="startmin"
          dense
          :items="time2"
          label="min"
          >
        </v-select>
      </v-col>

      <v-col cols=2>
        <v-select
        v-model="show.duration"
        dense
        :items="showLengths"
        label="duration"></v-select>
      </v-col>

      <v-col cols=3>end time</v-col>
      <v-col cols=1>
        <v-select
          v-model="endhr"
          :items="time1"
          label="hr"
          dense
          >
        </v-select>
      </v-col>
      <v-col cols=1>:</v-col>
      <v-col cols=1>
        <v-select
          v-model="endmin"
          dense
          :items="time2"
          label="min"
        ></v-select>
      </v-col>
    </v-row>
    <v-divider />
    <v-row>
      <v-col cols=6>
        <v-text-field
          v-model="show.links.instagram"
          label="instagram page"
          disabled
          dense
        ></v-text-field>
      </v-col>
      <v-col cols=6>
        <v-text-field
          v-model="show.links.twitter"
          label="twitter page"
          disabled
          dense
        ></v-text-field>
      </v-col>
    </v-row><v-row>
      <v-col cols=6>
        <v-text-field
          v-model="show.links.facebook"
          label="facebook page"
          disabled
          dense
        ></v-text-field>
      </v-col>
      <v-col cols=6>
        <v-text-field
          v-model="show.links.event"
          label="event page"
          disabled
          dense
        ></v-text-field>
      </v-col>
      </v-row><v-row>
      <v-col cols=6>
        <v-text-field
          v-model="show.links.youtube"
          label="youtube page"
          disabled
          dense
        ></v-text-field>
      </v-col>
      <v-col cols=6>
        <v-text-field
          v-model="show.links.video"
          label="video page"
          disabled
          dense
        ></v-text-field>
      </v-col>
      <v-col cols=6>
        <v-text-field
          v-model="show.links.edfringe"
          label="edfringe page"
          disabled
          dense
        ></v-text-field>
      </v-col>
    </v-row>
    <v-btn color="submit" @click="addShow">Add Show to Show Pool</v-btn>
  </v-form>
</template>

<script>
import ShowService from '../services/ShowService';

export default {
  name: 'add-show',

  data() {
    return{
      starthr: '',
      startmin: '',
      duration: '',
      endhr: '',
      endmin:'',
      show: {
        title: '',
        act: '',
        venue: '',
        // time: '',
        duration: '',
        image: '',
        genre: 'comedy',
        links:{
          facebook: '',
          event: '',
          twitter: '',
          instagram: '',
          youtube:'',
          video:'',
          edfringe:''
        },
        coins: [],
        badges: [],
        reviews: [],
        // startTime: "",
        // endTime: ""
      },
      genres: ['comedy', 'theatre', 'physical'],
      acts: ['act1', 'act2', 'act3'],
      // times: ['00:00', '00:05', '00:10', '00:15', '00:20']
      time1: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18','19','20', '21', '22', '23'],
      time2: ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'],
      showLengths: [60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5],
      venues: []
    }
  },

  mounted(){
  fetch("http://localhost:3000/api/venues")
    .then(response => response.json())
    .then(json => this.venues = json);

  },

  methods: {
    addShow: function() {
      const show = this.show
      ShowService.postShow(show)
    }
  },
  computed: {
      getShowTimeStart: function() {
        return this.show.startTime = this.starthr + ':' + this.startmin
      },
      getShowTimeEnd: function() {
        return this.show.endTime = this.endhr + ':' + this.endmin
      },
      getCurrentYear: function() {
        const date = new Date();
        return this.show.year = date.getFullYear();

      }
      // ,
      // UTCShowTime: function() {
      //   const time = new Date(`July 20, 1969 ${this.show.time}:00 GMT+00:00`);
      //   const endTime = time + (this.duration*60);
      //   return endTime.getHours() + ':' + endTime.getMinutes();
      // }
    }
  }

</script>

<style lang="css" scoped>
</style>
