import './styles/index.scss'
import Alpine from 'alpinejs'
import axios from 'axios'
window.Alpine = Alpine

window.getData = () => {
  return {
    msg: 'Hello World',
    show: false,
    imgSrc: '',
    async fetchImg(e) {
      e.preventDefault()
      try {
        const res = await axios.get('https://dog.ceo/api/breeds/image/random')
        this.imgSrc = res.data.message
        this.show = true
      }
      catch (error) {
        console.error(error)
      }
    },
  }
}

Alpine.start()
