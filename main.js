const APIKey = "";
const ChannelId = "UC2vLhj8PZYnRrtZ-tyEfOuQ";
const subscriberCount = document.getElementById("subscriberCount");
const channeltittle = document.getElementById("channeltittle");

let getdata = () => {
  fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${ChannelId}&key=${APIKey}`
  )
    .then((response) => {
      return response.json();
    })
    .then((currentSub) => {
      var hidsub = currentSub["items"][0].statistics.hiddenSubscriberCount;
      if (hidsub === true) {
        subscriberCount.innerHTML = " ";
      } else {
        subscriberCount.innerHTML =
          currentSub["items"][0].statistics.subscriberCount + " subscribers";
      }
    });

  fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${APIKey}&channelId=${ChannelId}&part=snippet,id&order=date&maxResults=20`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      channeltittle.innerHTML = data["items"][0].snippet.channelTitle;
      var link = document.getElementById("link");
      link.addEventListener("click", myFunction);

      function myFunction() {
        var min = 0;
        var max = data["items"].length;
        var video_id =
          data["items"][Math.floor(Math.random() * (max - min)) + min].id
            .videoId;
        if (video_id !== undefined) {
          window.open("https://youtu.be/" + video_id);
        } else {
          window.open("https://www.youtube.com/@Browb-yz4fd");
        }
      }
    });
};
getdata();

const instgram = "https://www.instagram.com/k_brow.n/?next=%2F";
const facebook = "https://x.com/brown_k75474";
const github = "https://github.com/Elli-mask";
const whatsapp = "https://wa.me/254743678908"; // Your WhatsApp link

function secondfunction(a) {
  window.open(a);
}
