import { ChakraProvider } from '@chakra-ui/react'
import Index from '@/components/Navbar'
import Lindex from '@/components/Landing-info'

export default function HomeOne() {
  return (
    <>
      <Index />
      <Lindex />
    </>
    // <ChakraProvider>
    //   <Provider store={store}>
    //     <App />
    //   </Provider>
    // </ChakraProvider>
  )
}
