export const state = () => ({
  gradients: {
    all: ['#7940CC', '#234CA9'],
    animation: ['#F2858A', '#EFC0A0'],
    link: ['#79D6FF', '#61A3FF'],
    logic: ['#C45ADD', '#7F4EF4'],
    position: ['#2DCFE6', '#B6E78C'],
    texture: ['#C389F0', '#ED7485'],
  },
  copyCodeAnim: {},
})

export const strict = false

export const mutations = {
  saveCopyCodeAnim (state, newCopyCodeAnim) {
    state.copyCodeAnim = newCopyCodeAnim
  }
}

export const actions = {
  copyCode ({ state }, script) {
    const codePath = script.attributes.link.match(/(?<=https:\/\/bitbucket\.org\/).*/)[0]
    if (codePath && script.attributes.file) {
      fetch(`https://api.bitbucket.org/2.0/repositories/${codePath}/${script.attributes.file}`)
        .then((response) => response.text())
        .then((code) => {
          navigator.clipboard.writeText(code)
            .then(() => {
              // alert('Code is copied')
              state.copyCodeAnim.wrapper.style = 'display: block'
              state.copyCodeAnim.goToAndStop(0, true)
              state.copyCodeAnim.play()
            })
            .catch(err => {
              alert('ERROR: I couldn\'t get code from BitBucket repository.')
              console.log('Something went wrong', err)
            })
        })
    } else {
      console.log('There isn\'t script path URL')
    }
  }
}
