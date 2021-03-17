<template lang="pug">
  .contacts.mx-auto
    #contacts-bg-container
      #contacts-bg
    .content
      h3.name Dmitry Dudin
      .contact.facebook
        img(src="~/static/images/icons/facebook.png" width="32" height="32")
        a(href="https://www.facebook.com/dudintv" target="_blank") facebook.com/dudintv
      .contact.linkedin
        img(src="~/static/images/icons/linkedin.png" width="32" height="32")
        a(href="https://www.linkedin.com/in/dudintv" target="_blank") linkedin.com/in/dudintv
      .contact.telegram
        img(src="~/static/images/icons/telegram.png" width="32" height="32")
        a(href="http://t.me/dudintv" target="_blank") @dudintv
      .contact.phone
        //- img(src="~/static/images/icons/viber_and_watsapp.png" width="44" height="32")
        .phone-number +31 6 189 765 18
        .realm Amsterdam, NL
</template>

<script>
import lottie from 'lottie-web'

export default {
  mounted () {
    lottie.loadAnimation({
      container: document.getElementById('contacts-bg'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/bg-turnip.json'
    })
  }
}
</script>

<style lang="scss" scoped>
  .contacts {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: -10vw;
    margin-bottom: -10vw;
  }

  #contacts-bg-container {
    position: absolute;
    width: 100%;
    max-width: 1000px;
    overflow: hidden;
    z-index: 0;
  }

  #contacts-bg {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
  }

  @media (max-width: 700px) {
    #contacts-bg {
      width: 180%;
    }
  }

  @media (max-width: 400px) {
    #contacts-bg {
      width: 200%;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    z-index: 100;
  }

  .contact {
    position: relative;
    padding-bottom: 1rem;

    img {
      position: absolute;
      left: 0;
      top: 0;
      transform-origin: 50% 50%;
      transform: translateX(-150%) scale(1);
      transition: transform 0.2s ease;
    }

    &:hover img {
      transform: translateX(-150%) scale(1.2);
    }
  }

  .realm {
    font-size: 0.8em;
    color: rgba(255,255,255,.5);
  }
</style>
