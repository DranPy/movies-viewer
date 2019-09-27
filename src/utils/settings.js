import { toast, ToastPosition } from 'react-toastify'

let appRoot

const settings = {
  configureToast: () =>
    toast.configure({
      autoClose: 5000,
      closeOnClick: true,
      draggable: true,
      position: ToastPosition.BOTTOM_CENTER,
      hideProgressBar: true,
    }),
  setAppElement: element => {
    if (element) {
      appRoot = element
    }
  },
  getAppElement: () => appRoot,
}

export default settings
