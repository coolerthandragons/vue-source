<script>
import AudioCard from './components/AudioCard.vue'
import songs from './assets/songs.json'
export default {
  data() {
    return {
      songList: songs
    };
  },
};
import { data } from './assets/data';
const links =  reactive({})
links.value = await data.getWebsites('./songs.json')

let audioInfo1 = {
  title: "confessions of a drama queen",
  audioFile: "emlyn-confessions-of-a-drama-queen-[AudioTrimmer.com].mp3"
}

let audioInfo2 = {
  title: "boys will be boys",
  audioFile: "emlyn-boys-will-be-boys-[AudioTrimmer.com].mp3"
}

let audioInfo3 = {
  title: "B.O.M.B.",
  audioFile: "emlyn-B.O.M.B.-[AudioTrimmer.com].mp3"
}

let audioInfo4 = {
  title: "cruel world",
  audioFile: "emlyn-cruel-world-[AudioTrimmer.com].mp3"
}

let audioInfo5 = {
  title: "loneliest b!tch in america",
  audioFile: "emlyn-loneliest-b!tch-in-america-[AudioTrimmer.com].mp3"
}

let audioInfo6 = {
  title: "my best friends ex",
  audioFile: "emlyn-my-best-friends-ex-[AudioTrimmer.com].mp3" 
}

let audioInfo7 = {
  title: "plan z",
  audioFile: "emlyn-plan-z-[AudioTrimmer.com].mp3"
}

let audioInfo8 = {
  title: "temporary funeral",
  audioFile: "emlyn-temporary-funeral-[AudioTrimmer.com].mp3"
}

let audioInfo9 = {
  title: "the AUDACITY",
  audioFile: "emlyn-the-AUDACITY-[AudioTrimmer.com].mp3"
}

let audioInfo10 = {
  title: "you make a woman wanna...",
  audioFile: "emlyn-you-make-a-woman-wanna...-[AudioTrimmer.com].mp3"
}
</script>

<template>
  <main>
    <h1>Songs by Emlyn</h1>
    <p>Due to the size of the audios, I am only able to have 30 seconds of audio per song.</p>
    <section>
        <ul>
        <li><AudioCard v-bind="audioInfo2"/></li>
        <li><AudioCard v-bind="audioInfo3"/></li>
        <li><AudioCard v-bind="audioInfo1"/></li>
        <li><AudioCard v-bind="audioInfo4"/></li>
        <li><AudioCard v-bind="audioInfo5"/></li>
        <li><AudioCard v-bind="audioInfo6"/></li>
        <li><AudioCard v-bind="audioInfo7"/></li>
        <li><AudioCard v-bind="audioInfo8"/></li>
        <li><AudioCard v-bind="audioInfo9"/></li>
        <li><AudioCard v-bind="audioInfo10"/></li>
      </ul>
      <div v-for="data in songList">{{ data }}</div>
      <AudioCard v-bind="links"/>
    </section>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 50px 100px;
}
section {
  display: flex;
  justify-content: center;
}
</style>