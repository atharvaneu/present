import { ChakraProvider } from '@chakra-ui/react'

import store from '../redux/store'
import { Provider } from 'react-redux'
import App from './App'

export default function HomeOne() {
  return (
    <div>This is a nulla div</div>
    // <ChakraProvider>
    //   <Provider store={store}>
    //     <App />
    //   </Provider>
    // </ChakraProvider>
  )
}
